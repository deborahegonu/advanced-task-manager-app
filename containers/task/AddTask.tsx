import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

  
import { IoAdd,  } from "react-icons/io5";
import { NewTaskForm } from "./NewTaskForm"

export function AddTask() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <IoAdd />
          Add New Task
        </Button>
      </SheetTrigger>
      <SheetContent className='border-l-accent'>
        <SheetHeader>
          <SheetTitle>Create New Task</SheetTitle>
          <SheetDescription>
            Enter details of new task. Click the when you&apos;re done to create task.
          </SheetDescription>
        </SheetHeader>
        <NewTaskForm />
      </SheetContent>
    </Sheet>
  );
}
