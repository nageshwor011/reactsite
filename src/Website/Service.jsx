import A from "../Website/images/b.jpg";
import { NavLink } from "react-router-dom";
import { CardData } from "./CardData";
import Card from "./Card";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid navBg">
        <div className="row ">
          <div className="col-10 mx-auto">
          <div className="row gy-3 ">
            {CardData.map((curData, index) => {
              return (
                <Card key={index} imgS={curData.imgSrc} title={curData.title} />
              );
            })}
          </div>
          </div>
        </div>
      </div>

   
         
    
    </>
  );
};
export default Service;
