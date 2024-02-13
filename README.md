# Discord 2.0: Next.js, LiveKit, Socket.io, Tanstack-Query, Prisma, Tailwind, PostgreSQL

![Discord 2.0](https://github.com/chandrabhan-singh-1/shared-assets/blob/main/Images/discord/discord-thumbnail.jpg)

This is a repository for a Fullstack Discord Clone created using: Next.js, LiveKit, Socket.io, Tanstack-Query, Prisma, Tailwind, PostgreSQL etc.

Features:

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users (thanks to socket.io)
- Create Text, Audio and Video call Channels (thanks to livekit.io)
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsive and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- PostgreSQL database using NeonDB
- Authentication with Clerk

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/chandrabhan-singh-1/discord-2.0.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add PostgreSQL Database (I am using NeonDB)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

Happy Coding...😊

![coder](https://github.com/chandrabhan-singh-1/shared-assets/blob/main/Images/discord/imp/discord7.jpg)
