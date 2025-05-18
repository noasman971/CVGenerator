import {useState} from "react";
import {Bloc2Content} from "./Bloc2.tsx";

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
                className="scale-200"
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
    project: React.ReactNode[];
    setproject: (project: React.ReactNode[]) => void;
}

export default function UpdatePage({ setTitle, frontend, backend, setFrontend, setBackend, project, setproject }: UpdatePageProps) {

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

    const handleProjectChange = (checked:boolean, element:React.ReactNode) => {


        if(checked)
        {
            setproject([...project, element]);
        }
        else
        {
            setproject(project.filter((item) => (item as any).key !== (element as any).key));
        }
    }




    const frontEndLangs = ["Javascript", "VueJs", "React", "Angular", "Svelte", "TypeScript"];
    const backEndLangs = ["PHP", "Python", "Java", "Ruby", "JavaScript", "Laravel", "Node.js", "Django", "Spring", "Express", "Flask", "Ruby-on-Rails", "ASP.NET",
    "Symfony", "C#", "MySQL", "PostgreSQL", "Node.js", "Next.js", "Nest.js", "Spring Boot"];
    const titleJob = [
        "Développeur Front-end", "Développeur Back-end", "Développeur Fullstack",
        "Développeur Web", "Développeur Mobile", "Développeur d'Applications",
        "Développeur de Logiciels", "Développeur Java", "Développeur Python",
        "Développeur PHP", "Développeur informatique", "Développeur Javascript",
        "Développeur C#", "Développeur Unity", "Développeur PHP Python", "Développeur Web Fullstack",
        "Développeur Python React", "Développeur Java Fullstack", "Développeur d'Applications Web",
        "Développeur Java Backend", "Développeur JavaScript Frontend", "Développeur Web PHP",
        "Développeur JS Fullstack", "Développeur PHP Laravel", "Développeur applicatif",
        "Développeur TypeScript", "Développeur Web Mobile", "Développeur Web React",

    ];


    const projects = [
        <Bloc2Content
            title={"Coding Tool Box"}
            languages={"Laravel(PHP), Tailwind, MySQL"}
            date={"24 mars 2025 – 4 avril 2025"}
            description={[
                "Projet réalisé seul.",
                "Développement d’une plateforme de gestion scolaire pour la Coding Factory.",
                "Gestion des tâches de vie commune, création de bilans de compétences via IA connectée à une API."
            ]}
        />,
        <Bloc2Content
            title={"Test technique Symfony"}
            languages={"Symfony(PHP), Tailwind, MySQL"}
            date={"28 février 2025 – 4 mars 2025"}
            description={[
                "Projet réalisé seul.",
                "Développement d’une application avec système d’authentification.",
                "Gestion des utilisateurs et importation de données via fichiers CSV."
            ]}
        />,
        <Bloc2Content
            title={"Site de prise de rendez-vous"}
            languages={"Laravel(PHP), Bootstrap, MySQL"}
            date={"17 février 2025 – 21 février 2025"}
            description={[
                "Projet réalisé en équipe de 3 avec méthodologie agile.",
                "Développement d’un système de réservation pour un kinésithérapeute.",
                "Gestion des utilisateurs, des créneaux horaires, validation des formulaires et envoi d’e-mails."
            ]}
        />,
        <Bloc2Content
            title={"Spotify2.0 (en cours)"}
            languages={"React (TypeScript), Tailwind CSS, Next.js, PostgreSQL"}
            date={"31 mars 2025 – aujourd’hui"}
            description={[
                "Projet réalisé seul.",
                "Développement d’une application de streaming musical inspirée de Spotify.",
                "Fonctionnalités : gestion des playlists, authentification utilisation de l'API de Spotify pour afficher les artistes ."
            ]}
        />,
        <Bloc2Content
            title={"Destruct Chess"}
            languages={"Java"}
            date={"20 janvier 2025 – 24 janvier 2025"}
            description={[
                "Projet réalisé en équipe de 4 avec méthodologie agile.",
                "Développement d’un jeu de stratégie en console où les joueurs déplacent leur pion et détruisent des cases.",
                "Système de scores et règles spécifiques."
            ]}
        />,
        <Bloc2Content
            title={"Pharmacie"}
            languages={"Java"}
            date={"27 janvier 2025 – 31 janvier 2025"}
            description={[
                "Projet réalisé en équipe de 4 avec méthodologie agile.",
                "Application console de gestion de stock : produits, commandes, utilisateurs, historique des transactions."
            ]}
        />,
        <Bloc2Content
            title={"Jeu de démineur"}
            languages={"Python"}
            date={"16 décembre 2024 – 20 décembre 2024"}
            description={[
                "Projet réalisé en équipe de 4 avec méthodologie agile.",
                "Création d’un jeu interactif de démineur en terminal."
            ]}
        />,
        <Bloc2Content
            title={"Générateur de CV"}
            languages={"React(Typescript), Tailwind CSS"}
            date={"23 avril 2025 – 25 avril 2025"}
            description={[
                "Projet réalisé seul.",
                "Développement d’une application web permettant de générer un CV personnalisé à partir d’un formulaire dynamique.",
            ]}
        />
    ];




    return (
        <div className={"p-4 sm:ml-64 w-[calc(100%-256px)] h-screen my-100"}>
            <fieldset className={"grid grid-cols-3 gap-2.5"}>
                <legend>Choose Front-end:</legend>
                {frontEndLangs.map((lang) => (
                    <Checkbox key={lang} title={lang} onChange={(checked) => handleCheckboxChange("frontend", lang, checked)} />
                ))}
            </fieldset>

            <fieldset className={"grid grid-cols-3 mt-6 gap-2.5"}>
                <legend>Choose Back-end:</legend>
                {backEndLangs.map((lang) => (
                    <Checkbox key={lang} title={lang} onChange={(checked) => handleCheckboxChange("backend", lang, checked)} />
                ))}
            </fieldset>

            <fieldset className={"grid grid-cols-3 mt-6 gap-2.5"}>
                <legend>Choose a title:</legend>
                {titleJob.map((jobTitle) => (
                    <Checkbox key={jobTitle} title={jobTitle} onChange={() => handleTitleChange(jobTitle)} />
                ))}
            </fieldset>

            <fieldset className={"grid grid-cols-3 mt-6 gap-2.5"}>
                <legend>Choose a project:</legend>
                {projects.map((project, index) => (
                    <Checkbox key={index} title={project} onChange={(checked) => handleProjectChange(checked, project)} />
                ))}

            </fieldset>

        </div>
    );
}