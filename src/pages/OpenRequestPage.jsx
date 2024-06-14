import React from "react";
import RequestCard from "../components/RequestCard";
import FakeRequestCard from "../components/FakeRequestCard";

function OpenRequestPage({ request, handleDelete, currentUser }) {
  return (
    
    <div>
     <h4>Welcome {currentUser.username}, here are your requests:</h4>
      <h2>Requests</h2>
      {request.map((oneRequest) => {
        return (
          <div key={oneRequest.id}>
            <RequestCard data={oneRequest} handleDelete={handleDelete} />
          </div>
        );
      })}
      <div>
        <FakeRequestCard />
      </div>
    </div>
  );
}

export default OpenRequestPage;
