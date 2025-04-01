import { IoArrowUpCircleOutline,   } from "react-icons/io5";
import {  LuCircle, } from "react-icons/lu";

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
        case 'to do':
            return <LuCircle />
        case 'in-progress':
            return <IoArrowUpCircleOutline size={'16'} />
        case 'Completed':
            return 'bg-green-500/10 px-2 text-green-500'
    }
}

export const Tag = ({ tag } : TagProps) => {
   
    return(
        <span className={cn("py-1.5 rounded tracking-wider capitalize text-xs font-semibold", styleTag(tag))}>
            {tag}
        </span>
    )
    
}