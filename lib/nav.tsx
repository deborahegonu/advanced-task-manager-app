import { RiHome5Line, RiTaskLine } from "react-icons/ri";
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
]
