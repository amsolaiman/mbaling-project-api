import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/list/route';

// ----------------------------------------------------------------------

describe('GET /api/post/list', () => {
  it('returns paginated Post list for limit=2 & page=1', async () => {
    const url =
      'http://localhost:3000/api/post/list?limit=2&page=1&createdBy=true';

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

    expect(body.data).toEqual([
      {
        id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        title: 'Available! Spacious ladies-only boarding room unit',
        description:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Aenean sit amet sapien nisi. In vitae mauris felis. Integer vehicula sapien at dolor varius, sit amet gravida libero interdum. Morbi nec egestas erat. Sed dignissim augue eget quam aliquet, non placerat est euismod.',
        price: 1500,
        isVisible: true,
        createdAt: '2022-06-10T02:15:30',
        updatedAt: '2022-09-15T05:10:45',
        deletedAt: null,
        uploads: [
          {
            id: '1f2a3b4c-d5e6-7f8a-9b0c-d1e2f3g4h5i6',
            imgUrl: 'http://localhost:3000/assets/upload/upload_2.png',
          },
          {
            id: '2g3h4i5j-k6l7-m8n9-o0p1-q2r3s4t5u6v7',
            imgUrl: 'http://localhost:3000/assets/upload/upload_13.png',
          },
          {
            id: '3h4i5j6k-l7m8-n9o0-p1q2-r3s4t5u6v7w8',
            imgUrl: 'http://localhost:3000/assets/upload/upload_7.png',
          },
        ],
        createdBy: {
          id: 'f5b2a8d5-9e7c-4bfa-bb99-88c1e9c458d3',
          username: 'demo_landlord',
          role: 'landlord',
          firstName: 'Malik',
          lastName: 'Gania',
          middleName: 'Imam',
          nameExtension: null,
          fullName: 'Malik I. Gania',
          dateOfBirth: '1990-03-19',
          gender: 'male',
          email: 'demo_landlord@mbaling.com',
          phoneNumber: '+639953498676',
          addressLine1: '036 5th Street',
          addressLine2: 'Sagonsongan',
          addressLine3: 'City of Marawi',
          addressLine4: 'Lanao Del Sur',
          avatarUrl:
            'http://localhost:3000/assets/avatar/demo/avatar_landlord.png',
          createdAt: '2019-01-03T09:50:15',
          createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
          updatedAt: '2023-03-25T06:37:00',
          updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
          deletedAt: null,
          deletedBy: null,
          details: {
            id: 'd3b2f9a7-0a6d-4fef-8e2b-4e3b40d8b8c9',
            housingName: "Gania's Boarding House",
            chatLink: 'https://m.me/gania_boarding',
            mapLink: null,
          },
        },
      },
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
        createdBy: {
          id: 'aad5d657-3ecb-4c4e-b56e-60c0845f92a5',
          username: 'abdullah_mamintal',
          role: 'landlord',
          firstName: 'Abdullah',
          lastName: 'Mamintal',
          middleName: 'Guimbal',
          nameExtension: 'Jr.',
          fullName: 'Abdullah G. Mamintal, Jr.',
          dateOfBirth: '1978-06-10',
          gender: 'male',
          email: 'abdullah.mamintal@example.com',
          phoneNumber: '+639295654439',
          addressLine1: '036 Laguindab Road',
          addressLine2: 'Cadayonan I',
          addressLine3: 'City of Marawi',
          addressLine4: 'Lanao Del Sur',
          avatarUrl:
            'http://localhost:3000/assets/avatar/landlord/avatar_1.png',
          createdAt: '2019-04-03T04:56:18',
          createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
          updatedAt: '2023-07-22T12:47:44',
          updatedBy: 'b1dc27e6-8bd3-4411-9d6d-0895e0634ef6',
          deletedAt: null,
          deletedBy: null,
          details: {
            id: '02c78542-0f07-4268-ac73-29b29e512eb1',
            housingName: 'Mamintal Rental Cottages',
            chatLink: 'https://m.me/abdullah_mamintal',
            mapLink: null,
          },
        },
      },
    ]);
  });
});
