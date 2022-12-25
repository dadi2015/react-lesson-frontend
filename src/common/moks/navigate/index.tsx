import {
    HomeOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
} from '@mui/icons-material';

export const navMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
        id: 1
    },
    {
        name: 'Избраное',
        icon: <AutoGraphOutlined />,
        path: '/watchlist',
        id: 2
    },
    {
        name: 'Новости',
        icon: <MenuBookOutlined />,
        path: '/news',
        id: 3
    },
    {
        name: 'Настройки',
        icon: <SettingsOutlined />,
        path: '/settings',
        id: 4
    },
]