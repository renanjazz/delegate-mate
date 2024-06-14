import { API_URL } from "../config";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateRequestPage = ({request, setRequest}) => {
  const [standard, setStandard] = useState("");
  const nav = useNavigate();
  const handleAddStandard = async (event) => {
    try {
      console.log(standard);
      const { data } = await axios.post(`${API_URL}/create-request-page`, {
        standard,
      });
      console.log("Standard chosen", data);
      setRequest([data, ...request]);
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
            <form className="create-request-form">
              <select className="create-request-dropdown" onChange={(event) => setStandard(event.target.value)}>
                <option className="create-request-dropdown-option" value="standard (5-365 days)">
                  Standard (5-365 days)
                </option>
                <option className="create-request-dropdown-option" value="expedited (yesterday)">
                  Expedited (yesterday) + 1000 EUR
                </option>
              </select>
            </form>
           
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
