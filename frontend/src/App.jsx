import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";

function App() {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CreatePage />} path="/create" />
        <Route element={<NoteDetailPage />} path="/note/:id" />
      </Routes>
    </div>
  );
}

export default App;
