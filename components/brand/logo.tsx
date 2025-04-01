import Link from "next/link"
import { RiTaskFill } from "react-icons/ri";

interface LogoProps {
    url: string
}
export const Logo = ({ url } : LogoProps) => {
    return(
        <Link href={url} className="flex items-center space-x-2 dark:text-stone-200">
            <RiTaskFill size={'28'} />
            <span className="font-bold">ATMA</span>
        </Link>
    )
}