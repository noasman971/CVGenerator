import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import PrincipalPage from "./components/PrincipalPage.tsx";
import UpdatePage from "./components/UpdatePage.tsx";
import { useState } from "react";

function App() {
    const [frontend, setFrontend] = useState<string[]>([]);
    const [backend, setBackend] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");

    return (
        <>
            <div>
                <Sidebar frontend={frontend} backend={backend} />
                <PrincipalPage title={title} />
                <UpdatePage
                    title={title}
                    setTitle={setTitle}
                    setFrontend={setFrontend}
                    setBackend={setBackend}
                    frontend={frontend}
                    backend={backend}
                />
            </div>
        </>
    )
}

export default App
