import React from "react";
import RequestCard from "../components/RequestCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

function OpenRequestPage({ userData, currentUser }) {
  const [request, setRequest] = useState([]);

  const getRequests = async (event) => {
    try {
      const { data } = await axios.get(`${API_URL}/create-request-page`);
      console.log("This is the request", data);
      setRequest(data);
    } catch (error) {
      console.log("Something went wrong with the delivery choice", error);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);
  return (
    <div>
      <h1>Open requests</h1>
      {request.map((oneRequest) => {
        return <RequestCard data={oneRequest} key={oneRequest.id} />;
      })}

      {userData ? (
        <div>
          <h2></h2>
          <p></p>
          <p></p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default OpenRequestPage;
