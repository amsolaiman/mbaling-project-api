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
  {
    header: 'Post',
    children: [
      {
        title: 'Post List',
        type: 'get',
        caption: 'Get all posts',
        path: '/api/post/list',
      },
      {
        title: 'Post Details',
        type: 'get',
        caption: 'Get post details by id',
        path: '/api/post/list/<strong>:id</strong>',
      },
      {
        title: 'Post List Paginated',
        type: 'get',
        caption: 'Get list of posts by pagination params',
        path: '/api/post/list?page=<strong>{page}</strong>&limit=<strong>{limit}</strong>',
        note: 'Parameters can be used with post user & search routes',
      },
      {
        title: 'Post List by Landlord',
        type: 'get',
        caption: 'Get all posts by landlord user',
        path: '/api/post/user?id=<strong>{id}</strong>',
      },
      {
        title: 'Post Search',
        type: 'get',
        caption: 'Search post',
        path: '/api/post/search?query=<strong>{query}</strong>',
      },
      {
        title: 'Post with Landlord Details',
        type: 'get',
        caption: 'Get post data w/ landlord details',
        path: '/api/post/<strong>[route]</strong>?createdBy=true',
        note: 'Parameter can be used with any post routes',
      },
    ],
  },
];
