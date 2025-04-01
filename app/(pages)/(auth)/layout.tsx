
interface LayoutProps {
    children: React.ReactNode
}

export default function Layout( { children } : LayoutProps ) {
    return(
        <div className="flex min-h-screen items-center justify-center">
            
            <main className="w-full sm:max-w-md md:max-w-sm mt-14 mb-20">
                {children}
            </main>
            
        </div>
    )
}