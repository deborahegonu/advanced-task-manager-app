import { RiHome5Line, RiTaskLine, RiSettings3Line  } from "react-icons/ri";
import { SidebarItem } from "@/types"

export const sidebarMenu: SidebarItem[] = [
    {
        url: '/dashboard',
        icon: <RiHome5Line size={'20'} />,
        title: 'dashboard'
    },
    {
        url: '/tasks',
        icon: <RiTaskLine size={'20'} />,
        title: 'tasks'
    },
    {
        url: '/settings',
        icon: <RiSettings3Line size={'20'} />,
        title: 'settings'
    },
]
