import {useState} from "react";
import Sidebar from "./Sidebar.tsx";

interface Props {
    title: string;
    onChange: (checked: boolean) => void;
}

function Checkbox({ title, onChange }: Props) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <div>
            <input type="checkbox" onClick={handleChange} checked={checked} id={title} name={title} />
            <label className={"mx-2"} htmlFor={title}>{title}</label>
        </div>
    );
}

export default function UpdatePage() {

    const [frontend, setFrontend] = useState<string[]>([]);
    const [backend, setBackend] = useState<string[]>([]);

    const handleCheckboxChange = (type: "frontend" | "backend", title: string, checked: boolean) => {
        const update = type === "frontend" ? frontend : backend;
        const setter = type === "frontend" ? setFrontend : setBackend;

        if (checked) {
            setter([...update, title]);
        } else {
            setter(update.filter((item) => item !== title));
        }
    };

    const frontEndLangs = [
        "Javascript", "VueJs", "React", "Angular", "Svelte", "TypeScript"
    ];

    const backEndLangs = [
        "PHP", "Python", "Java", "Ruby", "JavaScript", "Laravel",
        "Node.js", "Django", "Spring", "Express", "Flask",
        "Ruby-on-Rails", "ASP.NET"
    ];


    return (
        <div className={"p-4 sm:ml-64 w-[calc(100%-256px)] h-screen"}>
            <fieldset className={"grid grid-cols-3"}>
                <legend>Choose Front-end:</legend>
                {frontEndLangs.map((lang) => (
                    <Checkbox key={lang} title={lang} onChange={(checked) => handleCheckboxChange("frontend", lang, checked)} />
                ))}
            </fieldset>

            <fieldset className={"grid grid-cols-3 mt-6"}>
                <legend>Choose Back-end:</legend>
                {backEndLangs.map((lang) => (
                    <Checkbox key={lang} title={lang} onChange={(checked) => handleCheckboxChange("backend", lang, checked)} />
                ))}
            </fieldset>

            <Sidebar frontend={frontend} backend={backend} />
        </div>
    );
}
