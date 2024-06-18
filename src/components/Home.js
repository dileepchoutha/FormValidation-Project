import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./common.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <div className="test">
        <NavLink to={"/registration"}>
          <Button negative className="reg-button">
            Registration Form
          </Button>
        </NavLink>
        <NavLink to={"/Userdata"}>
          <Button positive className="reg-button">
            View Data
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
