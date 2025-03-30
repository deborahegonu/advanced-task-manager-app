interface SidebarProps {
    children: React.ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
    return(
        <nav className="hidden md:block md:w-36 lg:w-[250px] dark:bg-black border-r-1 border-stone-800 fixed top-14 left-0 bottom-0 py-5 px-1">
            <div className="flex flex-col gap-y-2">
                {children}
            </div>
        </nav>
        
    )
}