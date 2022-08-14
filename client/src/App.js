import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Flashcard from "./components/Flashcard";
import "./App.css";

import Home from "./components/Home";
import JsPage from "./components/JsPage";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Create from "./components/Create";
import Explore from "./components/Explore";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/javascript"
            element={
              <PrivateRoute>
                <JsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/javascript/flashcards"
            element={
              <PrivateRoute>
                <Flashcard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/create-campaign"
            element={
              <PrivateRoute>
                <Create />
              </PrivateRoute>
            }
          />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
