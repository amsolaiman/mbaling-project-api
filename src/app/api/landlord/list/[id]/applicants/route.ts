import { NextResponse } from 'next/server';

import { applicationList as applications } from '@/data';

// ----------------------------------------------------------------------

export async function GET() {
  return NextResponse.json(applications, {
    status: 200,
  });
}
