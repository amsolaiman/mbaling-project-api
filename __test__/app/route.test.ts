import { NextResponse } from 'next/server';

// route
import { GET } from '@/app/route';
// data
import { landlordUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api', () => {
  it('returns JSON response of Landlord users', async () => {
    const response = await GET();

    expect(response).toBeInstanceOf(NextResponse);

    const json = await response.json();

    expect(json).toEqual(landlordUsers);
  });
});
