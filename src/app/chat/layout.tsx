import "./style.css";
import Contacts from "./contacts";
import fetchUsers from "./contacts/fetchUsers";
import { User } from "@/lib/user";
import GetCurrentUser  from '@/services/getCurrrentUser';

export default async function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await GetCurrentUser();
  if (!currentUser) {
    return <div></div>
  }


  const users = await fetchUsers(currentUser.id);
  return (
    <div className="main-container" >
      <Contacts users={users} />
      {children}
    </div>
  );
}
