// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function AnchorTemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       {/* <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//       {/* <Divider /> */}
//       {/* <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </Box>
//   );

//   return (
//     <div>
//       {['MENU'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import style from './navbar.module.css';

// import './DrawerMenu.css'; // Importing the CSS for styling

const DrawerMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div className={style.drawercontainer}>
      <IconButton onClick={toggleDrawer(true)} className={style.menubutton}>
        <MenuIcon />MENU
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} >
        <div
          className={style.drawercontent}
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className={style.dropdown}>
            <button className="btn btn-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={style.Btn}>
              ACCOUNTS
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={""}>PROFILE</Link></li>
              <li><button>Logout</button></li>
            </ul>
          </div>
          <div className={style.dropdown}>
            <button className="btn btn-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={style.Btn}>
              HOTEL
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={""}>ALL HOTELS</Link></li>
              <li><Link className="dropdown-item" to={""}>ADD NEW HOTELS</Link></li>
            </ul>
          </div>
          <div className={style.dropdown}>
            <button className="btn btn-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={style.Btn}>
              ROOMS
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={""}>ALL ROOMS</Link></li>
              <li><Link className="dropdown-item" to={""}>ADD NEW ROOMS</Link></li>
            </ul>
          </div>
          <div className={style.dropdown}>
            <button className="btn btn-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={style.Btn}>
              CATEGORY
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={""}>ALL CATEGORYS</Link></li>
              <li><Link className="dropdown-item" to={""}>ADD NEW CATEGORYS</Link></li>
              <li><Link className="dropdown-item" to={""}>SUBCATEGORYS</Link></li>
            </ul>
          </div>
          <div className={style.dropdown}>
            <button className="btn btn-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={style.Btn}>
              ORDERS
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={""}>ALL ORDERS</Link></li>
              <li><Link className="dropdown-item" to={""}>ADD NEW ORDERS</Link></li>
            </ul>
          </div>
          <div className={style.dropdown}>
            <button className="btn btn-black dropdown-toggle" type="button"  aria-expanded="false" id={style.Btn}>
              PAYMENTS
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
