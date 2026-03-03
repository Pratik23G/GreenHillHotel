const { createClient } = require('@supabase/supabase-js');

async function setup() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error('Missing environment variables: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
    console.log('\nUsage:');
    console.log('  SUPABASE_URL="https://xxx.supabase.co" SUPABASE_SERVICE_ROLE_KEY="your-key" npm run setup-db');
    console.log('\nAlternatively, create the table manually in the Supabase SQL Editor:\n');
    console.log(`CREATE TABLE IF NOT EXISTS bookings (
  id BIGSERIAL PRIMARY KEY,
  room_id TEXT NOT NULL,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  checkin DATE NOT NULL,
  checkout DATE NOT NULL,
  guests TEXT DEFAULT '1',
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT now()
);`);
    process.exit(1);
  }

  const supabase = createClient(url, key);

  const { error } = await supabase.rpc('exec_sql', {
    query: `
      CREATE TABLE IF NOT EXISTS bookings (
        id BIGSERIAL PRIMARY KEY,
        room_id TEXT NOT NULL,
        guest_name TEXT NOT NULL,
        guest_email TEXT NOT NULL,
        checkin DATE NOT NULL,
        checkout DATE NOT NULL,
        guests TEXT DEFAULT '1',
        message TEXT DEFAULT '',
        status TEXT DEFAULT 'confirmed',
        created_at TIMESTAMPTZ DEFAULT now()
      );
    `
  });

  if (error) {
    console.log('Note: The RPC method may not be available. Create the table manually instead.');
    console.log('Go to Supabase Dashboard > SQL Editor and run:\n');
    console.log(`CREATE TABLE IF NOT EXISTS bookings (
  id BIGSERIAL PRIMARY KEY,
  room_id TEXT NOT NULL,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  checkin DATE NOT NULL,
  checkout DATE NOT NULL,
  guests TEXT DEFAULT '1',
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT now()
);`);
    process.exit(1);
  }

  console.log('Table "bookings" created successfully.');
  process.exit(0);
}

setup().catch(err => {
  console.error('Setup failed:', err);
  process.exit(1);
});
