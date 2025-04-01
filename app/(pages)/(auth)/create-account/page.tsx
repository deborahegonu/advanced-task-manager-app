import { SignUpForm } from "@/containers/form/SignUpForm";

export default function CreateAccount() {
    return(
        <section className="p-5">
            <h1 className="text-xl font-bold mb-5">Create Account</h1>
            <SignUpForm />
        </section>
    )
}