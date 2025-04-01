interface SidebarProps {
    children: React.ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
    return(
        <nav className="hidden md:block md:w-36 lg:w-[250px] bg-stone-50 dark:bg-black border-r-1 border-accent fixed top-14 left-0 bottom-0 py-5 px-1 shadow-sm">
            <div className="flex flex-col gap-y-2">
                {children}
            </div>
        </nav>
        
    )
}