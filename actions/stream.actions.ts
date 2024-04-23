"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
const secretKey = process.env.STREAM_SECRET_KEY as string;

export async function tokenProvider() {
    const user = await currentUser();
    if (!user) throw new Error('User is not authenticated');
    if (!apiKey) throw new Error('Stream API key is required');
    if (!secretKey) throw new Error('Stream secret key is required');

    const client = new StreamClient(apiKey, secretKey);
    // exp is optional (by default the token is valid for an hour)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.round(new Date().getTime() / 1000) - 60;

    const token = client.createToken(user.id, exp, issued);
    return token;
}