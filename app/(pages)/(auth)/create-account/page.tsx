import Link from "next/link";
import { SignUpForm } from "@/containers/auth/SignUpForm";

export default function CreateAccount() {
    return(
        <section className="p-5 text-center">
            <h1 className="text-2xl font-bold mb-5">Create Account</h1>
            <SignUpForm />
            <p className="text-sm py-4">Already have an account? <Link href="/" className="underline hover:text-blue-500">Login here</Link></p>
        </section>
    )
}