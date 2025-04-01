"use server"

import { getLatestTasks } from "@/actions/task"
import { Widget } from "@/components/widget"
import { Task } from "@/components/task"
import { RiLoader4Fill } from "react-icons/ri";
import { GetUserCookieData } from "@/lib/auth";

export const RecentTasks = async () => {
  const user = await GetUserCookieData();
  const tasks =  await getLatestTasks({id: user?.id});

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
