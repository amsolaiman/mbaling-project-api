import { NextRequest } from 'next/server';

import { GET } from '@/app/api/landlord/list/route';

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

    expect(body.data).toEqual([
      {
        id: 'f1b2c3d4-5678-9101-1121-3141f5g6h7i8',
        username: 'heidyo_vasquez',
        role: 'landlord',
        firstName: 'Ramon',
        lastName: 'Vasquez',
        middleName: 'Heidyo',
        nameExtension: 'III',
        fullName: 'Ramon H. Vasquez, III',
        dateOfBirth: '1990-01-07',
        gender: 'male',
        email: 'ramon.heidyvasquez@example.com',
        phoneNumber: '+639178845288',
        addressLine1: '761 7th Street',
        addressLine2: 'Sagonsongan',
        addressLine3: 'City of Marawi',
        addressLine4: 'Lanao Del Sur',
        avatarUrl: 'http://localhost:3000/assets/avatar/landlord/avatar_3.png',
        createdAt: '2019-01-15T09:25:16',
        createdBy: '43b5c06e-e167-4643-a6de-271b6a9e3937',
        updatedAt: '2023-02-10T22:15:25',
        updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        deletedAt: null,
        deletedBy: null,
        details: {
          id: '6801bf65-129d-4944-8510-912c90bdf0c2',
          housingName: 'Heidyo-Vasquez Apartments',
          chatLink: null,
          mapLink: 'https://maps.app.goo.gl/Yv9XRs18b7JbDk9g9',
        },
      },
      {
        id: 'd5a45f30-4c2e-42ad-9b91-69a4d508cf8a',
        username: 'cozycorner_amina',
        role: 'landlord',
        firstName: 'Amina',
        lastName: 'Torres',
        middleName: 'Nassif',
        nameExtension: null,
        fullName: 'Amina N. Torres',
        dateOfBirth: '1992-08-21',
        gender: 'female',
        email: 'amina_torres@example.com',
        phoneNumber: '+639398559412',
        addressLine1: '22 Laguindab Road',
        addressLine2: 'Cadayonan I',
        addressLine3: 'City of Marawi',
        addressLine4: 'Lanao Del Sur',
        avatarUrl: 'http://localhost:3000/assets/avatar/landlord/avatar_4.png',
        createdAt: '2019-07-23T02:07:42',
        createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        updatedAt: '2021-06-07T02:16:11',
        updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        deletedAt: null,
        deletedBy: null,
        details: {
          id: 'db01c126-813e-47f3-bf15-fd1b266628dd',
          housingName: 'Cozy Corner Boarding House',
          chatLink: 'https://m.me/aminatorress',
          mapLink: 'https://maps.app.goo.gl/XHdfMDZep4rwaey67',
        },
      },
      {
        id: 'h7i8j9k0-1121-3141-5161-7181i9j0k1l2',
        username: 'superbreeze.alikhan',
        role: 'landlord',
        firstName: 'Mohammad',
        lastName: 'Alikhan',
        middleName: 'B.',
        nameExtension: null,
        fullName: 'Mohammad B. Alikhan',
        dateOfBirth: '1986-05-19',
        gender: 'male',
        email: 'mohammad.alikhan86@example.com',
        phoneNumber: '+639095885369',
        addressLine1: '34 Commercial Center Upper Road',
        addressLine2: 'Pindolonan',
        addressLine3: 'City of Marawi',
        addressLine4: 'Lanao Del Sur',
        avatarUrl: 'http://localhost:3000/assets/avatar/landlord/avatar_5.png',
        createdAt: '2019-04-19T22:46:06',
        createdBy: '43b5c06e-e167-4643-a6de-271b6a9e3937',
        updatedAt: '2022-05-06T08:43:39',
        updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        deletedAt: null,
        deletedBy: null,
        details: {
          id: 'd9634971-4261-4f2d-bf44-aa18eb5b4668',
          housingName: 'Super-Breeze Rental Houses',
          chatLink: null,
          mapLink: null,
        },
      },
    ]);
  });
});
