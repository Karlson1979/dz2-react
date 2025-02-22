import { useEffect, useState } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Option from "./components/option/Option";
function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const val = localStorage.getItem("feedbackValue");
    const parsedVal = JSON.parse(val) ?? reviews;
    return parsedVal;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedback);
    localStorage.setItem("feedbackValue", stringifiedValue);
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const reset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Option
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p style={{ textAlign: "center", fontSize: "25px" }}>No feedback yet</p>
      )}
    </>
  );
}

export default App;
