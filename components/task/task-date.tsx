import moment from "moment"
import { IoCalendarClearOutline } from "react-icons/io5";

interface TaskDueDateProps {
    date: string
}

const getDueDate = ( date: string) => {
    const originalDate = moment(date, 'DD-MM-YYYY');
    const today = moment(new Date(), 'DD-MM-YYYY');
    const overdue = originalDate.from(today);

    const dateB = moment('2014-11-11');
const dateC = moment('2014-10-11');

console.log('Difference is ', dateB.diff(dateC), 'milliseconds');
console.log('Difference is ', dateB.diff(dateC, 'days'), 'days');
console.log('Difference is ', dateB.diff(dateC, 'months'), 'months');

    console.log(originalDate, today, overdue);
    return overdue;
}
export const TaskDueDate = ({ date }: TaskDueDateProps) => {
    return(
        <div className="text-xs flex items-center space-x-1 capitalize font-semibold bg-blue-500/10 px-2 py-1.5 text-blue-500 rounded">
            <IoCalendarClearOutline /> 
            <span>{getDueDate(date)}</span>
        </div>
    )
}