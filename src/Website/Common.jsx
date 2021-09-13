import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header">
        <div className="container-fluid navBg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex justify-content-around">
                <div className="col-md-6 mt-5  order-2 order-lg-1 ">
                  <h1>
                    Creating my first <strong>React appp</strong>
                  </h1>
                  <h2 className="my-3 ">
                   {props.name}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary border-1 text-capitalize">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 mt-5 ps-5 order-1 order-lg-2 header-img ">
                  <img src={props.imgSrc} alt="test img" className="img-fluid animations" width="400px"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
