import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'

const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/patients',
        icon: <FaIcons.FaRegAddressCard/>,
        cName: 'nav-text'
    },
    {
        title: 'Examinations',
        path: '/examinations',
        icon: <FaIcons.FaRegEye/>,
        cName: 'nav-text'
    },
    {
        title: 'Doctors',
        path: '/doctors',
        icon: <BsPersonCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Organizations',
        path: '/organizations',
        icon: <FaIcons.FaRegBuilding/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiOutlineSetting/>,
        cName: 'nav-text'
    }
]

export default SidebarData;