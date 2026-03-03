const { getDb } = require('./_lib/db');

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { roomId } = req.query;

  if (!roomId) {
    return res.status(400).json({ error: 'Missing required query param: roomId' });
  }

  const db = getDb();

  try {
    const { data: rows, error } = await db
      .from('bookings')
      .select('checkin, checkout')
      .eq('room_id', roomId)
      .eq('status', 'confirmed')
      .gt('checkout', new Date().toISOString().split('T')[0])
      .order('checkin', { ascending: true });

    if (error) throw error;

    return res.status(200).json({
      roomId,
      bookedDates: rows.map(r => ({ checkin: r.checkin, checkout: r.checkout })),
    });
  } catch (err) {
    console.error('Booked dates error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
