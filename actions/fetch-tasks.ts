import { Task } from "@/types";

export const API_URL = 'http://localhost:4000'

export async function fetchTasks(): Promise<Task[] | null> {
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