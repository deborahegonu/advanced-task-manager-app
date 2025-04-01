"use client"

import { Button } from "../ui/button"
import { LogoutUser } from "@/lib/auth"

export const LogoutButton = () => {
    const Logout = () => {
        LogoutUser();
        window.location.replace("/login");
    }

    return (
        <Button variant={'destructive'} onClick={Logout}>
            Logout
        </Button>
    )
}
