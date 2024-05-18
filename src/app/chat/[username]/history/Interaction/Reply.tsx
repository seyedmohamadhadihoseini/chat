import { ListItemIcon, MenuItem } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import MessageType from "@/lib/message";
import MyBroker from "@/broker/MyBroker";

export default function ReplyItem({ handleClose,message }: { handleClose: any,message:MessageType }) {
    return <MenuItem onClick={e=>{
        (MyBroker.get("reply"))(message);
        (MyBroker.get("focusinput"))();
        handleClose(e);
    }}>
        <ListItemIcon>
            <ReplyIcon />
        </ListItemIcon>
        Replay
    </MenuItem>
}