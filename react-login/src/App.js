import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import AddItem from "./components/AddItem";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RecipeDetails from "./components/RecipeDetails"; // Import the RecipeDetails component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth isSignUp={false} />} />
        <Route path="/signup" element={<Auth isSignUp={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Add a route for recipe details */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
