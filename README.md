🚀 Project Overview:
Live Docs is a collaborative documentation tool designed to provide real-time editing and sharing capabilities. It allows users to create, edit, and manage documents seamlessly, making collaboration more efficient than ever!

🔋 Features:
👉 Authentication: User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management.

👉 Collaborative Text Editor: Multiple users can edit the same document simultaneously with real-time updates.

👉 Documents Management:

- Create Documents: Users can create new documents, which are automatically saved and listed.
- Delete Documents: Users can delete documents they own.
- Share Documents: Users can share documents via email or link with view/edit permissions.
- List Documents: Display all documents owned or shared with the user.
👉 Comments: Users can add inline and general comments, with threading for discussions.

👉 Active Collaborators on Text Editor: Show active collaborators with real-time presence indicators.

👉 Notifications: Notify users of document shares, new comments, and collaborator activities.

👉 Responsive: The application is responsive across all devices.

And many more, including code architecture and reusability!

💡 Technology Stack:

Frontend: Next.js for both client and server-side rendering, providing a smooth and dynamic user experience.
Backend: Integration with Liveblocks for real-time features and Clerk for user authentication.
Deployment: I successfully deployed Live Docs using a CI/CD pipeline with GitHub Actions, ensuring seamless updates and maintenance.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
