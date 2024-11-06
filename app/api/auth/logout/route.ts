import { NextResponse } from "next/server";
import {deleteSession } from "@/lib/createSession";

export async function POST(request: Request) {

    const response = await deleteSession()

    if (response) {
        console.log("logged out")
        return NextResponse.json({messsage: "logged out"})
    } else {
        console.log("logged out failed")
        return NextResponse.json({message: "logged out failed"}, {status:401})
    }
}