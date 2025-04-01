'use client'

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
    url: string;
    icon: React.ReactNode;
    title: string;
}

export const SidebarItem = ( {url, icon, title } : SidebarItemProps) => {
    const pathname = usePathname();

    return(
        <Link href={url} className={cn("dark:hover:bg-accent/50 hover:bg-stone-400/20 hover:text-stone-900 py-2 px-4 text-sm tracking-wider dark:text-stone-500 font-normal capitalize rounded flex md:flex-col lg:flex-row items-center space-x-2", pathname === url ? 'bg-stone-400/20 text-stone-900 font-semibold dark:bg-accent/50 dark:text-stone-200' : 'bg-transparent')}>
            {icon}
            <span>{title}</span>
        </Link>
    )
}