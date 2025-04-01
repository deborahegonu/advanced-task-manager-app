"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "../brand/logo"
import { LogoutButton } from "../auth/LogoutButton"
import { useUser } from "@/stores/context";
import { ModeToggle } from "../theme/toggle-theme"

export const Header = () => {
    const { user } = useUser();

    return (
        <header className="px-5 py-3 bg-stone-50 dark:bg-black border-b border-b-accent fixed top-0 h-14 left-0 right-0">
            <nav className="flex items-center justify-between">
                <Logo url="/dashboard" />
                <div className="flex space-x-4">
                    {user && user?.id ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <Link href={'/'}>
                                <Button variant={'secondary'}>
                                    Login
                                </Button>
                            </Link>
                            <Link href={'/create-account'}>
                                <Button>Get Started</Button>
                            </Link>
                        </>
                    )}
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}
