import { LoginForm } from "@/containers/form/LoginForm";

export default function Login() {
    return(
        <section className="p-5">
            <h1 className="text-xl font-bold mb-5">Login User</h1>
            <LoginForm />
        </section>
    )
}