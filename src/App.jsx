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
import { useState, useEffect } from "react";
import UpdatePage from "./pages/UpdatePage";
import axios from "axios";
import { API_URL } from "./config";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const getRequests = async (event) => {
      try {
        const { data } = await axios.get(`${API_URL}/create-request-page`);
        console.log("This is the request", data);
        setRequest(data);
      } catch (error) {
        console.log("Something went wrong with the delivery choice", error);
      }
    };

    getRequests();
  }, []);

  async function handleDelete(dataId) {
    try {
      await axios.delete(`${API_URL}/create-request-page/${dataId}`);
      setRequest((prevRequests) =>
        prevRequests.filter((req) => req.id !== dataId)
      );
      console.log("Request deleted");
    } catch (error) {
      console.log("Request failed", error);
    }
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/create-request" element={<CreateRequestPage setRequest={setRequest} request={request}/>} />
        <Route
          path="/login"
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/request-received"
          element={<RequestReceivedPage currentUser={currentUser} />}
        />
        <Route
          path="/open-requests"
          element={
            <OpenRequestPage
              currentUser={currentUser}
              request={request}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/update-delivery/:id"
          element={<UpdatePage currentUser={currentUser} request={request} setRequest={setRequest}/>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
