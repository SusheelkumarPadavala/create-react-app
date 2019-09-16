import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";

const Home = props => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <h1>
          Hello{" "}
          <span role="img" aria-label="earth">
            🌎!
          </span>
        </h1>
      </div>
      <Divider />
      <Link to="/users">Show Users</Link>
    </div>
  );
};

export default Home;
