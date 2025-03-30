import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

  
import { IoAdd,  } from "react-icons/io5";
import { NewTaskForm } from "./task/new-task"

export function AddTask() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-xs">
            <IoAdd />
            Add New Task
        </Button>
      </SheetTrigger>
      <SheetContent className="border-l-accent">
        <SheetHeader>
          <SheetTitle>New Task</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
            <NewTaskForm />
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Create Task</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
