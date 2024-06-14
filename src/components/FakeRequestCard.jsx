import hedwig from "../assets/hedwig.png";

const FakeRequestCard = () => {
  return (
    <>
      <div className="open-request-page-container">
        <div className="request-card-container">
          <div className="card-details">
            <h3>Zapp Your Home</h3>
            <p>
              <strong>Service requested:</strong> Electrician
            </p>
            <p>
              <strong>Delivery:</strong> 10-06-2023
            </p>
            <p>
              <strong>Status:</strong> Completed
            </p>
            </div>
            <div className="your-mate">
              <img src={hedwig} alt="hedwig" style={{ height: "100px" }} />
              <h4>Your mate:</h4>
              <p className="mate-name">Hedwig</p>
            </div>
          </div>
        </div>



    </>
  );
};

export default FakeRequestCard;



/* TODO - add Kreacher
  <div className="open-request-page-container">
        <div className="request-card-container">
          <div className="card-details">
            <h3>Telco Fastest Net</h3>
            <p>
              <strong>Service requested:</strong> Internet
            </p>
            <p>
              <strong>Delivery:</strong> 06-12-2023
            </p>
            <p>
              <strong>Status:</strong>Completed
            </p>
            </div>
          </div>

          <div className="your-mate">
            <img src={kreacher} alt="kreacher" style={{ height: "100px" }} />
            <h4>Your mate:</h4>
            <p className="mate-name">Kreacher</p>*/