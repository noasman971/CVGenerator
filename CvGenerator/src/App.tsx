import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import PrincipalPage from "./components/PrincipalPage.tsx";
import UpdatePage from "./components/UpdatePage.tsx";
import { useState } from "react";

function App() {
    const [frontend, setFrontend] = useState<string[]>([]);
    const [backend, setBackend] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");
    const [projets, setProjets] = useState<React.ReactNode[]>([]);

    return (
        <>
            <div>
                <Sidebar frontend={frontend} backend={backend} />
                <PrincipalPage title={title} bloc2Content={projets} />
                <UpdatePage
                    title={title}
                    setTitle={setTitle}
                    setFrontend={setFrontend}
                    setBackend={setBackend}
                    frontend={frontend}
                    backend={backend}
                    project={projets}
                    setproject={setProjets}
                />
            </div>
        </>
    )
}

export default App
