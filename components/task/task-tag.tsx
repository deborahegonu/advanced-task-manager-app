import { IoArrowUpCircleOutline,   } from "react-icons/io5";
import { LuCircleCheck, LuCircle, LuArrowDownToLine, LuArrowUpToLine, LuArrowRightToLine } from "react-icons/lu";

import { cn } from "@/lib/utils";



interface TagProps {
    tag: string
}

const styleTag = ( tag : string) => {
    switch(tag) {
        case 'low':
            return <LuArrowDownToLine />
        case 'medium':
            return <LuArrowRightToLine />
        case 'high':
            return <LuArrowUpToLine />
        case 'todo':
            return <LuCircle />
        case 'in-progress':
            return <IoArrowUpCircleOutline size={'16'} />
        case 'completed':
            return <LuCircleCheck />
    }
}

export const Tag = ({ tag } : TagProps) => {
   
    return(
        <div className={cn("flex items-center space-x-2 py-2 rounded tracking-wider", styleTag(tag))}>
            {styleTag(tag)}
            <span className="capitalize text-xs font-semibold">{tag}</span>
        </div>
    )
    
}