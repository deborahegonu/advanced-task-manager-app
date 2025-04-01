"use client"

import { ColumnDef } from "@tanstack/react-table"
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Task } from "@/types"
import { Tag } from "@/components/task/task-tag";
import React from "react";
import { UpdateTask } from "@/containers/task/UpdateTask";
import { DeleteTask } from "@/containers/task/DeleteTask";

interface SortColumnProps {
    title: string;
    sort: React.ReactEventHandler
}

const SortColumn = ({ title, sort } : SortColumnProps) => {
    return(
        <Button
          variant="ghost"
          className="hover:bg-accent px-0 has-[>svg]:px-0"
          onClick={sort}
        >
          {title}
          <HiMiniChevronUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
}

export const columns: ColumnDef<Task>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
  
  {
    accessorKey: "category",
    header: ({ column }) => {
      return <SortColumn title={'Category'} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} /> 
    },
    cell: ({ row }) => {
        const task = row.original;
        return <Tag tag={task.category} />
    }
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return <SortColumn title={'Description'} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
        return <SortColumn title={'Priority'} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />
      },
    cell: ({ row }) => {
        const task = row.original;
        return <Tag tag={task.priority} />
    }
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => {
        return <SortColumn title={'Due Date'} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />
      },
    
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
        return <SortColumn title={'Status'} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />
      },
    cell: ({ row }) => {
        const task = row.original;
        return <Tag tag={task.status} />
    }
  },
 ,
  {
    id: "actions",
    header: 'Actions',
    cell: ({ row }) => {
      const task = row.original

      return (
        <div>
            <UpdateTask id={task.id} description={task.description} dueDate={task.dueDate} status={task.status} priority={task.priority} category={task.category} />
            <DeleteTask id={task.id} />
        </div>
      )
    },
  },
]
