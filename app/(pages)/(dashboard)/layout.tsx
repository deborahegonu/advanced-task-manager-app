"use client";

import { Sidebar } from "@/components/nav/sidebar";
import { sidebarMenu } from "@/lib/nav";
import { SidebarItem } from "@/components/nav/sidebar-item";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { MobileMenuItem } from "@/components/nav/mobile-menu-item";
import { IsUserLoggedIn } from "@/lib/auth";
import { useEffect } from "react";
import { useUser } from "@/stores/context";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout( { children } : LayoutProps ) {
    const { setUserData } = useUser();
    
    useEffect(() => {
        const IsLoggedIn = async () => {
            const checkStatus = await IsUserLoggedIn();
            if(!checkStatus){
                window.location.href = "/login";
            }
            setUserData(checkStatus);
        }
        IsLoggedIn();
    }, [setUserData])

    return(
        <div className="flex min-h-screen">
            <Sidebar>
                {sidebarMenu.map((item, index) => {
                    return <SidebarItem key={index} title={item.title} icon={item.icon} url={item.url} />
                })}
            </Sidebar>
            <main className="w-full md:ml-36 lg:w-5/6 lg:ml-[250px] mt-14 mb-20">
                {children}
            </main>
            <MobileMenu>
                {sidebarMenu.map((item, index) => {
                    return <MobileMenuItem key={index} title={item.title} icon={item.icon} url={item.url} />
                })}
            </MobileMenu>
        </div>
    )
}