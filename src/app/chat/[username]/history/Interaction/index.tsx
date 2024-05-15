import Menu from '@mui/material/Menu';
import ReplyItem from './Reply';
import ForwardItem from './Forward';
import EditItem from './Edit';
import RemoveItem from './Remove';
import MessageType from '@/lib/message';

export default function Interaction({ anchorEl, handleClose,message }: { anchorEl: any, handleClose: any ,message:MessageType}) {
    const open = Boolean(anchorEl);
    return <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
    >
        <ReplyItem message={message} handleClose={handleClose} />
        <ForwardItem handleClose={handleClose} />
        <EditItem handleClose={handleClose} />
        <RemoveItem messageId={message.id} handleClose={handleClose} />
    </Menu>
}