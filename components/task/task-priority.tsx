import { IoFlagOutline } from "react-icons/io5";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// interface PriorityProps {
//     tag: 'low' | 'medium' | 'high';
// }
// export const Prority = ({ tag } : PriorityProps) => {
//     return(
//         <div className={cn("  ", tag === 'medium' ? 'bg-amber-500/10 text-amber-600' : '')}>
//             <IoFlagOutline />
//             <span className="capitalize text-xs font-semibold">medium</span>
//         </div>
//     )
// }



const priorityVariants = cva(
  "flex items-center space-x-2 py-1 px-3 rounded",
  {
    variants: {
      variant: {
        low:
          "bg-accent text-stone-500",
        medium:
          "bg-amber-500/10 text-amber-600",
        high:
          "bg-red-500/10 text-red-600",
      },
    },
    defaultVariants: {
      variant: "low",
    },
  }
)

function TaskPriority({
  className,
  variant,
  tag,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof priorityVariants> & {
    asChild?: boolean,
    tag: string
  })  {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="div"
      className={cn(priorityVariants({ variant, className }))}
      {...props}
    >
        <IoFlagOutline />
        <span className="capitalize text-xs font-semibold">{tag}</span>
    </Comp>
  )
}

export { TaskPriority, priorityVariants }
