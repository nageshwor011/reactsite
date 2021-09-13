import { Switch, Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Website/Home";
import About from "./Website/About";
import Service from "./Website/Service";
import Contact from "./Website/Contact";
import Navbar from "./Website/Navbar";
import Footer from "./Website/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/service" component={Service} />
        <Route  path="/contact" component={Contact} />
        <Redirect to="/" component={Home} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
