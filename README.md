# RedRibbon Website

This project is dedicated to building a website for the RedRibbon organization, utilizing the T3 Stack for development. The project aims to explore the T3 framework, focusing on simplicity, modularity, and full-stack type safety. It's bootstrapped with `create-t3-app`.

## Technologies Used

- **Next.js**: For server-side rendering, static site generation, and API routes.
- **TypeScript**: To ensure type safety and enhance development productivity.
- **Tailwind CSS**: For efficient styling.
- **tRPC**: Enables type-safe API communication between the backend and frontend.
- **Prisma**: Abstracts database access and provides type-safe queries.
- **NextAuth.js**: Simplifies authentication implementation.

## Getting Started

1. Install dependencies:

npm install

or

yarn
2. Start the development server:
npm run dev

or

yarn dev

The application will be running at `http://localhost:3000`.

## Environment Variables

Set up the following environment variables in your `.env.local` file:

- `NEXTAUTH_URL`: The callback URL for NextAuth.js.
- `DATABASE_URL`: The URL for the database used by Prisma.
- `CLIENT_ID` and `CLIENT_SECRET` for authentication providers.

## Deployment

For deployment instructions using Vercel, Netlify, and Docker, refer to the [T3 Stack deployment guide](https://create.t3.gg/en/deployment).

## Contributing

This project is open source and welcomes contributions. If you encounter any issues, please report them via GitHub issues. Pull requests for new features or improvements are also appreciated.

## License

This project is released under the MIT License. For more details, see the [LICENSE](./LICENSE) file.
