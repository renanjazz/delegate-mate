import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../config";
import axios from "axios";

const UpdatePage = () => {
  const [standard, setStandard] = useState("");
  const { id } = useParams();
  const nav = useNavigate();
  const handleUpdate = async () => {
    try {
      const { data } = await axios.patch(
        `${API_URL}/create-request-page/${id}`,
        { standard }
      );
      console.log("This is the request", data);
      nav("/open-requests");
    } catch (error) {
      console.log("Error updating", error);
    }
  };
  return (
    <>
      <h2>Update delivery</h2>
      <div className="update-page-container">
        <p>
          Would you like to change your delivery date? Please note expediting
          will add an additional fee.
        </p>
        <div className="update-page-button-container">
          <button
            onClick={() => {
              setStandard("standard (5-365 days)");
            }}
            className="standard-delivery-button"
          >
            <strong>Standard delivery:</strong> 5-365 days
          </button>
          <button
            onClick={() => {
              setStandard("expedited (yesterday)");
            }}
            className="expedited-delivery-button"
          >
            <strong>Expedited delivery:</strong> yesterday <i>(+1000 EUR)</i>
          </button>
        </div>
        <button onClick={handleUpdate} className="proceed-button">
          Submit
        </button>
        <Link to="/open-requests">
          <button className="proceed-button">Back</button>
        </Link>
      </div>
    </>
  );
};

export default UpdatePage;
