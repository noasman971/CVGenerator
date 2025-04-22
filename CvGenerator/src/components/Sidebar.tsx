import Image from "./Image.tsx";
import profile from "../assets/profile.jpg";
import Bloc from "./Bloc.tsx";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar()

{
    return (
        <>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-side">
            <Image src={profile} alt="profile" />
                <div className={"p-2"}>
                    <h2>
                        <span className="text-2xl font-bold text-white">Noah</span>
                        <br />
                        <span className="text-2xl  text-white">Kichenassamy</span>
                    </h2>
                    <Bloc title={"PROFIL"}
                          description={["île-de-france","noahkiche@gmail.com", "06 52 75 93 25", "noasman971", "Noah Kichenassamy", "Permis B"]} icon={faLocationDot} />
                    <Bloc title={"COMPETENCES"} skills frontend={["React", "Next", "Typescript"]} backend={["Php", "Laravel"]} />
                    <Bloc title={"SOFT SKILLS"} description={["Curieux", "Esprit d'équipe", "Méthodologie agile"]}/>
                    <Bloc title={"CENTRES D'INTERET"} description={["Lecture: Manga", "Sport: Basket", "Voyager"]}/>
                    <Bloc title={"Langues"} description={["Anglais: B2 intermédiaire", "Espagnol: B1 Scolaire", "Japonais: B1 Scolaire"]}/>

                </div>




            </aside>
        </>
            )
}