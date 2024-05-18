"use server";
import { readFileSync } from "fs";
import path from 'path'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const voiceName = request.nextUrl.searchParams.get("name");
    const filePath = path.resolve('.', `public/users/voice/${voiceName}`);
    let  imageBuffer;
    try{
        imageBuffer = readFileSync(filePath);
    }
    catch{
    }
    const response = new NextResponse(imageBuffer);
    response.headers.set("content-type", "audio/webm");
    return response;
}