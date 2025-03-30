import { fetchTasks } from "@/actions/fetch-tasks"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AddTask } from "@/blocks/form/AddTask"
 

export default async function Tasks() {
    const data =  await fetchTasks()

    return(
        <section className="w-full p-5">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl font-bold">Tasks</h1>
                <AddTask />
            </div>
            {data !== null ? <DataTable columns={columns} data={data} /> : <p>No tasks found.</p>} 
        </section>
    )
}