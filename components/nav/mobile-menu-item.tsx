'use client'

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface MobileMenuItemProps {
    url: string;
    icon: React.ReactNode;
    title: string;
}


export const MobileMenuItem = ({ url, icon, title } : MobileMenuItemProps) => {
    const pathname = usePathname()

    return(
        <Link href={url} className={cn("flex w-full flex-col items-center py-3 rounded justify-center dark:text-stone-400 ", pathname === url ? 'bg-stone-300/50 dark:bg-accent/50 dark:text-stone-200' : 'bg-transparent')}>
            {icon}
            <span className="text-xs pt-1 tracking-wider capitalize">{title}</span>
        </Link>
    )
}