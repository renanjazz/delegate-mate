import React from "react";
import RequestCard from "../components/RequestCard";

function OpenRequestPage({ userData, currentUser, request, handleDelete }) {
  return (
    <div>
      <h1>Open requests</h1>
      {request.map((oneRequest) => {
        return (
          <div key={oneRequest.id}>
            <RequestCard data={oneRequest} handleDelete={handleDelete} />
          </div>
        );
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
