import { NextResponse } from 'next/server';

import { postList as posts } from '@/data';

// ----------------------------------------------------------------------

export async function GET() {
  return NextResponse.json(posts, {
    status: 200,
  });
}
