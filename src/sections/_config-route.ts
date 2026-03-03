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
    header: 'Auth',
    children: [
      {
        title: 'Auth Me',
        type: 'get',
        caption: 'Get user info after login',
        path: '/api/auth/me',
      },
      {
        title: 'Auth Login',
        type: 'post',
        caption: 'Login',
        path: '/api/auth/login',
      },
    ],
  },
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
    header: 'mStudent & Landlord',
    children: [
      {
        title: 'All Users List',
        type: 'get',
        caption: 'Get all users',
        path: '/api/all/list',
      },
      {
        title: 'All Users List Sorted',
        type: 'get',
        caption: 'Get list of users by sorting params',
        path: '/api/all/list?sort=<strong>{sort}</strong>&order=<strong>{order}</strong>',
      },
      {
        title: 'All Users List Paginated',
        type: 'get',
        caption: 'Get list of users by pagination params',
        path: '/api/all/list?page=<strong>{page}</strong>&limit=<strong>{limit}</strong>',
      },
      {
        title: 'All Users Search',
        type: 'get',
        caption: 'Search user',
        path: '/api/all/search?query=<strong>{query}</strong>',
        note: 'Parameters sort, order, page and limit can be applied',
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
  {
    header: 'Admin',
    children: [
      {
        title: 'Admin List',
        type: 'get',
        caption: 'Get all admin users',
        path: '/api/admin/list',
      },
      {
        title: 'Admin Details',
        type: 'get',
        caption: 'Get admin details by id',
        path: '/api/admin/list/<strong>:id</strong>',
      },
      {
        title: 'Admin List Paginated',
        type: 'get',
        caption: 'Get list of admin users by pagination params',
        path: '/api/admin/list?limit=<strong>{limit}</strong>&page=<strong>{page}</strong>',
      },
    ],
  },
];
