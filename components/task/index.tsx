"use client"

import { Switch } from "@/components/ui/switch";
import { Task as TaskProps } from "@/types";
import { Tag } from "./task-tag";
import { toast } from "sonner"
import { UpdateTask } from "@/containers/task/UpdateTask";
import { DeleteTask } from "@/containers/task/DeleteTask";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateTask } from "@/actions/task";
import { RiLoader4Fill } from "react-icons/ri";
import { TaskDueDate } from "./task-date";


export function Task({ id, description, category, status, priority, dueDate }: TaskProps) {
      const router = useRouter();
      const [loading, setLoading] = useState<boolean>(false);
      const [statusCheck, setStatusCheck] = useState<string>(status);
      const UpdateItem = (checked: boolean) => {
          setLoading(true);
          const currentStatus = checked ? "Completed" : "In Progress";
          const payload = {id, status: currentStatus};
          updateTask(payload)
          .then((res) => {
              setLoading(false);
              toast.success(res)
              setStatusCheck(currentStatus);
          }).catch((err) => {
              setLoading(false);
              toast.error(err)
          }).finally(() => {
              setLoading(false);
              router.refresh();
          })
      }
  return (
    <div className={"group border border-accent rounded bg-white dark:bg-accent/60 py-1 flex flex-col"} id={id}>
        <div className="flex items-center justify-between py-2 px-3">
          <div className="flex items-center space-x-2">
            <Tag tag={priority} />
            <TaskDueDate date={dueDate} />
          </div>
          <Tag tag={category} />
         
        </div>
        <p className="text-sm px-3 py-2 tracking-wide font-normal">{description}</p>
        <div className="flex justify-between items-center px-3 py-2">
        <div className="flex items-center space-x-2 group">
            <span className="text-xs capitalize text-stone-500">Task complete</span>
            {loading ? <> <RiLoader4Fill className="animate-spin" /></> : <Switch checked={statusCheck === 'Completed' ? true : false } onCheckedChange={UpdateItem} />}
          </div>
        <div className="flex items-center space-x-1">
            <UpdateTask id={id} description={description} priority={priority} status={status} category={category} dueDate={dueDate} />
            <DeleteTask id={id} />
          </div>
          
        
        </div>
    </div>
  )
}




