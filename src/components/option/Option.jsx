import React from "react";
import css from "./Options.module.css";
const Option = ({ reset, updateFeedback, totalFeedback }) => {
  return (
    <div className={css.optionMain}>
      <button
        type="button"
        className={css.btnGood}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.btnNeutral}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.btnBad}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback !== 0 ? (
        <button type="button" className={css.btnReset} onClick={reset}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Option;
