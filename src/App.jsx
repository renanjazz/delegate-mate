import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import OpenRequestPage from "./pages/OpenRequestPage";
import RequestReceivedPage from "./pages/RequestReceivedPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import CreateRequestPage from "./pages/CreateRequestPage";
import { useState } from "react";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/create-request" element={<CreateRequestPage />} />
        <Route path="/login" element={<LoginPage setCurrentUser={setCurrentUser} />} />
        <Route path="/request-received" element={<RequestReceivedPage currentUser={currentUser}/>} />
        <Route path="/open-requests" element={<OpenRequestPage currentUser={currentUser}/>} />
        <Route path="/update-delivery/:id" element={<UpdatePage currentUser={currentUser}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;