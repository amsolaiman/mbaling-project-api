import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/search/route';

// ----------------------------------------------------------------------

describe('GET /api/post/search', () => {
  it('returns paginated Post Search list for query "available" and limit=3 & page=5', async () => {
    const url =
      'http://localhost:3000/api/post/search?query=available&limit=3&page=5';

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 2,
      totalOverall: 14,
    });

    expect(body.params).toEqual({
      page: 5,
      limit: 3,
    });

    expect(body.data).toHaveLength(2);

    expect(body.data).toEqual([
      {
        id: '2d15249a-a651-4d16-a227-394458a2d18d',
        title:
          'New available and affordable cottage unit for LADIES / students',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt arcu vitae risus dignissim vestibulum. Ut nec lacus fringilla, tincidunt turpis eu, scelerisque metus. Suspendisse potenti. Vivamus ut turpis id quam vehicula vulputate ut sit amet turpis. Nunc et magna non quam vestibulum malesuada at nec massa. Nam tincidunt quam ac dolor dictum, eget facilisis nulla fermentum. Mauris quis nulla sapien. Morbi eu nibh et quam euismod tristique. Quisque sed ligula nisi. Sed fringilla, sem eu finibus ultrices, ex urna elementum arcu, at mollis leo massa in elit. Nunc iaculis consectetur volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vitae purus tellus. Donec urna ligula, feugiat at facilisis sodales, vehicula vehicula felis. Aliquam euismod sodales consequat. Curabitur ut faucibus nulla. Curabitur porta tellus a justo vestibulum cursus. Aliquam aliquet nec arcu vel porta. Proin sed velit eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis nisi dapibus, placerat tortor at, posuere est. Aenean auctor fringilla odio, at consectetur justo lacinia ac. Cras ut elit turpis. Aliquam eu tristique magna. Integer at tincidunt turpis. Integer imperdiet libero non nunc malesuada vehicula quis in diam. Aenean ultricies magna eget magna condimentum, id dictum magna vehicula. Phasellus vitae velit id lorem luctus elementum. Nullam interdum augue a diam lacinia, vel ultrices nulla efficitur.',
        price: 1200,
        isVisible: true,
        createdAt: '2022-10-31T09:06:40',
        updatedAt: '2022-10-31T09:06:40',
        deletedAt: null,
        uploads: [
          {
            id: '07c44261-2ebd-4b4f-97de-ba9a67c0c7be',
            imgUrl: 'http://localhost:3000/assets/upload/upload_3.png',
          },
          {
            id: '55027698-efa3-46eb-9b76-27bb9c205774',
            imgUrl: 'http://localhost:3000/assets/upload/upload_1.png',
          },
          {
            id: '9d546046-6ad4-4238-b036-d599ab1085f9',
            imgUrl: 'http://localhost:3000/assets/upload/upload_12.png',
          },
          {
            id: '88795d47-8401-4c9f-99a8-bad8e5131238',
            imgUrl: 'http://localhost:3000/assets/upload/upload_18.png',
          },
        ],
      },
      {
        id: '9cafd4b8-6ad5-4f91-8451-c575b8cf7ef9',
        title: 'New Available apartment unit 2-story @ MSU 7th street',
        description:
          'Vivamus ut turpis id quam vehicula vulputate ut sit amet turpis. Nunc et magna non quam vestibulum malesuada at nec massa. Nam tincidunt quam ac dolor dictum, eget facilisis nulla fermentum. Integer at tincidunt turpis. Integer imperdiet libero non nunc malesuada vehicula quis in diam. Cras vitae purus tellus. Donec urna ligula, feugiat at facilisis sodales, vehicula vehicula felis. Aliquam euismod sodales consequat. Curabitur ut faucibus nulla. Curabitur porta tellus a justo vestibulum cursus. Aliquam aliquet nec arcu vel porta. Proin sed velit eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis nisi dapibus, placerat tortor at, posuere est. Aenean auctor fringilla odio, at consectetur justo lacinia ac. Cras ut elit turpis. Aliquam eu tristique magna.',
        price: 7000,
        isVisible: true,
        createdAt: '2020-07-29T04:53:36',
        updatedAt: '2020-07-29T04:53:36',
        deletedAt: null,
        uploads: [
          {
            id: '4661d83a-ba5c-42bc-bf3d-b1c1c65d619a',
            imgUrl: 'http://localhost:3000/assets/upload/upload_8.png',
          },
          {
            id: '9a41469d-444e-44de-b486-95195432ac40',
            imgUrl: 'http://localhost:3000/assets/upload/upload_24.png',
          },
          {
            id: '5160964c-556e-4239-ab78-56537759f651',
            imgUrl: 'http://localhost:3000/assets/upload/upload_12.png',
          },
          {
            id: '823da3ca-9944-4271-99b5-2e5988dba248',
            imgUrl: 'http://localhost:3000/assets/upload/upload_1.png',
          },
          {
            id: '3d47770b-5bde-4eaa-8a2f-e0ae24a38ded',
            imgUrl: 'http://localhost:3000/assets/upload/upload_16.png',
          },
        ],
      },
    ]);
  });
});
