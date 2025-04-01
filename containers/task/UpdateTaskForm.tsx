"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { UpdateTaskFormSchema } from "@/lib/schema"
import { updateTask } from "@/actions/task"
import { Task as TaskProps } from "@/types";
import { RiLoader4Fill } from "react-icons/ri";
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export function UpdateTaskForm({ id, description, category, status, priority, dueDate }: TaskProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof UpdateTaskFormSchema>>({
        resolver: zodResolver(UpdateTaskFormSchema),
        defaultValues: {
            id: id,
            description: description,
            priority: priority,
            category: category,
            dueDate: dueDate,
            status: status,
            updatedAt: ''
        },
    })
       
    function onSubmit(values: z.infer<typeof UpdateTaskFormSchema>) {
        setLoading(true)
        updateTask(values)
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
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 p-5">
        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Enter task</FormLabel>
                <FormControl>
                <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <div className="grid grid-cols-2 gap-4">
        <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a priority" />
            </SelectTrigger>
            <SelectContent>    
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
            </SelectContent>
        </Select>
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent >    
                        
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
            )}
        />
        </div>
    
        <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Due Date</FormLabel>
                <FormControl>
                <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
         <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select task status" />
                    </SelectTrigger>
                    <SelectContent >    
                        
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="in-progress">In-progress</SelectItem>
                        <SelectItem value="to do">To Do</SelectItem>
                    </SelectContent>
                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
            )}
        />
    
        <Button type="submit" disabled={loading}>
         {loading ? <> <RiLoader4Fill className="animate-spin" /> Processing</> : 'Update Task'}
        </Button> 
        </form>
       
    </Form>
        
  )
}
