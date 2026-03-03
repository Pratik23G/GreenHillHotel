const { getDb } = require('./_lib/db');

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, checkin, checkout, guests, roomId, message } = req.body;

  if (!name || !email || !checkin || !checkout || !roomId) {
    return res.status(400).json({ error: 'Missing required fields: name, email, checkin, checkout, roomId' });
  }

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime())) {
    return res.status(400).json({ error: 'Invalid date format' });
  }
  if (checkoutDate <= checkinDate) {
    return res.status(400).json({ error: 'Checkout must be after checkin' });
  }

  const db = getDb();

  try {
    // Check for overlapping bookings
    const { data: overlaps, error: overlapErr } = await db
      .from('bookings')
      .select('id')
      .eq('room_id', roomId)
      .eq('status', 'confirmed')
      .lt('checkin', checkout)
      .gt('checkout', checkin);

    if (overlapErr) throw overlapErr;

    if (overlaps.length > 0) {
      return res.status(409).json({ error: 'Room is not available for the selected dates' });
    }

    // Insert booking
    const { data: booking, error: insertErr } = await db
      .from('bookings')
      .insert({
        room_id: roomId,
        guest_name: name,
        guest_email: email,
        checkin,
        checkout,
        guests: guests || '1',
        message: message || '',
        status: 'confirmed',
      })
      .select('id')
      .single();

    if (insertErr) throw insertErr;

    // Send WhatsApp notification via CallMeBot
    const ownerPhone = process.env.OWNER_WHATSAPP;
    const apiKey = process.env.CALLMEBOT_API_KEY;
    if (ownerPhone && apiKey) {
      const roomNames = {
        'room-101': 'Room 101 — Valley View Family Room',
        'room-102': 'Room 102 — Ridge View Room',
        'room-103': 'Room 103 — Kanchenjunga View Room',
        'room-301': 'Room 301 — Attic Family Suite',
        'room-302': 'Room 302 — Panorama Corridor Suite',
        'room-309': 'Room 309 — Hillside View Room',
      };
      const text = `🏨 New Booking!\n\nGuest: ${name}\nEmail: ${email}\nRoom: ${roomNames[roomId] || roomId}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests || '1'}\n${message ? 'Notes: ' + message : ''}`;

      try {
        await fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(ownerPhone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apiKey)}`
        );
      } catch (whatsappErr) {
        console.error('WhatsApp notification failed:', whatsappErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      bookingId: booking.id,
      message: 'Booking confirmed successfully',
    });
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
