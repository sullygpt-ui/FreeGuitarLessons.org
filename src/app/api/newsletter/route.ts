import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: 'Newsletter service unavailable.' }, { status: 503 });
    }

    const { error } = await supabase.from('rhythmguitar_subscribers').upsert({ email, source: 'freeguitarlessons.org' }, { onConflict: 'email' });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ message: "You're already subscribed!" });
      }
      return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
    }

    return NextResponse.json({ message: "You're in! Welcome to the community." });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
