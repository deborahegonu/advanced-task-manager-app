import * as React from "react"
import {  IoCalendarClearOutline } from "react-icons/io5";
import { cn } from "@/lib/utils"
import { HiOutlineBriefcase } from "react-icons/hi2";

function Task({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "border border-accent rounded bg-accent/60 p-3 flex flex-col gap-3",
        className
      )}
      {...props}
    />
  )
}

function TaskHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex items-center justify-between space-x-4",
        className
      )}
      {...props}
    />
  )
}

function TaskTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-sm pb-2 font-normal", className)}
      {...props}
    />
  )
}

function TaskDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-xs", className)}
      {...props}
    />
  )
}

function TaskDueDate({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("bg-accent flex items-center space-x-2 border border-accent text-primary  py-1 px-3 rounded", className)}
      {...props}
    >
        <IoCalendarClearOutline />
        <span className="capitalize text-xs font-semibold">12 Sep. 2024</span>
    </div>
  )
}

function TaskCategory({ className, category, ...props }: React.ComponentProps<"div"> & { category: 'work' | 'personal' | 'urgent'}) {
  return (
    <div
      data-slot="card-description"
      className={cn("bg-accent/80 flex items-center space-x-2 py-1 px-3 rounded text-blue-600", className)}
      {...props}
    >
        <HiOutlineBriefcase />
        <span className="capitalize text-xs font-semibold">{category}</span>
    </div>
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}


function TaskFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center  [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Task,
  TaskCategory,
  TaskDueDate,
  TaskHeader,
  TaskFooter,
  TaskTitle,
  CardAction,
  TaskDescription,
}
