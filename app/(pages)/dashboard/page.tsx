import { Button } from "@/components/ui/button"
import { IoAdd,  } from "react-icons/io5";
import { TaskPriority } from "@/components/task/task-priority";
import { Task, TaskCategory, TaskDescription, TaskDueDate, TaskFooter, TaskHeader, TaskTitle } from "@/components/task";
import { Switch } from "@/components/ui/switch";
import { AddTask } from "@/blocks/form/AddTask";


interface ListTitleProps {
    title: string
}
const ListItem = ({ title } : ListTitleProps) => {
    return(
        <div className="flex justify-between items-center mb-3 bg-accent/60 rounded px-3 border border-accent">
            <h2 className="text-sm capitalize">{title}</h2>
            <div className="flex items-center space-x-2">
                <Button variant={'ghost'}>
                    <IoAdd />
                </Button>
                <Button variant={'ghost'}>
                    <IoAdd />
                </Button>
            </div>
        </div>
    )
}
export default function Dashboard() {
    return(
        <section className="p-5">
            <h1 className="text-xl font-bold mb-5">Hi, Debs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <ListItem title="to do" />
                    <div className="bg-accent/60 border border-accent text-sm p-3 rounded">
                    
                        <div className="flex flex-col">
                            <h3 className="font-semibold">New Task</h3>
                            <p className="py-2">Create a new task</p>
                            <AddTask />
                        </div>
                    </div>
                </div>
                <div>
                    <ListItem title="in progress" />
                    <Task>
                        <TaskHeader>
                            <TaskPriority variant={'high'} tag='low' />
                            <TaskDueDate />
                        </TaskHeader>
                        <TaskTitle>Bake a cake for mummys 60th birthday</TaskTitle>
                        <TaskDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque fuga ut provident, quo officiis possimus fugiat accusamus omnis culpa.
                        </TaskDescription>
                        <TaskFooter className="justify-between">
                            <TaskCategory category="work" />
                            <div className="flex items-center space-x-2 group">
                                <span className="text-xs capitalize text-stone-500">Task complete</span>
                                <Switch />
                            </div> 
                        </TaskFooter>
                    </Task>
                </div>
                <div>
                    <ListItem title="Completed" />
                </div>
            </div>
        </section>
    )
}