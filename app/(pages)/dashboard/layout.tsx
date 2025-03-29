import Link from "next/link"
import { RiHome5Line, RiTaskLine, RiSettings3Line, RiLogoutBoxRLine  } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";

import { Button } from "@/components/ui/button";



interface LayoutProps {
    children: React.ReactNode
}

// interface LinkProps {
//     url: string;
//     icon: React.ReactNode;
//     title: string;
// }

type LinkItem = {
    url: string,
    icon: React.ReactNode,
    title: string,

}

const sidebar: LinkItem[] = [
    {
        url: '/dashboard',
        icon: <RiHome5Line size={'20'} />,
        title: 'dashboard'
    },
    {
        url: '/dashboard/tasks',
        icon: <RiTaskLine size={'20'} />,
        title: 'tasks'
    },
    {
        url: '/dashboard/categories',
        icon: <TbCategory2 size={'20'} />,
        title: 'categories'
    },
    {
        url: '/dashboard/settings',
        icon: <RiSettings3Line size={'20'} />,
        title: 'settings'
    },
]

export default function Layout( { children } : LayoutProps ) {
    return(
        <div className="flex min-h-screen">
            <nav className="w-[300px] border-r-1 border-stone-800 fixed top-14 left-0 bottom-0 py-5 px-1">
                <div className="flex flex-col gap-y-2">
                    {sidebar.map((item, index) => {
                        return(
                            <Link key={index} href={item.url} className="hover:bg-accent/50 py-2 px-4 text-sm tracking-wider text-stone-500 font-normal capitalize rounded flex items-center space-x-2 ">
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        )
                    })}
                    <Button variant={'ghost'} className="justify-start px-4">
                    <RiLogoutBoxRLine />
                    Log out</Button>
                </div>
            </nav>
            <main className="w-5/6 ml-[300px] mt-14">
                {children}
            </main>
        </div>
    )
}