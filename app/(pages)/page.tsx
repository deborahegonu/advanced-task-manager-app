import Link from "next/link";
import { LoginForm } from "@/containers/auth/LoginForm";

export default function Login() {
    return(
        <section className="p-5 text-center min-h-screen flex flex-col items-center justify-center">
            <div className="w-full sm:max-w-md md:max-w-sm  mt-14 mb-20">
                <h1 className="text-2xl font-bold mb-5">Login to ATMA</h1>
                <LoginForm />
                <p className="text-sm py-4">Don&apos;t have an account? <Link href="/create-account" className="underline hover:text-blue-500"> Create Account</Link></p>
            </div>
            
            
        </section>
    )
}