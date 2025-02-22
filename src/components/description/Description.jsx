import React from "react";
import css from "./Description.module.css";
const Description = () => {
  return (
    <div className={css.descriptionMain}>
      <h1>Sip Happens Café</h1>
      <p className={css.descriptionContent}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
