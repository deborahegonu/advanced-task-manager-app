import Link from "next/link"
import { Button } from "../ui/button"

export const Header = () => {
    return(
        <header className="px-5 py-3 border-b border-stone-800 fixed top-0 h-14 left-0 right-0">
            <nav className="flex items-center justify-between">
                <Link href={'#'}>ATMA</Link>
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