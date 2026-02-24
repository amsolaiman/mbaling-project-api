import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { adminUsers } from '@/data';
// types
import { UserAdminResponse } from '@/types/user';

// ----------------------------------------------------------------------

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const userById = adminUsers.find((user) => user.id === id);

  if (!userById) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const result: UserAdminResponse = {
    ...omit(userById, ['password']),
  };

  return NextResponse.json(result, { status: 200 });
}
