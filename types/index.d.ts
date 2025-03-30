export type Task = {
    id: string,
    title: string,
    description?: string,
    priority: 'low' | 'medium' | 'high',
    status?: 'todo' | 'in-progress' | 'completed',
    category?: string,
}

export type SidebarItem = {
    url: string,
    icon: React.ReactNode,
    title: string,

}