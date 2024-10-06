/* eslint-disable @typescript-eslint/no-require-imports */
// require('dotenv').config();

import { Liveblocks } from "@liveblocks/node";

const liveblocksSecretKey = process.env.LIVEBLOCKS_SECRET_KEY;
console.log("LIVEBLOCKS_SECRET_KEY:", process.env.LIVEBLOCKS_SECRET_KEY);

if (!liveblocksSecretKey) {
    throw new Error("Missing LIVEBLOCKS_SECRET_KEY in environment variables.");
}

export const liveblocks = new Liveblocks({
    secret: liveblocksSecretKey,
});
