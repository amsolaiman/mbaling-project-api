<h1 align="center">API Documentation</h1>

Below are the various paths and parameters for fetching server data:

## Auth

> Login : `/api/auth/login`

> Get user info after login : `/api/auth/me`

## Landlord

> Get all landlord users : `/api/landlord/list`

> Get landlord details by id : `/api/landlord/list/:id`

> Get list of landlord users by pagination params : `/api/landlord/list?page={page}&limit={limit}`

> **Note:** Parameter `page` is required when `limit` is provided.

## Student

> Get all student users : `/api/student/list`

> Get student details by id : `/api/student/list/:id`

> Get list of student users by pagination params : `/api/student/list?page={page}&limit={limit}`

> **Note:** Parameter `page` is required when `limit` is provided.

## Post

> Get all posts : `/api/student/list`

> Get post details by id : `/api/post/list/:id`

> Get all posts by user : `/api/post/user?id={id}`

> Search post : `/api/post/search?query={query}`

> **Note:** Apply parameter `createdBy=true` to include landlord details.
