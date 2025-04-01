import { HiOutlinePencil } from "react-icons/hi2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={'ghost'} className="text-stone-500">
                  <HiOutlinePencil />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit task</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent className="border-l-accent">
        <SheetHeader>
          <SheetTitle>Update Task</SheetTitle>
          <SheetDescription>
            Make changes to your task here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
            <UpdateTaskForm id={id} description={description} priority={priority} status={status} category={category} dueDate={dueDate}  />
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Create Task</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
