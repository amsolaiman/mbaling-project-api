import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/user/route';

// ----------------------------------------------------------------------

describe('GET /api/post/user', () => {
  it('returns paginated Post list by a user', async () => {
    const housingId = 'aad5d657-3ecb-4c4e-b56e-60c0845f92a5';

    const url = `http://localhost:3000/api/post/user?id=${housingId}`;

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

    expect(body.data).toEqual([
      {
        id: '763bfcfc-2b6e-478d-914e-3dfc1cb29209',
        title: 'Affordable student cottage unit for individuals',
        description:
          'Cras vitae purus tellus. Donec urna ligula, feugiat at facilisis sodales, vehicula vehicula felis. Aliquam euismod sodales consequat. Curabitur ut faucibus nulla. Curabitur porta tellus a justo vestibulum cursus. Aliquam aliquet nec arcu vel porta. Proin sed velit eros. Vivamus ut turpis id quam vehicula vulputate ut sit amet turpis. Nunc et magna non quam vestibulum malesuada at nec massa. Nam tincidunt quam ac dolor dictum, eget facilisis nulla fermentum. Mauris quis nulla sapien. Morbi eu nibh et quam euismod tristique. Quisque sed ligula nisi. Sed fringilla, sem eu finibus ultrices, ex urna elementum arcu, at mollis leo massa in elit. Nunc iaculis consectetur volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultricies magna eget magna condimentum, id dictum magna vehicula. Phasellus vitae velit id lorem luctus elementum. Nullam interdum augue a diam lacinia, vel ultrices nulla efficitur.',
        price: 1000,
        isVisible: true,
        createdAt: '2023-10-06T06:10:21',
        updatedAt: '2023-10-06T06:10:21',
        deletedAt: null,
        uploads: [
          {
            id: '5e1732f5-f486-4445-bab2-02dce424be60',
            imgUrl: 'http://localhost:3000/assets/upload/upload_1.png',
          },
          {
            id: '279055d3-a443-41c7-983a-b51411255211',
            imgUrl: 'http://localhost:3000/assets/upload/upload_7.png',
          },
          {
            id: '346793cf-ca79-48d1-b5dd-e0d588c183da',
            imgUrl: 'http://localhost:3000/assets/upload/upload_14.png',
          },
        ],
      },
      {
        id: '1b28808a-8e1a-4ccb-826d-aa1722f186e3',
        title: 'Newly renovated unit Available for students',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt arcu vitae risus dignissim vestibulum. Ut nec lacus fringilla, tincidunt turpis eu, scelerisque metus. Suspendisse potenti. Aenean ultricies magna eget magna condimentum, id dictum magna vehicula. Phasellus vitae velit id lorem luctus elementum. Nullam interdum augue a diam lacinia, vel ultrices nulla efficitur. Mauris quis nulla sapien. Morbi eu nibh et quam euismod tristique. Quisque sed ligula nisi. Sed fringilla, sem eu finibus ultrices, ex urna elementum arcu, at mollis leo massa in elit. Nunc iaculis consectetur volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vitae purus tellus. Donec urna ligula, feugiat at facilisis sodales, vehicula vehicula felis. Aliquam euismod sodales consequat. Curabitur ut faucibus nulla. Curabitur porta tellus a justo vestibulum cursus. Aliquam aliquet nec arcu vel porta. Proin sed velit eros. Integer at tincidunt turpis. Integer imperdiet libero non nunc malesuada vehicula quis in diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis nisi dapibus, placerat tortor at, posuere est. Aenean auctor fringilla odio, at consectetur justo lacinia ac. Cras ut elit turpis. Aliquam eu tristique magna.',
        price: 1200,
        isVisible: true,
        createdAt: '2024-03-31T00:10:28',
        updatedAt: '2024-07-04T10:16:34',
        deletedAt: null,
        uploads: [
          {
            id: '6cf76558-9da8-4e34-9867-b888d0af8508',
            imgUrl: 'http://localhost:3000/assets/upload/upload_2.png',
          },
          {
            id: '6cf3b0e8-5e26-4f01-aea5-bf71e38534c5',
            imgUrl: 'http://localhost:3000/assets/upload/upload_22.png',
          },
          {
            id: '7b119cd7-e6ea-4f2d-9d69-6c6519cbc25a',
            imgUrl: 'http://localhost:3000/assets/upload/upload_17.png',
          },
        ],
      },
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
    ]);
  });
});
