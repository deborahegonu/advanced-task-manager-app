"use client"

import { getLatestTasks } from "@/actions/task"
import { Widget } from "@/components/widget"
import { Task } from "@/components/task"
import { Task as TaskProps } from "@/types"
import { useEffect, useState } from "react"
import { useUser } from "@/stores/context"
import { RiLoader4Fill } from "react-icons/ri";

export const RecentTasks = () => {
  const { user, setUserData } = useUser()
  const [tasks, setTasks] = useState<TaskProps[] | undefined>(user.tasks)

  useEffect(() => {
    
    const loadUpdatedTasks = async () => {
      try{
        const updatedTasks = await getLatestTasks() || undefined;
        if(updatedTasks !== tasks && user?.id) {
          setTasks(updatedTasks)
          const { tasks, ...userData} = user;
          let newTasks = tasks;
          newTasks = updatedTasks;
          const data = { ...userData, tasks: newTasks}
          setUserData(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    
    loadUpdatedTasks()
  },[setUserData, tasks, user])

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
      )) : <div className="flex justify-center"><RiLoader4Fill className="animate-spin w-8 h-8" /></div>}
    </Widget>
  )
}
