"use client"

import { deteleTask } from "@/actions/task"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"
import { HiOutlineTrash } from "react-icons/hi2"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function DeleteTask({id}: {id: string}) {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const deleteItem = () => {
        deteleTask({id})
        .then((res) => {
            setLoading(false);
            toast.success(res)
        }).catch((err) => {
            setLoading(false);
            toast.error(err)
        }).finally(() => {
            setLoading(false);
            router.refresh();
        })
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                    <Button variant={'ghost'} size={'icon'} className="text-stone-500 hover:text-red-600">
                        <HiOutlineTrash size={'20'} />
                    </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete task</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
      
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
        </DialogClose>
        <Button type="submit" variant={'destructive'} onClick={deleteItem}>{loading ? "Deleting..." : "Delete"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
