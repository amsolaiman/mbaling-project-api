import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

// types
import { IUserItem } from '@/types/user';

// ----------------------------------------------------------------------

const SECRET_KEY = process.env.JWT_SECRET_ACCESS_KEY as string;

export function generateAccessToken(user: IUserItem) {
  const payload = { id: user.id, email: user.email };

  return jwt.sign(payload, SECRET_KEY);
}

export async function authenticateAccessToken(request: NextRequest) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      { message: 'No token provided.' },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    return decoded;
  } catch {
    return NextResponse.json(
      { message: 'Invalid or expired token.' },
      { status: 401 }
    );
  }
}
