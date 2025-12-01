import './App.css'
import Landing from './pages/Landing'
import { Routes, Route } from "react-router-dom";
import Projects from './pages/Projects'
import Makeproject from "./pages/Makeproject";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/createproject" element={<Makeproject />} />
    </Routes>
    </>
  )
}

export default App

