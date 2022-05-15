import * as React from 'react';
// Material UI
import {Button} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);



  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent"  PaperProps={{
            sx: {
            backgroundColor: "#C7112F"
            }
    }}>
        
        
        <List>
        <ListItem disablePadding sx={{ display: 'block' }} m={4}>
            <Button onClick={event =>  window.location.href='/'} >
                <img src="/uhchatwhite.png" alt="students" style={{ width:'52px', height:'32px' }}/>
            </Button>
        </ListItem>



       
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            sx={{
                minHeight: 48,
                px: 2.5,
            }}
            >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    <AccountBoxIcon style={{ color: 'white' }} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>


        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            sx={{
                minHeight: 48,
                px: 2.5,
            }}
            >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    <ForumIcon style={{ color: 'white' }} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>


        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            sx={{
                minHeight: 48,
                px: 2.5,
            }}
            >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    <SchoolIcon style={{ color: 'white' }} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            sx={{
                minHeight: 48,
                px: 2.5,
            }}
            >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    <SettingsIcon style={{ color: 'white' }} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>

        
     
        </List>
      </Drawer>
     
    </Box>
  );
}