import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
