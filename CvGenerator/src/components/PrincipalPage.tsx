import { Bloc2, Bloc2Content } from "./Bloc2.tsx";

interface Props {
    title: string;
    bloc2Content?: React.ReactNode[];
}



export default function PrincipalPage({ title, bloc2Content }: Props) {
    return (
        <div className="p-4 sm:ml-64 h-screen w-[calc(100%-256px)]">
            <TitleHeader title={title} />
            <h2 className="text-2xl font-bold">À la recherche d'une alternance de 2 ans</h2>
            <h3 className="text-xl pb-4">
                Avec un rythme de 3 semaines entreprise / 2 semaines école
            </h3>

            <Bloc2 title={"EXPÉRIENCES PROFESSIONNELLES\n"}>
                <Bloc2Content
                    title={"Développeur Fullstack - Stage"}
                    languages={"Sorel Energies - Sarcelles (95)"}
                    date={"avril 2025 - juin 2025 (8 semaines)"}
                    description={[
                        "Analyse du site existant développé en no-code",
                        "Reconstruction complète en JavaScript avec React.",
                        "Mise en place d'un design responsive",
                        "Optimisation des performances et du référencement (SEO)",
                    ]}
                />
            </Bloc2>

            <Bloc2 title={"PROJETS (VOIR PLUS SUR GITHUB)"}>
                {bloc2Content?.map((content, index) => (
                    <div key={index}>{content}</div>
                ))}

            </Bloc2>

            <Bloc2 title={"ÉTUDES"}>
                <Bloc2Content
                    title={"BAC+3 - Développeur Web et Mobile"}
                    languages={"Coding Factory by ESIEE-IT - Cergy (95)"}
                    date={"2024 - 2027"}
                />
                <Bloc2Content
                    title={"BAC général - Mention Bien"}
                    languages={"Lycée Camille Claudel - Vauréal (95)"}
                    date={"2021 - 2024"}
                    description={["Mathématiques", "Numérique et sciences informatiques", "Option japonais"]}
                />
            </Bloc2>
        </div>
    );
}

function TitleHeader({ title }: { title: string }) {
    return (
        <>
            <h1 className="text-3xl font-bold">{title}</h1>
            <hr className="w-auto h-10 border-0 my-1 bg-bigTitle" />
        </>
    );
}