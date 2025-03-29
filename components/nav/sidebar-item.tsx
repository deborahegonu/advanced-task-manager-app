import Link from "next/link"

interface SidebarItemProps {
    url: string;
    icon: React.ReactNode;
    title: string;
}

export const SidebarItem = ( {url, icon, title } : SidebarItemProps) => {
    return(
        <Link href={url} className="hover:bg-accent/50 py-2 px-4 text-sm tracking-wider text-stone-500 font-normal capitalize rounded flex items-center space-x-2 ">
            {icon}
            <span>{title}</span>
        </Link>
    )
}