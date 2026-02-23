import { NextResponse } from 'next/server';

// route
import { GET } from '@/app/api/admin/list/route';
// data
import { adminUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/admin/list', () => {
  it('returns JSON response of Admin users', async () => {
    const response = await GET();

    expect(response).toBeInstanceOf(NextResponse);

    const json = await response.json();

    expect(json).toEqual(adminUsers);
  });
});
