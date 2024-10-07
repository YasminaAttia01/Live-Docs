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

Live Docs Live : https://yasminalivedocs.vercel.app/
```
