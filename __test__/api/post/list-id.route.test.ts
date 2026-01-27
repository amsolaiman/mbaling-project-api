import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/list/[id]/route';

// ----------------------------------------------------------------------

describe('GET /api/post/list/[id]', () => {
  it('returns Post details by id', async () => {
    const studentId = '763bfcfc-2b6e-478d-914e-3dfc1cb29209';

    const request = new NextRequest(
      `http://localhost:3000/api/post/list/${studentId}`
    );

    const context = {
      params: Promise.resolve({ id: studentId }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body).toEqual({
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
    });
  });
});
