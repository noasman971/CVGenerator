import {useState} from "react";

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
            <input
                type="checkbox"
                onClick={handleChange}
                checked={checked}
                id={title}
                name={title}
            />
            <label className="mx-2" htmlFor={title}>
                {title}
            </label>
        </div>
    );
}

interface UpdatePageProps {
    title: string;
    setTitle: (title: string) => void;
    frontend: string[];
    backend: string[];
    setFrontend: (langs: string[]) => void;
    setBackend: (langs: string[]) => void;
}

export default function UpdatePage({ setTitle, frontend, backend, setFrontend, setBackend }: UpdatePageProps) {

    const handleCheckboxChange = (type: "frontend" | "backend", title: string, checked: boolean) => {
        const update = type === "frontend" ? frontend : backend;
        const setter = type === "frontend" ? setFrontend : setBackend;

        if (checked) {
            setter([...update, title]);
        } else {
            setter(update.filter((item) => item !== title));
        }
    };

    const handleTitleChange = (title: string) => {
        setTitle(title);
    };

    const frontEndLangs = ["Javascript", "VueJs", "React", "Angular", "Svelte", "TypeScript"];
    const backEndLangs = ["PHP", "Python", "Java", "Ruby", "JavaScript", "Laravel", "Node.js", "Django", "Spring", "Express", "Flask", "Ruby-on-Rails", "ASP.NET"];
    const titleJob = [
        "Développeur Front-end", "Développeur Back-end", "Développeur Fullstack",
        "Développeur Web", "Développeur Mobile", "Développeur d'Applications",
        "Développeur de Logiciels", "Développeur Java", "Développeur Python",
        "Développeur PHP", "Développeur informatiques", "Développeur Javascript",
        "Développeur C#", "Développeur Unity"
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

            <fieldset className={"grid grid-cols-3 mt-6"}>
                <legend>Choose a title:</legend>
                {titleJob.map((jobTitle) => (
                    <Checkbox key={jobTitle} title={jobTitle} onChange={() => handleTitleChange(jobTitle)} />
                ))}
            </fieldset>
        </div>
    );
}