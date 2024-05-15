import { ListItemIcon, MenuItem } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';

export default function ForwardItem({ handleClose }: { handleClose: any }){
    return <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <ForwardIcon />
        </ListItemIcon>
        Forward
    </MenuItem>   
}