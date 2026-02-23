import { NextResponse } from 'next/server';

import { adminUsers as users } from '@/data';

// ----------------------------------------------------------------------

export async function GET() {
  return NextResponse.json(users, {
    status: 200,
  });
}
