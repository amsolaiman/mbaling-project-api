import { NextRequest } from 'next/server';

import { GET } from '@/app/api/landlord/list/[id]/route';
// utils
import { omit } from '@/utils/object';
// data
import { landlordDetails, landlordUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/landlord/list/[id]', () => {
  it('returns Landlord details by id', async () => {
    const id = 'aad5d657-3ecb-4c4e-b56e-60c0845f92a5';

    const request = new NextRequest(
      `http://localhost:3000/api/landlord/list/${id}`
    );

    const context = {
      params: Promise.resolve({ id }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    const userById = landlordUsers[1];

    const detail =
      landlordDetails.find((detail) => detail.userId === userById.id) ||
      ({} as (typeof landlordDetails)[number]);

    expect(body).toEqual({
      ...omit(userById, ['password']),
      details: omit(detail, ['userId']),
    });
  });
});
