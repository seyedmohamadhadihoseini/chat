import MyRandomName from "@/services/RandomName";
import { writeFile } from "fs/promises";
export async function POST(request:Request) {
    const data = await request.formData();
    const file = data.get('voice') as Blob;
        
    const bytes =await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    let storedName = `${MyRandomName(50)}.webm`;
    const pathname = `./public/users/voice/${storedName}`;
    await writeFile(pathname, buffer);
    return Response.json({
        message:"thanks",
        success:true
    })
}