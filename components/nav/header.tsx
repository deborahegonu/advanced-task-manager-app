"use server"

import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "../brand/logo"
import { IsUserLoggedIn } from "@/lib/auth"
import { LogoutButton } from "../auth/LogoutButton"

export const Header = async () => {
    const user = await IsUserLoggedIn();

    return (
        <header className="px-5 py-3 bg-stone-50 shadow-sm dark:bg-black border-b border-b-accent fixed top-0 h-14 left-0 right-0">
            <nav className="flex items-center justify-between">
                <Logo url="/dashboard" />
                <div className="flex space-x-4">
                    {user?.id ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <Link href={'/login'}>
                                <Button variant={'secondary'}>
                                    Login
                                </Button>
                            </Link>
                            <Link href={'/create-account'}>
                                <Button>Get Started</Button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}
