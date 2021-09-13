import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-10 col-10 mx-auto">
        {/* //cards */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={props.imgS}
            className="card-img-top"
            width="100%"
            height="250px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text">This is the latest product.</p>
            <NavLink to="/" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
