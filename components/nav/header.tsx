import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "../brand/logo"

export const Header = () => {
    return(
        <header className="px-5 py-3 dark:bg-black border-b border-b-accent fixed top-0 h-14 left-0 right-0">
            <nav className="flex items-center justify-between">
                <Logo url="/dashboard" />
                <div className="flex space-x-4">
                    <Link href={'#'}>
                        <Button variant={'secondary'}>Login</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}