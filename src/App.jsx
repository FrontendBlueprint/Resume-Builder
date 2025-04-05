import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CreateResume from "./Pages/CreateResume";
import SignUp from "./Pages/SignUp";
import UpdateResume from "./Pages/UpdateResume";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { user, isSignedIn } = useUser();

  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={user ? <Dashboard /> : <SignUp />} />
        <Route path="/dashboard" element={isSignedIn ? <Dashboard /> : <Navigate to="/sign-in" />} />
        <Route path="/createresume" element={isSignedIn ? <CreateResume /> : <Navigate to="/sign-in" />} />
        <Route path="/updateResume" element={isSignedIn ? <UpdateResume /> : <Navigate to="/sign-in" />} />
      </Routes>
    </>
  );
}

export default App;
