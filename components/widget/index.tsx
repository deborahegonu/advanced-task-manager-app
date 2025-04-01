interface WidgetProps {
    title: string;
    children: React.ReactNode;
}

export const Widget = ({ title, children } : WidgetProps) => {
    return(
        <div>   
            <div className="mb-3 bg-accent/60 rounded py-2 px-3 border border-accent">
                <h2 className="text-sm capitalize">{title}</h2>
            </div>
            <div className="grid grid-cols-1 gap-y-5">
                {children}
            </div>
        </div>
    )
}
