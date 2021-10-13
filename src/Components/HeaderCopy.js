import React from "react";
import Form from "./SearchForm/Form";
import Navigation from "./ProductNavigation/Navigation";

const HeaderCopy = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default HeaderCopy;
