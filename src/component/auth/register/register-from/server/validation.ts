import prisma from "@/services/MyPrismaClient";

export interface userType {
  name: string;
  username: string;
  password: string;
  "re-password": string;
  "agree-term"?: string;
  signup: string;
}
export default async function Validate(newUser: any) {
  let errorResult = "";
  const regexPattern = /^[a-zA-Z0-9]+$/;
  if (newUser.password !== newUser["re-password"]) {
    errorResult = "passwords are not same";
  } else if (newUser.name.length == 0) {
    errorResult = "the name must be intered";
  } else if (newUser.username.length == 0) {
    errorResult = "the username must be entered";
  } else if (!regexPattern.test(newUser.username)) {
    errorResult = "the username has false character";
  } else if (newUser.password.length <= 4) {
    errorResult = "the password must be greatar than 4";
  } else if (!newUser["agree-term"]) {
    errorResult = "you must to agree term";
  } else {
    const user = await prisma.user.findFirst({
      where: {
        username: newUser.username,
      },
    });
    if (user) {
      errorResult = "the username already exits";
    }
  }
  return errorResult;
}
