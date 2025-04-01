"use client"

import { Button } from "../ui/button"
import { LogoutUser } from "@/lib/auth"
import { useUser } from "@/stores/context";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const { setUserData } = useUser();
    const router = useRouter();
    const Logout = () => {
        LogoutUser();
        setUserData(null);
        router.replace("/")
    }

    return (
        <Button variant={'destructive'} onClick={Logout}>
            Logout
        </Button>
    )
}
