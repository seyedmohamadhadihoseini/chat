import { ListItemIcon, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import MyBroker from "@/broker/MyBroker";
import { RemoveMessage } from "./actions";
import { io } from "socket.io-client";

export default function RemoveItem({ messageId, handleClose }: { messageId: number, handleClose: any }) {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST || "");
    return <MenuItem onClick={e => {
        RemoveMessage(messageId);
        (MyBroker.get("removemessage"))(messageId);
        const myId = MyBroker.get("myId");
        let itsId = MyBroker.get("itsId");
        fetch(`${process.env.NEXT_PUBLIC_SOCKET_HOST}/remove?senderId=${myId}&receiverId=${itsId}&messageId=${messageId}`);
        // socket.emit("removeMessage",myId,itsId,messageId);
        handleClose(e);
    }}>
        <ListItemIcon>
            <DeleteIcon />
        </ListItemIcon>
        Remove
    </MenuItem>
}