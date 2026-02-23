import jwt from 'jsonwebtoken';

import { IUserItem } from '@/types/user';

// ----------------------------------------------------------------------

const SECRET_KEY = process.env.JWT_SECRET_ACCESS_KEY as string;

export function generateAccessToken(user: IUserItem) {
  const payload = { id: user.id, email: user.email };

  return jwt.sign(payload, SECRET_KEY);
}
