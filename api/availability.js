const { getDb } = require('./_lib/db');

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { checkin, checkout, roomId } = req.query;

  if (!checkin || !checkout) {
    return res.status(400).json({ error: 'Missing required query params: checkin, checkout' });
  }

  const db = getDb();
  const roomIds = roomId ? [roomId] : ['room-101', 'room-102', 'room-103'];

  try {
    const availability = {};

    for (const rid of roomIds) {
      const { data: overlaps, error } = await db
        .from('bookings')
        .select('id')
        .eq('room_id', rid)
        .eq('status', 'confirmed')
        .lt('checkin', checkout)
        .gt('checkout', checkin);

      if (error) throw error;
      availability[rid] = overlaps.length === 0;
    }

    return res.status(200).json(availability);
  } catch (err) {
    console.error('Availability check error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
