import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

// ----------------------------------------------------------------------

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_ACCESS_KEY as string;

export default async function authenticateAccessToken(request: NextRequest) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'No token provided.' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    return decoded;
  } catch {
    return NextResponse.json({ message: 'Invalid or expired token.' }, { status: 401 });
  }
}
