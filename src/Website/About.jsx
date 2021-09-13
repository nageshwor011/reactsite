import Common from "./Common";
import A from "../Website/images/b.jpg";

const About = ()=>{
    return(
        <>
            <Common 
            name="wel come to about page."
            imgSrc={A}
            visit="/contact"
            btnName="Contact now"
            />
        </>
    );
}
export default About;