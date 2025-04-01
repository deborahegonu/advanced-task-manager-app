import { Widget } from "@/components/widget"
import { AddTask } from "./AddTask";

export const TodoTasks = () => {

    return(
        <Widget title="New Task">
            <div className="flex flex-col p-3 border border-accent bg-accent/60 rounded">
                <AddTask />
            </div>
        </Widget>
    )
}