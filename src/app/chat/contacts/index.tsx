"use client";

import NewUser from "@/component/new_user";
import ContactDisplay from "./Item";
import { User } from "@/lib/user";
import { usePathname } from "next/navigation";

export default  function Contacts({ users}: { users: (User|null)[]}) {
  const targetusername = usePathname().split("/").pop();
  const displayedUsers = users?.map(user => {
    return <ContactDisplay isActive={user?.username==targetusername} contact={user} key={user?.id} />
  })
  return (
    <div className="people-list">
      <NewUser />
      <ul className="contact-list">
        {displayedUsers}
      </ul>
    </div>
  )
}