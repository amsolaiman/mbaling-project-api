<h1 align="center">mBALING Project API</h1>

The mBALING project is a student housing management system for on-campus housing establishments in the Mindanao State University campus. It is intended to assist the university Housing Management Division in the record-keeping of non-dormitory-residing students' residential data, and to bring the current housing marketing and searching methods in the campus online. It consists of a mobile application that manages the activities and displays the contents posted by users, and a desktop admin system that administers user records and the creation and deletion of user accounts.

## Overview

The mBALING API is a mock API designed to simulate real-life data and server interactions for the mBALING project. Test the project demo with:

> Use **demo_admin** with password **@demo123** for admin users (desktop admin).

> Use **demo_landlord** with password **@demo123** for landlord users (mobile app).

> Use **demo_student** with password **@demo123** for student users (mobile app).

## Getting Started

### Install dependencies

```sh
pnpm install
```

### Development

1. Copy `.env.sample` to `.env` and configure as needed.
2. Start the development server:

```sh
pnpm dev
```

### Build

```sh
pnpm build
```

## Testing (Mobile App)

Use the following mock users for testing during development:

> Use **kuhei.yamyam** with password **@test123** for student user with housing data.

> Use **aiko_lihannan** with password **@test123** for student user without housing data.

> Use **cozycorner_amina** with password **@test123** for landlord user with only list of tenants.

> Use **castro.bedspace** with password **@test123** for landlord user with only list of applicants.

> Use **macarambon_central** with password **@test123** for landlord user without lists of tenants & applicants.

Demo users are also used for testing.

> Use **demo_student** with password **@demo123** for student user with application data.

> Use **demo_landlord** with password **@demo123** for landlord user with lists of tenants & applicants.
