import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import PrincipalPage from "./components/PrincipalPage.tsx";
import UpdatePage from "./components/UpdatePage.tsx";

function App() {

  return (
    <>
      <div >
          <Sidebar/>
          <PrincipalPage/>
          <UpdatePage/>
      </div>


    </>
  )
}

export default App
