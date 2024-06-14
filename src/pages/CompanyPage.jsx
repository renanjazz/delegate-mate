import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get("service");
  const city = queryParams.get("city");

  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (service && city) {
      axios
        .get(`${API_URL}/companies?service=${service}&city=${city}`)
        .then((response) => {
          setCompanies(response.data);
        })
        .catch((error) => {
          console.error("Error fetching companies:", error);
        });
    }
  }, [service, city]);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  // Function to handle proceeding to the login page
  const handleProceed = () => {
    if (selectedCompany) {
      localStorage.setItem("selectedCompany", JSON.stringify(selectedCompany));
      navigate("/create-request", { state: { selectedCompany } });
    } else {
      alert("Please select a company to proceed.");
    }
  };

  return (
    <div className="company-page">
      <h2>
        Companies in {city} for {service}
      </h2>
      <div className="companies-list">
        {companies.map((company) => (
          <div
            key={company.id}
            className={`company-card ${
              selectedCompany && selectedCompany.id === company.id
                ? "selected"
                : ""
            }`}
            onClick={() => handleSelectCompany(company)}
          >
            <h3 className="company-title">{company.title}</h3>
            <p className="company-description">{company.description}</p>
          </div>
        ))}
      </div>
      <div className="proceed-button-company-container">
        
        <Link to="/">
          <button className="proceed-button">Home</button>
        </Link>
        <button className="proceed-button-company" onClick={handleProceed}>
          Proceed
        </button>
      </div>
  
    </div>
  );
};

export default CompanyPage;
