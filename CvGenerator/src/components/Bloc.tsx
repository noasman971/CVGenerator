import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface blocProps {
    title: string;
    description?: string[];
    skills?: boolean;
    frontend?: string[];
    backend?: string[];
    icon?: IconDefinition[];
    link?: (string | null)[];
    tools?: string[];
}

export default function bloc({title, description, skills = false, frontend, backend, icon, link, tools}: blocProps)
{
    return(
        <div className="flex flex-col">
                <h2 className={"bigTitle text-xl font-bold"}>{title}</h2>
                <hr className={"w-auto h-0.75 my-1 bg-bigTitle "} />
                <ul className={"text-white text-2xs "}>
                    {/* Compétences */}
                    {skills ? (
                        <div>
                            <h3>Développement Front-end</h3>
                            <ul className={"list-disc list-inside grid grid-cols-2 gap-x-1.5"}>
                                {frontend && frontend.map((item, index) => (

                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3>Développement Back-end</h3>
                            <ul className={"list-disc list-inside grid grid-cols-2 gap-x-1.5"}>

                                {backend && backend.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <h3>Outils</h3>
                            <ul className={"list-disc list-inside grid grid-cols-2 gap-x-1.5"}>
                                {tools && tools.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}

                            </ul>
                        </div>


                    )
                        :

                        (
                            // Description
                            description && description.map((item, index) => (
                                <ul className={icon && icon.length > 0 ? "list-none" : "list-disc list-inside"} key={index}>
                                    {icon && icon.length > 0 ? (
                                        <li>
                                            <span className="mr-2">
                                                <FontAwesomeIcon className={"bigTitle"} icon={icon[index]} />
                                            </span>
                                            {link && link.length > 0 ? (
                                                <a href={link[index]} target="_blank">
                                                    {item}
                                                </a>
                                            ) : (
                                                <span>{item}</span>
                                            )}
                                        </li>
                                    ) : (
                                        <li>{item}</li>
                                    )}
                                </ul>
                            ))
                        )}
                </ul>

        </div>
    )
}