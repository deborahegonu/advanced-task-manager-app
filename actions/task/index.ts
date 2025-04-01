"use server"

import * as z from "zod"
import { Task } from "@/types";
import { DeleteTaskFormSchema, TaskFormSchema, UpdateTaskFormSchema } from "@/lib/schema"
import { Middleware } from "../middleware";
import { cookies } from 'next/headers'


const API_URL = 'https://atma-backend.onrender.com/api';

export const createTask = async (data: z.infer<typeof TaskFormSchema>) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null;
    
    await Middleware(token);

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

export async function getLatestTasks(data: z.infer<typeof DeleteTaskFormSchema>): Promise<Task[] | null> {
    try {
        const res = await fetch(`${API_URL}/tasks?userId=${data.id}&_sort=createdAt&_order=desc&_limit=10`);
        if (!res.ok) {
            throw new Error('Failed to fetch tasks')
        }
        return res.json()    
    } catch{
        
        return null
    }
}

export async function getAllTasks(data: z.infer<typeof DeleteTaskFormSchema>): Promise<Task[] | null> {
    try {
        const res = await fetch(`${API_URL}/tasks?userId=${data.id}&_sort=createdAt&_order=desc`);
        if (!res.ok) {
            throw new Error('Failed to fetch tasks')
        }
        return res.json()    
    } catch {
        return null
    }
}