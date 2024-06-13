import React from "react";

const CompanyCard = ({ title, description }) => {
  return (
    <div className="company-card">
      <h2 className="company-title">{title}</h2>
      <p className="company-description">{description}</p>
    </div>
  );
};

export default CompanyCard;