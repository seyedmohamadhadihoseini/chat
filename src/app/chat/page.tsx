import FindUserContacts from "@/services/FindUserContacts";
import getCurrentUser from '@/services/getCurrrentUser';
import ContactItem from "./ContactItem";
import NewUser from "@/component/new_user";
import prisma from "@/services/MyPrismaClient";

export default async function ChatApp() {

  const currentUser = await getCurrentUser();
  const users = await FindUserContacts(currentUser);
    const displayUsers = users.map(user => {
    return <ContactItem key={user?.id} user={user} />
  })
  return <div className="chat-list">
    <NewUser/>
    <ul>
      {displayUsers}
    </ul>
  </div>
}