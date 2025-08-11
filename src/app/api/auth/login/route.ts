import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

// data
import { landlordUsers, studentUsers } from '@/data';
import generateAccessToken from '@/utils/gen-token';

// ----------------------------------------------------------------------

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const userList = [...landlordUsers, ...studentUsers];

  //#region Checking username
  const user = userList.find((_u) => _u.username === username);

  if (!user) {
    return NextResponse.json({ message: 'Invalid username.' }, { status: 401 });
  }
  //#endregion

  //#region Checking password
  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Invalid password.' }, { status: 401 });
  }
  //#endregion

  const accessToken = generateAccessToken(user);

  return NextResponse.json({ message: 'Login successful.', accessToken, user }, { status: 200 });
}
