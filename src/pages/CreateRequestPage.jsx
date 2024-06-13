import { API_URL } from "../config";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateRequestPage = () => {
  const [standard, setStandard] = useState("");
  const nav = useNavigate();
  const handleAddStandard = async (event) => {
    try {
      console.log(standard);
      const { data } = await axios.post(`${API_URL}/create-request-page`, {
        standard,
      });
      console.log("Standard chosen", data);
      nav("/login");
    } catch (error) {
      console.log("Something went wrong choosing standard");
    }
  };

  return (
    <>
      <div>
        <h2>Your request</h2>
        <div className="your-request-greater-container">
          <div className="your-request-container">
            <h4>Scope of service</h4>
            <ul>
              <li>
                We'll make all the boring calls necessary to fulfil the request
              </li>
              <li>The relevant service provider will then solve your issue</li>
              <li>
                Upon completion, the transaction of the below amount will be
                concluded
              </li>
            </ul>
            <h4>Cost</h4>
            <p>
              <u>120 EUR</u> <i>(incl. VAT + service fee)</i>
            </p>
            <h4>Your current problem</h4>
            <p>Please specify the problem you are experiencing below:</p>
            <div>
              <label>
                <input
                  className="problem-input"
                  type="text"
                  placeholder="Your issue"
                />
              </label>
            </div>
            <h4>Delivery</h4>
            <form>
              <select onChange={(event) => setStandard(event.target.value)}>
                <option value="standard (5-365 days)">
                  standard (5-365 days)
                </option>
                <option value="expedited (yesterday)">
                  expedited (yesterday)
                </option>
              </select>
            </form>
            <button
              className="standard-delivery-button"
              onClick={() => handleAddStandard(standard)}
            >
              <strong>Standard delivery:</strong> 5-365 days
            </button>
            <button
              onClick={() => handleAddExpedited(expedited)}
              className="expedited-delivery-button"
            >
              <strong>Expedited delivery:</strong> yesterday <i>(+1000 EUR)</i>
            </button>
          </div>
        </div>
        <div className="back-next-container">
          <Link to="/companies">
            <button className="proceed-button">Back</button>
          </Link>

          <button onClick={handleAddStandard} className="proceed-button">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateRequestPage;
