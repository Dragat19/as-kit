import { MenuItem } from "../types/sidebar.types";



export const MENU: MenuItem[] = [
    {
        id: crypto.randomUUID(),
        iconName: 'house',
        label: 'Home'

    },
    {
        id: crypto.randomUUID(),
        iconName: 'cube',
        label: 'Orders'
    },
    {
        id: crypto.randomUUID(),
        iconName: 'folder',
        label: 'Documentation'
    },
    {
        id: crypto.randomUUID(),
        iconName: 'map',
        label: 'Map Overview'
    },
    {
        id: crypto.randomUUID(),
        iconName: 'chart-pie',
        label: 'Statistics'
    }
];



export const COMUNICATIONS: MenuItem[] = [
    {
        id: crypto.randomUUID(),
        iconName: 'inbox',
        label: 'Comunication'
    },
    {
        id: crypto.randomUUID(),
        iconName: 'user-group',
        label: 'Couriers'
    },
    {
        id: crypto.randomUUID(),
        iconName: 'gear',
        label: 'Settings'
    },
    {
        id: crypto.randomUUID(),
        iconName: 'circle-question',
        label: 'Help'
    },
]