import { NextRequest } from 'next/server';

import { GET } from '@/app/api/landlord/list/route';
// utils
import { omit } from '@/utils/object';
// data
import { landlordDetails, landlordUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/landlord/list', () => {
  it('returns paginated Landlord list for limit=3 & page=2', async () => {
    const url = 'http://localhost:3000/api/landlord/list?limit=3&page=2';

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 3,
      totalOverall: 13,
    });

    expect(body.params).toEqual({
      page: 2,
      limit: 3,
    });

    expect(body.data).toHaveLength(3);

    expect(body.data).toEqual(
      landlordUsers.slice(3, 6).map((user) => {
        const detail =
          landlordDetails.find((detail) => detail.userId === user.id) ||
          ({} as (typeof landlordDetails)[number]);

        return {
          ...omit(user, ['password']),
          details: omit(detail, ['userId']),
        };
      })
    );
  });
});
