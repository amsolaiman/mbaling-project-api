import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/search/route';
// utils
import { omit } from '@/utils/object';
// data
import { postList, postUploads } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/post/search', () => {
  it('returns paginated Post Search list for query "boarding" and limit=3 & page=2', async () => {
    const query = 'boarding';

    const url = `http://localhost:3000/api/post/search?query=${query}&limit=3&page=2`;

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    const filteredPostList =
      postList.filter((post) => post.title.toLowerCase().includes(query)) ||
      ([] as (typeof postList)[number][]);

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 2,
      totalOverall: 5,
    });

    expect(body.params).toEqual({
      page: 2,
      limit: 3,
    });

    expect(body.data).toHaveLength(2);

    expect(body.data).toEqual(
      filteredPostList.slice(3, 5).map((post) => {
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
