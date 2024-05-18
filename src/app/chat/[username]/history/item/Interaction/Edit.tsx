import { ListItemIcon, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function EditItem({ handleClose }: { handleClose: any }){
    return <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <EditIcon />
        </ListItemIcon>
        Edit
    </MenuItem>   
}