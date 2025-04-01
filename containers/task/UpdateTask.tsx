import { HiOutlinePencil } from "react-icons/hi2";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Task as TaskProps } from "@/types";
import { UpdateTaskForm } from "./UpdateTaskForm";

export function UpdateTask({ id, description, category, status, priority, dueDate }: TaskProps) {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} className="text-stone-500">
            <HiOutlinePencil />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-l-accent">
        <SheetHeader>
          <SheetTitle>Update Task</SheetTitle>
          <SheetDescription>
            Make changes to your task here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <UpdateTaskForm id={id} description={description} priority={priority} status={status} category={category} dueDate={dueDate}  />
      </SheetContent>
    </Sheet>
  )
}
