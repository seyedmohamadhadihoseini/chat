"use server";
import { readFileSync } from "fs";
import path from 'path'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const imageName = request.nextUrl.searchParams.get("name");
    const filePath = path.resolve('.', `public/users/img/${imageName}`);
    let  imageBuffer;
    try{
        imageBuffer = readFileSync(filePath);
    }
    catch{
    }
    const response = new NextResponse(imageBuffer);
    response.headers.set("content-type", "image/jpg");
    return response;
}