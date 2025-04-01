import { cn } from "@/lib/utils";

interface TagProps {
    tag: string
}

const styleTag = ( tag : string) => {
    switch(tag) {
        case 'low':
            return 'bg-neutral-500/10 px-2 text-neutral-500'
        case 'medium':
            return 'bg-amber-500/10 px-2 text-amber-500'
        case 'high':
            return 'bg-red-500/10 px-2 text-red-500'
        case 'in-progress':
            return 'bg-yellow-500/10 px-2 text-yellow-500'
        case 'to do':
            return 'bg-slate-500/10 px-2 text-slate-500'
        case 'completed':
            return 'bg-green-500/10 px-2 text-green-500'
        case 'work':
            return 'bg-blue-500/10 px-2 text-blue-500'
        case 'personal':
            return 'bg-purple-500/10 px-2 text-purple-500'
        case 'urgent':
            return 'bg-red-500/10 px-2 text-red-500'
    }
}

export const Tag = ({ tag } : TagProps) => {
   
    return(
        <span className={cn("py-1.5 rounded tracking-wider capitalize text-xs font-semibold", styleTag(tag))}>
            {tag}
        </span>
    )
    
}