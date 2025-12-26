import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CreatePage />} path="/create" />
        <Route element={<UpdatePage />} path="/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
