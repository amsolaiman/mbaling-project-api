import { NextRequest, NextResponse } from 'next/server';
// ----------------------------------------------------------------------

export function middleware(request: NextRequest) {
  if (request.method === 'OPTIONS') {
    return NextResponse.next();
  }

  const basicAuthEnabled = process.env.BASIC_AUTH_BYPASS === 'true';

  if (!basicAuthEnabled) {
    return NextResponse.next();
  }

  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!username || !password) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return unauthorized();
  }

  const [scheme, encoded] = authHeader.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    return unauthorized();
  }

  const decoded = atob(encoded);
  const [user, pass] = decoded.split(':');

  if (user !== username || pass !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

function unauthorized() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"',
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - API routes
     * - Next.js internals
     * - static files
     */
    '/((?!api|_next|.*\\..*).*)',
  ],
};
