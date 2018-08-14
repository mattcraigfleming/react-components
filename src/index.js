import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Popup from "reactjs-popup";
import Hello from "./Hello";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./index.css";
import Card from './components/Card';
import Refresh from './components/Refresh';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const Home = () => (
  <div>
    <h2>Home Page </h2>
    
  </div>
);

const About = () => (
  <div>
    <h2>About Page</h2>
  </div>
);
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
  </div>
);

const Animations = () => (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <div style={{}}>
    <h2>Animations</h2>
    </div>
        <div>
        <Card />
        <Refresh />   
        </div>

    </div>
)

const App = () => (
  <div style={styles}>
    <Hello name="MF - Component Library" />

    <Router>
      <div>
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>

        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/animations" component={Animations} />
      </div>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
