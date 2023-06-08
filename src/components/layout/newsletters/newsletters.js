import * as React from "react";
import { container, paragraph, input, btn } from "./newsletters.module.css";
const NewSletters = () => {
  return (
    <div className={container}>
      <p className={paragraph}>
        <b>Newsletters</b>
      </p>
      <h1>Stories and Interviews</h1>
      <h3>
      Subscribe to know more about my activities, the latest in studies, works, and life.
      </h3>
      <input type="text" placeholder="Enter your email" className={input} />{" "}
      <button className={btn}>Subscribe</button>
      <p>
        I care about your data in our <u>privacy policy</u>
      </p>
    </div>
  );
};

export default NewSletters;
