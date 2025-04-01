import { Button } from "@/components/ui/button"
import { IoAdd,  } from "react-icons/io5";
import { TaskPriority } from "@/components/task/task-priority";
import { Task, TaskCategory, TaskDescription, TaskDueDate, TaskFooter, TaskHeader, TaskTitle } from "@/components/task";
import { Switch } from "@/components/ui/switch";
import { AddTask } from "@/containers/task/AddTask";


interface ListTitleProps {
    title: string
}
export const WidgetTitle = ({ title } : ListTitleProps) => {
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