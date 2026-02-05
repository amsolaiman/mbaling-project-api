import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/list/route';
// utils
import { omit } from '@/utils/object';
// data
import { postList, postUploads } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/post/list', () => {
  it('returns paginated Post list for limit=2 & page=1', async () => {
    const url = 'http://localhost:3000/api/post/list?limit=2&page=1';

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 2,
      totalOverall: 38,
    });

    expect(body.params).toEqual({
      page: 1,
      limit: 2,
    });

    expect(body.data).toHaveLength(2);

    expect(body.data).toEqual(
      postList.slice(0, 2).map((post) => {
        const uploads =
          postUploads.filter((upload) => upload.postId === post.id) ||
          ([] as (typeof postUploads)[number][]);

        return {
          ...omit(post, ['housingId']),
          uploads: uploads.map((upload) => ({
            ...omit(upload, ['postId']),
          })),
        };
      })
    );
  });
});
