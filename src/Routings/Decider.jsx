import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Section from "./Section";
import { Route, Switch } from "react-router-dom";

const Decider = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/section" component={Section} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default Decider;
