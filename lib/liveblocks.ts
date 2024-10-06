/* eslint-disable @typescript-eslint/no-require-imports */
// require('dotenv').config();

import { Liveblocks } from "@liveblocks/node";
console.log("Environment Variables:", process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
console.log("Environment Variables:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
console.log("Secret Environment Variables:", process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY);

const liveblocksSecretKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY;

if (!liveblocksSecretKey) {
    throw new Error("Missing LIVEBLOCKS_SECRET_KEY in environment variables.");
}

export const liveblocks = new Liveblocks({
    secret: liveblocksSecretKey,
});
