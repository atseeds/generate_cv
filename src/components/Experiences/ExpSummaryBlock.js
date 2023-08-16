import React from "react";
import Styles from "./ExperiencesStyles.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { countCharacters } from "../../utils/method/ValidationUtils";
import { useRef } from "react";

const sxStyle = {
  width: "100%",
  "& .MuiInputBase-input": {
    height: "10px",
  },
};

function ExpSummaryBlock(props) {
  const maxCount = 5000;
  const [count, setCount] = React.useState(0);

  // useRef Hooks for input elements and warning blocks
  const positionInputLocator = useRef();
  const positionWarning = useRef();
  const companyWarning = useRef();
  const companyInputLocator = useRef();
  const expYearInputLocator = useRef();
  const LessExpWarning = useRef();
  const MoreExpWarning = useRef();

  const handlingChangeDescription = (e) => {
    let temp = countCharacters(e.target.value);
    if (temp <= maxCount) {
      setCount(temp);
      let value = { ...props.experience, desc: e.target.value };
      props.onChangeExperience(value);
    }
  };

  const handlingChangeExPosition = (e) => {
    if (e.target.value != "") {
      let value = { ...props.experience, exPosition: e.target.value };
      props.onChangeExperience(value);
      positionInputLocator.current.style.border =
        "1px solid rgb(196, 196, 196)";
      positionWarning.current.style.display = "none";
    } else {
      positionInputLocator.current.style.border = "1px solid red ";
      positionWarning.current.style.display = "block";
    }
  };

  const handlingChangeExCompany = (e) => {
    if (e.target.value != "") {
      let value = { ...props.experience, exCompany: e.target.value };
      props.onChangeExperience(value);

      companyInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      companyWarning.current.style.display = "none";
    } else {
      companyInputLocator.current.style.border = "1px solid red";
      companyWarning.current.style.display = "block";
    }
  };

  const handlingChangeExpYear = (e) => {
    let value = e.target.value;
    if (value > 0 && value <= 70) {
      let tempValue = { ...props.experience, expYear: e.target.value };
      props.onChangeExperience(tempValue);
      LessExpWarning.current.style.display = "none";
      MoreExpWarning.current.style.display = "none";
      expYearInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
    } else if (value <= 0) {
      expYearInputLocator.current.style.border = "1px solid red";
      MoreExpWarning.current.style.display = "block";
      LessExpWarning.current.style.display = "none";
    } else {
      expYearInputLocator.current.style.border = "1px solid red";
      MoreExpWarning.current.style.display = "none";
      LessExpWarning.current.style.display = "block";
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={Styles["experiences-block"]}>
        <div className={Styles["content-wrapper"]}>
          <h2 className={Styles["custom-heading"]}>PROFESSIONAL SUMMARY</h2>
          <div className={Styles["short-info"]}>
            Provide a detailed description of your work experience as much as
            possible, as it increases your chances of appearing more prominently
            in search results
          </div>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Position
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    placeholder={"Position"}
                    ref={positionInputLocator}
                    onChange={handlingChangeExPosition}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={positionWarning} className={Styles["warning-label"]}>
                  Your information is invalid
                </div>
              </div>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Years of
                  experience
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={expYearInputLocator}
                    type="number"
                    min={0}
                    max={70}
                    placeholder={"Years of experience"}
                    onChange={handlingChangeExpYear}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={LessExpWarning} className={Styles["warning-label"]}>
                  The number of years should be less than 70
                </div>
                <div ref={MoreExpWarning} className={Styles["warning-label"]}>
                  The number of years should be more than 0
                </div>
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Company
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={companyInputLocator}
                    placeholder={"Company"}
                    onChange={handlingChangeExCompany}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={companyWarning} className={Styles["warning-label"]}>
                  Your information is invalid
                </div>
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["input-label"]}>
                <span className={Styles["required-icon"]}>*</span> Description
              </div>
              <div className={Styles["position-relative"]}>
                <textarea
                  onChange={handlingChangeDescription}
                  className={Styles["text-aria"]}
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
    </LocalizationProvider>
  );
}

export default ExpSummaryBlock;
