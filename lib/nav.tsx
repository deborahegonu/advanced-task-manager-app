import { RiHome5Line, RiTaskLine, RiSettings3Line  } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
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
        url: '/categories',
        icon: <TbCategory2 size={'20'} />,
        title: 'categories'
    },
    {
        url: '/settings',
        icon: <RiSettings3Line size={'20'} />,
        title: 'settings'
    },
]
