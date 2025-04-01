'use client'

import { useUser } from "@/stores/context"


export const UserEmail = () => {
    const { user } = useUser();

    return <span className="capitalize">{user?.email?.split("@")[0] || "User"}</span>
}