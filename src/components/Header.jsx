import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { Menu } from '@mui/material';
import {MenuItem} from '@mui/material';
import {ListItemIcon} from '@mui/material';
import {IconButton} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import {FiSettings} from 'react-icons/fi'
import {RiLogoutBoxLine} from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import './Header.css'
import SidebarData from './SidebarData'


const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [sideBar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sideBar)

    return (
        <div className='wrapper'>
            {/* <div className='navbar'> */}
                <div className='menu-bar-open'>
                    <NavLink to='#'>
                        <AiIcons.AiOutlineMenu onClick={showSideBar}/>
                    </NavLink>
                </div>
                <div onClick={showSideBar} className={sideBar ? 'wrap active' : 'wrap'}>
                <nav onClick={e => e.stopPropagation()} className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <NavLink to='#' className='menu-bar-close'>
                                <AiIcons.AiOutlineClose onClick={showSideBar}/>
                            </NavLink>
                        </li>
                        {SidebarData.map((item,index)=> {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink onClick={showSideBar} to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        } )}
                    </ul>
                </nav>
                </div>
            {/* </div> */}

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <p style={{color:'white',  fontWeight: '300'}}>Hello, [user]!</p>
                <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ bgcolor: '#fff', fontWeight: '300', color:'#6DA4D7', fontSize:'15px' }}>JW</Avatar>
                </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <FiSettings style={{fontSize: '23px'}}/>
                </ListItemIcon>
                Settings
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <RiLogoutBoxLine style={{fontSize: '23px'}}/>
                </ListItemIcon>
                    <NavLink style={{color:'#393939', textDecoration:'none'}} to={'/'}>
                        Logout
                    </NavLink>
                </MenuItem>
            </Menu>

        </div>
    );
};
export default Header;


