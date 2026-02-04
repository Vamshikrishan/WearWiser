import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
import UserProfile from "./pages/UserProfile";
import OutfitResult from "./pages/OutfitResult";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/outfit-result" element={<OutfitResult />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
