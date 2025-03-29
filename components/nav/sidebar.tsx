interface SidebarProps {
    children: React.ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
    return(
        <nav className="w-[300px] border-r-1 border-stone-800 fixed top-14 left-0 bottom-0 py-5 px-1">
            <div className="flex flex-col gap-y-2">
                {children}
            </div>
        </nav>
        
    )
}