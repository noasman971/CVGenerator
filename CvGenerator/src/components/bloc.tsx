import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface blocProps {
    title: string;
    description?: string[];
    skills?: boolean;
    frontend?: string[];
    backend?: string[];
    icon?: any;

}

export default function bloc({title, description, skills = false, frontend, backend, icon}: blocProps)
{
    return(
        <div className="flex flex-col">
                <h2 className={"bigTitle text-xl font-bold"}>{title}</h2>
                <hr className={" my-1 bigTitle  text-xl"} />
                <ul className={"text-white text-2xs"}>

                    {skills ? (
                        <div>
                            <h3>Développement Front-end</h3>
                            <ul className={"list-disc"}>
                                {frontend && frontend.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3>Développement Back-end</h3>
                            <ul className={"list-disc"}>

                                {backend && backend.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>


                    ) : (
                        description.map((item, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon icon={icon} />

                                    {item}
                                </li>
                            ))
                    )}

                </ul>

        </div>
    )
}