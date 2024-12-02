import { useState } from "react"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/service/Service";
import Company from "./pages/company/Company";
import Career from "./pages/career/Career";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import LogIn from "./pages/login/LogIn";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
