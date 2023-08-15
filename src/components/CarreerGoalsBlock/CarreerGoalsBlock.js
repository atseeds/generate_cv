import React, { useState } from "react";
import Styles from "./CarreerGoalsBlockStyle.module.css";
import { countCharacters } from "../../utils/method/ValidationUtils";
function CarreerGoalsBlock(props) {
  const maxCount = 5000;
  const [count, setCount] = useState(0);

  const handlingChangeIntroduction = (e) => {
    let temp = countCharacters(e.target.value);
    if (temp <= maxCount) {
      setCount(temp);
      props.onChangeIntroduction(e.target.value);
    }
  };

  return (
    <>
      <div className={Styles["carreer-goals-block"]}>
        <div className={Styles["content-wrapper"]}>
          {/* Heading */}
          <h2 className={Styles["custom-heading"]}>Career Objective</h2>
          <div className={Styles["short-info"]}>
            Introduce yourself and describe your career objectives
          </div>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              <div className={Styles["position-relative"]}>
                <textarea
                  onChange={handlingChangeIntroduction}
                  className={Styles["input"]}
                ></textarea>
              </div>
            </div>
            <div className={Styles["count-text"]}>
              {count}
              {"/"}
              {maxCount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarreerGoalsBlock;
