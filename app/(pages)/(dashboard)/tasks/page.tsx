import { getAllTasks } from "@/actions/task"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AddTask } from "@/containers/task/AddTask"
import { ColumnDef } from "@tanstack/react-table"
import { Task } from "@/types"
import { GetUserCookieData } from "@/lib/auth"
 

export default async function Tasks() {
    const user = await GetUserCookieData();
    const data =  await getAllTasks({id: user?.id})

    return(
        <section className="w-full p-5">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl font-bold">Tasks</h1>
                <AddTask />
            </div>
            {data !== null ? <DataTable columns={columns as ColumnDef<Task, unknown>[]} data={data} /> : <p>No tasks found.</p>} 
        </section>
    )
}