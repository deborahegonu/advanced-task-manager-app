import {  RiLogoutBoxRLine  } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/nav/sidebar";
import { sidebarMenu } from "@/lib/nav";
import { SidebarItem } from "@/components/nav/sidebar-item";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout( { children } : LayoutProps ) {
    return(
        <div className="flex min-h-screen">
            <Sidebar>
                {sidebarMenu.map((item, index) => {
                    return <SidebarItem key={index} title={item.title} icon={item.icon} url={item.url} />
                })}
                <Button variant={'ghost'} className="justify-start px-4">
                    <RiLogoutBoxRLine />
                    Log out
                </Button>
            </Sidebar>
            <main className="w-5/6 ml-[300px] mt-14">
                {children}
            </main>
        </div>
    )
}