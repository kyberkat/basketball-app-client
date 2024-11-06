import { NextResponse } from "next/server";
import {createSession } from "@/lib/createSession";

export async function POST(request: Request) {
    const {email, password} = await request.json()

    const session = await createSession(email, password)

    if (session) {
        console.log("3. next response, session created")
        return NextResponse.json({messsage: "authed"})
    } else {
        console.log("3. from next api, session not created")
        return NextResponse.json({message: "auth failed"}, {status:401})
    }
}