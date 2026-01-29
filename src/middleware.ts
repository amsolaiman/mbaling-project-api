import { NextRequest, NextResponse } from 'next/server';

// ----------------------------------------------------------------------

function unauthorized() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"',
    },
  });
}

export function middleware(request: NextRequest) {
  if (request.method === 'OPTIONS') {
    return NextResponse.next();
  }

  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;
  const bypassAuth = process.env.BASIC_AUTH_BYPASS === 'true';

  if (!bypassAuth) {
    if (username && password) {
      const authHeader = request.headers.get('authorization');

      if (!authHeader) {
        return unauthorized();
      }

      const expectedAuth = `Basic ${btoa(`${username}:${password}`)}`;
      const isAuthorized = authHeader === expectedAuth;

      if (!isAuthorized) {
        return unauthorized();
      }
    }
  }

  return NextResponse.next();
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
