import React from "react";
import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedbackMain}>
      <p>
        {" "}
        good: <span className={css.good}>{good}</span>
      </p>
      <p>
        neutral: <span className={css.neutral}>{neutral}</span>{" "}
      </p>
      <p>
        bad: <span className={css.bad}>{bad}</span>
      </p>
      <p> TotalFeedback: {totalFeedback}</p>
      <p>positiveFeedback: {positiveFeedback} %</p>
    </div>
  );
};

export default Feedback;
