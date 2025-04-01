export type Task = {
    id: string,
    description: string,
    priority: 'low' | 'medium' | 'high',
    status: 'to do' | 'in-progress' | 'completed',
    category: string,
    dueDate: string,
    createdAt?: string,
    updatedAt?: string,
}

export type SidebarItem = {
    url: string,
    icon: React.ReactNode,
    title: string,
}

export interface UserType {
    id?:string;
    email?:string;
    isLoggedIn?: boolean;
    password?: string;
    tasks?:Task[]
}