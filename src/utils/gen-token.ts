import type { StringValue } from 'ms';
import jwt, { SignOptions } from 'jsonwebtoken';

// types
import { IUserItem } from '@/types/user';

// ----------------------------------------------------------------------

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_ACCESS_KEY as string;

export default function generateAccessToken(user: IUserItem) {
  const payload = { id: user.id, email: user.email };

  const options: SignOptions = {
    expiresIn: (process.env.NEXT_PUBLIC_JWT_ACCESS_EXPIRATION as StringValue) || '1h',
  };

  return jwt.sign(payload, SECRET_KEY, options);
}
