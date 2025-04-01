import moment from "moment"
import { IoCalendarClearOutline } from "react-icons/io5";

interface TaskDueDateProps {
    date: string
}

const getDueDate = ( date: string) => {
    let dueDate = '';
    const today = moment();
    

    if(moment(date).isSame(today)) {
        
        dueDate = moment(date, 'YYYY.MM.DD').fromNow(true);
        return dueDate;
    } 

    if(moment(date).isAfter(today)) {
        
        dueDate = moment(date, 'YYYY.MM.DD').fromNow(true);
        return dueDate;
    } 

    if(moment(date).isBefore(today)) {
    
        dueDate = moment(date, 'YYYY.MM.DD').fromNow();
        return dueDate;
    } 
}

export const TaskDueDate = ({ date }: TaskDueDateProps) => {
    return(
        <div className="text-xs flex items-center space-x-1 font-semibold bg-blue-500/10 px-2 py-1.5 text-blue-500 rounded">
            <IoCalendarClearOutline /> 
            <span>{getDueDate(date)}</span>
        </div>
    )
}