import dobby from "../assets/dobby.png";
import { Link } from "react-router-dom";

const RequestCard = ({ data, handleDelete }) => {
  return (
    <>
      <div className="open-request-page-container">
        <div className="request-card-container">
          <div className="card-details">
            <h3>{data.worker} </h3>
            <p>
              <strong>Service requested:</strong> {data.service} 
            </p>
            <p>
              <strong>Delivery:</strong> {data.standard} 
            </p>
            <p>
              <strong>Status:</strong> {data.status} 
            </p>
            <div className="update-cancel-button-container">
              <Link to={`/update-delivery/${data.id}`}>
                <button className="update-delivery-button">
                  Update delivery
                </button>
              </Link>
              <button
                onClick={() => {
                  handleDelete(data.id);
                }}
                className="cancel-request-button"
              >
                Cancel request
              </button>
            </div>
          </div>

          <div className="your-mate">
            <img src={dobby} alt="dobby" style={{ height: "100px" }} />
            <h4>Your mate:</h4>
            <p className="mate-name">Dobby</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCard;
