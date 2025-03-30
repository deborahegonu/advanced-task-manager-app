interface MobileMenuProps {
    children: React.ReactNode
}


export const MobileMenu = ({ children } : MobileMenuProps) => {
    return(
        <div className="md:hidden fixed bottom-0 right-0 left-0 dark:bg-black border-t border-t-accent">
            <nav className="flex  w-full justify-between items-center py-1 px-5">
                {children}
            </nav>
            
        </div>
    )
}