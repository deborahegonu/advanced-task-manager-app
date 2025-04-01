"use server"

import { getLatestTasks } from "@/actions/task"
import { Widget } from "@/components/widget"
import { Task } from "@/components/task"
import { RiLoader4Fill } from "react-icons/ri";

export const RecentTasks = async () => {
  const tasks =  await getLatestTasks();

  return (
    <Widget title="Recent">
      {tasks ? tasks?.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          description={item.description}
          dueDate={item.dueDate}
          category={item.category}
          priority={item.priority}
          status={item.status}
        />
      )) : <div className="flex justify-center"><RiLoader4Fill className="animate-spin w-8 h-8" /></div> }
    </Widget>
  )
}
