import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
    {
        text: 'Admin',
        path: 'admin',
        icon: <MdAdminPanelSettings />,
    },
    {
        text: 'Add Job',
        path: 'admin',  // ✅ Corrected (relative path)
        icon: <FaWpforms />,
    },
    {
        text: 'All Jobs',
        path: 'all-jobs',  // ✅ Corrected
        icon: <MdQueryStats />,
    },
    {
        text: 'Stats',
        path: 'stats',
        icon: <IoBarChartSharp />,
    },

    {
        text: 'Profile',
        path: 'profile',
        icon: <ImProfile />,
    },
    {
        text: 'My-Applications',
        path: 'my-applications',
        icon: <ImProfile />,
    },


];

export default links;

