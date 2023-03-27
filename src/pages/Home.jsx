import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Home = (props) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/products");
  };
  return (
    <div>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <button onClick={onNavigate}>Navigate</button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
