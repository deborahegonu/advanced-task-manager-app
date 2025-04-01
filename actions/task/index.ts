"use server"

import * as z from "zod"
import { Task } from "@/types";
import { DeleteTaskFormSchema, TaskFormSchema, UpdateTaskFormSchema } from "@/lib/schema"
import { Middleware } from "../middleware";
import { cookies } from 'next/headers'


const API_URL = 'http://localhost:4000';

export const createTask = async (data: z.infer<typeof TaskFormSchema>) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null;
    
    await Middleware(token);

    console.log(data)
    data.createdAt = new Date().toISOString();
    const res = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        return "Failed to create task";
    }

    return 'Task created successfully!'   
    
}

export const updateTask = async (data: z.infer<typeof UpdateTaskFormSchema>) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null;

    await Middleware(token);
    data.updatedAt = new Date().toISOString();
    const res = await fetch(`${API_URL}/tasks/${data.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    console.log(res)
    if (res.ok) {
        return 'Task updated successfully!'
    } else {
        throw new Error("Failed to update task");
    }

    
}

export const deteleTask = async (data: z.infer<typeof DeleteTaskFormSchema>) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null;

    
    await Middleware(token);
    const res = await fetch(`${API_URL}/tasks/${data.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (!res.ok) {
        throw new Error("Failed to delete task");
    }

    return 'Task deleted successfully!'
    
}

export async function getLatestTasks(): Promise<Task[] | null> {
    try {
        const res = await fetch(`${API_URL}/tasks?_sort=createdAt&_order=desc&_limit=3`);
        if (!res.ok) {
            throw new Error('Failed to fetch tasks')
        }
        return res.json()    
    } catch(error) {
        console.log(error)
        return null
    }
}

export async function getAllTasks(): Promise<Task[] | null> {
    try {
        const res = await fetch(`${API_URL}/tasks`);
        if (!res.ok) {
            throw new Error('Failed to fetch tasks')
        }
        return res.json()    
    } catch(error) {
        console.log(error)
        return null
    }
}