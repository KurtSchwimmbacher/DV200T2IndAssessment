import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePlant from "./pages/CreatePlant";
import EditPlant from "./pages/EditPlants";
import PlantDetails from "./pages/PlantDetails";
import PlantList from "./pages/PlantList";


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plant/:id" element={<PlantDetails />} />
            <Route path="/list" element={<PlantList />} />
            <Route path="/edit" element={<EditPlant />} />
            <Route path="/post" element={<CreatePlant />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
