import { UserEmail } from "@/components/auth/UserEmail";
import { RecentTasks } from "@/containers/task/RecentTasks";
import { TodoTasks } from "@/containers/task/ToDoTasks";


export default function Dashboard() {
   
    return(
        <section className="p-5">
            <h1 className="text-xl font-bold mb-5">Hi, <UserEmail /> </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <TodoTasks /> 
                <RecentTasks />
                <div>
                    
                </div>
            </div>
        </section>
    )
}