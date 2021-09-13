import { NavLink } from "react-router-dom";
import Common from "./Common";
import A from "../Website/images/b.jpg";
import React from "../Website/images/react.jpg";

const Home = () => {
  return (
    <>
      <Common
       name="This is my React website. I own this site."
       imgSrc={React}
       visit="/service"
       btnName="Get started"
      />
    </>
  );
};
export default Home;
