import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

  
import { IoAdd,  } from "react-icons/io5";
import { NewTaskForm } from "./task/NewTaskForm"

export function AddTask() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-xs">
            <IoAdd />
            Create Task
        </Button>
      </SheetTrigger>
      <SheetContent className="border-l-accent">
        <SheetHeader>
          <SheetTitle>Create Task</SheetTitle>
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
