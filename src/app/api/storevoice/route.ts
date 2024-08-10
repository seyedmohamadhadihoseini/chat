import MyRandomName from "@/services/RandomName";
import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";
export async function POST(request:NextRequest) {
    const data = await request.formData();
    const file = data.get('voice') as Blob;
        
    const bytes =await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    let storedName = `${MyRandomName(50)}.webm`;
    const pathname = `./public/users/voice/${storedName}`;
    await writeFile(pathname, buffer);
    
    return Response.json({
        filename:storedName,
        success:true
    })
}