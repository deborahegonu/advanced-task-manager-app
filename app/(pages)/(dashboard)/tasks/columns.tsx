"use client"

import { HiMiniChevronUpDown } from "react-icons/hi2";
import { Column, Table } from '@tanstack/react-table';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SortType } from "@/types"
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

export const columns: SortType[] = [
  {
    id: "select",
    header: ({ table }:{table: Table<Record<string, unknown>> }) => (
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
    header: ({ column }:{column: Column<Record<string, unknown>, unknown>}) => {
      return <SortColumn title={"Category"} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />;
    },
    cell: ({ row }) => {
      const task = row.original;
      return <Tag tag={task.category} />;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }:{column: Column<Record<string, unknown>, unknown> }) => {
      return <SortColumn title={"Description"} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />;
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }:{column: Column<Record<string, unknown>, unknown> }) => {
      return <SortColumn title={"Priority"} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />;
    },
    cell: ({ row }) => {
      const task = row.original;
      return <Tag tag={task.priority} />;
    },
  },
  {
    accessorKey: "dueDate",
    header: ({ column }: { column: Column<Record<string, unknown>, unknown> }) => {
      return <SortColumn title={"Due Date"} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }:{column: Column<Record<string, unknown>, unknown> }) => {
      return <SortColumn title={"Status"} sort={() => column.toggleSorting(column.getIsSorted() === "asc")} />;
    },
    cell: ({ row }) => {
      const task = row.original;
      return <Tag tag={task.status} />;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const task = row.original;
      return (
        <div>
          <UpdateTask id={task.id} description={task.description} dueDate={task.dueDate} status={task.status} priority={task.priority} category={task.category} />
          <DeleteTask id={task.id} />
        </div>
      );
    },
  },
];

