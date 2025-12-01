// src/App.jsx
import "./App.css";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Makeproject from "./pages/Makeproject";
import Createproject from "./components/Createproject";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<Landing />} />

      {/* Projects layout (Sidebar + center border + Userui) */}
      <Route path="/projects" element={<Projects />}>
        {/* /projects  -> default right panel (Projects list + 'No projects yet') */}
        <Route index element={<Createproject />} />

        {/* /projects/create  -> Create Project form page */}
        <Route path="create" element={<Makeproject />} />
      </Route>
    </Routes>
  );
}

export default App;
