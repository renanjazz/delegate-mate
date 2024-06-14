import React from "react";
import { Link } from "react-router-dom";

const RequestReceivedPage = () => {
  return (
    <>
      <div>
        <h2>Request received</h2>
        <p>
          Thank you for submitting a request with us! We will update the status
          of your order in your account area.
        </p>
        <div className="request-received-buttons">
          <Link to="/">
            <button className="proceed-button">Home</button>
          </Link>
          <Link to="/open-requests">
            <button className="proceed-button">Requests</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RequestReceivedPage;
