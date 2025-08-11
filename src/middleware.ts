import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ----------------------------------------------------------------------

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_CORS_ORIGIN);
  response.headers.set('Access-Control-Allow-Methods', process.env.NEXT_PUBLIC_CORS_METHODS);
  response.headers.set('Access-Control-Allow-Headers', process.env.NEXT_PUBLIC_CORS_HEADERS);

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
