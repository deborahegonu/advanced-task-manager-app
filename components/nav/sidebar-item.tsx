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
        <Link href={url} className={cn("hover:bg-accent/50 py-2 px-4 text-sm tracking-wider text-stone-500 font-normal capitalize rounded flex md:flex-col lg:flex-row items-center space-x-2", pathname === url ? 'bg-accent/50 text-stone-200' : 'bg-transparent')}>
            {icon}
            <span>{title}</span>
        </Link>
    )
}