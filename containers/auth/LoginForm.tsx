"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoginFormSchema } from "@/lib/schema"
import { LoginUser } from "@/actions/auth"
import { RiLoader4Fill } from "react-icons/ri";
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useUser } from "@/stores/context"

export function LoginForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const { setUserData } = useUser();
    
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
       
    function onSubmit(values: z.infer<typeof LoginFormSchema>) {
        setLoading(true)
        LoginUser(values)
        .then(async (res) => {
            setLoading(false);
            const userData = {isLoggedIn: true, ...res.data};
            setUserData(userData);
            toast.success(res.message);
            router.replace("/dashboard")
        }).catch((err) => {
            setLoading(false);
            toast.error(err)
        }).finally(() => {
            setLoading(false);
            router.refresh();
        })
        
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 p-5 bg-white dark:bg-accent/60 shadow-sm rounded">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                <Input placeholder="Enter your email..." {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        
        <Button type="submit" disabled={loading}>
         {loading ? <> <RiLoader4Fill className="animate-spin" /> Processing</> : 'Login'}
        </Button> 
        </form>
       
    </Form>
        
  )
}
