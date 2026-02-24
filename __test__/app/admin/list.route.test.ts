import { NextRequest } from 'next/server';

import { GET } from '@/app/api/admin/list/route';
// utils
import { omit } from '@/utils/object';
// data
import { adminUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/admin/list', () => {
  it('returns paginated Admin list', async () => {
    const url = 'http://localhost:3000/api/admin/list';

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 3,
      totalOverall: 3,
    });

    expect(body.params).toEqual({
      page: 1,
      limit: 3,
    });

    expect(body.data).toHaveLength(3);

    expect(body.data).toEqual(
      adminUsers.map((user) => ({ ...omit(user, ['password']) }))
    );
  });
});
