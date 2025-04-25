interface Bloc2Props{
    title: string;
    children?: React.ReactNode;
}

interface Bloc2ContentProps{
    title: string;
    description?: string[];
    languages?: string;
    date?: string;

}


export function Bloc2({title, children}: Bloc2Props)
{
    return (
        <div className="flex flex-col">
            <h2 className={" text-xl font-bold"}>{title}</h2>
            <hr className={"w-auto h-0.75 my-1 bg-bigTitle border-0 "} />
            {children}




        </div>

        )
}

export function Bloc2Content({title, languages, date, description}: Bloc2ContentProps)
{
    return (
        <div className="flex flex-col py-1">
            <h3 className={" text-lg font-bold"}>{title}</h3>
            <span className={"flex justify-between"}>
                <p >{languages}</p>
                <p className={"text-end text-sm"}>{date}</p>
            </span>

            <ul className={"list-disc list-inside"}>
                {description && description.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}

            </ul>


        </div>

    )

}