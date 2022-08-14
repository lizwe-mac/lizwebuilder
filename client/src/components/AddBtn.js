import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AddBtn = () => {
  return (
    <div>
      <Link to="/create-campaign">
        <FontAwesomeIcon icon={faAdd} size="3x" />
      </Link>
    </div>
  );
};

export default AddBtn;
