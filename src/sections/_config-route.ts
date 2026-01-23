// ----------------------------------------------------------------------

export interface RouteConfig {
  header: string;
  children: {
    title: string;
    type: 'get' | 'post' | 'put' | 'patch' | 'delete';
    caption: string;
    path: string;
    note?: string;
  }[];
}

// ----------------------------------------------------------------------

export const routeConfig: RouteConfig[] = [
  {
    header: 'Landlord',
    children: [
      {
        title: 'Landlord List',
        type: 'get',
        caption: 'Get all landlord users',
        path: '/api/landlord/list',
      },
      {
        title: 'Landlord Details',
        type: 'get',
        caption: 'Get landlord details by id',
        path: '/api/landlord/list/<strong>:id</strong>',
      },
      {
        title: 'Landlord List Paginated',
        type: 'get',
        caption: 'Get list of landlord users by pagination params',
        path: '/api/landlord/list?limit=<strong>{limit}</strong>&page=<strong>{page}</strong>',
      },
    ],
  },
  {
    header: 'Student',
    children: [
      {
        title: 'Student List',
        type: 'get',
        caption: 'Get all student users',
        path: '/api/student/list',
      },
      {
        title: 'Student Details',
        type: 'get',
        caption: 'Get student details by id',
        path: '/api/student/list/<strong>:id</strong>',
      },
      {
        title: 'Student List Paginated',
        type: 'get',
        caption: 'Get list of student users by pagination params',
        path: '/api/student/list?limit=<strong>{limit}</strong>&page=<strong>{page}</strong>',
      },
    ],
  },
];
