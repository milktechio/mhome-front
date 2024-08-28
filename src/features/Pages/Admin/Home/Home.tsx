import "./Home.css";

const Home = () => {
  return (
    <>
      <div></div>
      <div className="home-styles-container">
        <div className="notifications-container">
          <div className="notifications">
            <div>Reportes</div>
            <label>5</label>
          </div>
          <div className="notifications">
            <div>Reportes</div>
            <label>5</label>
          </div>
          <div className="notifications">
            <div>Reportes</div>
            <label>5</label>
          </div>
        </div>
        <div className="cash-display-container">
          <div className="title">PAGOS ABRIL:</div>
          <div className="amount">$999,999.00</div>
        </div>
        <div className="cash-display-container">
          <div className="title">PAGOS ABRIL:</div>
          <div className="amount">$999,999.00</div>
        </div>
      </div>
    </>
  );
};

export default Home;
