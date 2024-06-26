import { cookies } from "next/headers";
const sessionPair: { [key: string]: any } = {};
export default async function GetUser() {
  if (cookies().has("chat_session")) {
    const sessionId = cookies().get("chat_session")?.value;
    if (sessionPair[sessionId || ""]) {
      return sessionPair[sessionId || ""];
    }
    const user = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/currentuser?sessionId=${sessionId}`,
      {  }
    );
    
    sessionPair[sessionId || ""] = JSON.parse(await user.text());
    return sessionPair[sessionId || ""];
  } else {
    return null;
  }
}
