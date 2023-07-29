import React, { useRef, useState } from "react";
import Styles from "./EducationStyles.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { countCharacters } from "../../utils/method/countWord";
const sxStyle = {
  width: "100%",
  "& .MuiInputBase-input": {
    height: "10px",
  },
};

function EducationBlock(props) {
  const maxCount = 5000;
  const [count, setCount] = useState(0);
  //Hooks for input elements and warning blocks

  const majorInputLocator = useRef();
  const majorWarning = useRef();
  const schoolInputLocator = useRef();
  const schoollWarning = useRef();

  const handlingChangeMajorInput = (e) => {
    if (e.target.value != "") {
      let tempEducation = { ...props.education, major: e.target.value };
      props.onUpdateEducation(tempEducation);
      majorInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      majorWarning.current.style.display = "none";
    } else {
      majorInputLocator.current.style.border = "1px solid red";
      majorWarning.current.style.display = "block";
    }
  };

  const handlingChangeSchoolInput = (e) => {
    if (e.target.value != "") {
      let tempEducation = { ...props.education, school: e.target.value };
      props.onUpdateEducation(tempEducation);
      schoolInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      schoollWarning.current.style.display = "none";
    } else {
      schoolInputLocator.current.style.border = "1px solid red";
      schoollWarning.current.style.display = "block";
    }
  };

  const handlingChangeFromMonthInput = (value) => {
    let tempEducation = { ...props.education, fromMonth: value };
    props.onUpdateEducation(tempEducation);
  };
  const handlingChangeToMonthInput = (value) => {
    let tempEducation = { ...props.education, toMonth: value };
    props.onUpdateEducation(tempEducation);
  };
  const handlingChangeDescInput = (e) => {
    let value = e.target.value;
    let tempEducation = { ...props.education, desc: value };
    if (count <= maxCount) {
      setCount(countCharacters(value));
      props.onUpdateEducation(tempEducation);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={Styles["education-block"]}>
        <div className={Styles["content-wrapper"]}>
          <h2 className={Styles["custom-heading"]}>Học vấn</h2>
          <div className={Styles["short-info"]}>
            Mô tả toàn bộ quá trình học vấn của bạn, cũng như các bằng cấp bạn
            đã được và các khóa huấn luyện bạn đã tham gia
          </div>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Chuyên
                  ngành
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={majorInputLocator}
                    defaultValue={"Chức danh"}
                    onChange={handlingChangeMajorInput}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={majorWarning} className={Styles["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Trường
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={schoolInputLocator}
                    defaultValue={"Trường"}
                    onChange={handlingChangeSchoolInput}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={schoollWarning} className={Styles["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}> </span> Từ tháng
                </div>
                <div className={Styles["position-relative"]}>
                  <DatePicker
                    disableFuture
                    sx={sxStyle}
                    onChange={(newValue) => {
                      const formattedDate = dayjs(newValue).format("YYYY");
                      handlingChangeFromMonthInput(formattedDate);
                    }}
                  />
                </div>
              </div>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}> </span> Đến tháng
                </div>
                <div className={Styles["position-relative"]}>
                  <DatePicker
                    disableFuture
                    sx={sxStyle}
                    onChange={(newValue) => {
                      const formattedDate = dayjs(newValue).format("YYYY");
                      handlingChangeToMonthInput(formattedDate);
                    }}
                  />
                </div>
              </div>
              <div className={Styles["col"]}></div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["input-label"]}>
                <span className={Styles["required-icon"]}>*</span> Mô tả
              </div>
              <div className={Styles["position-relative"]}>
                <textarea
                  defaultValue={"Mô tả"}
                  className={Styles["text-aria"]}
                  onChange={handlingChangeDescInput}
                ></textarea>
              </div>
              <div className={Styles["count-text"]}>
                {count}
                {"/"}
                {maxCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default EducationBlock;

const educationDegrees = [
  "Trung học",
  "Trung cấp",
  "Cao đẳng",
  "Cử nhân",
  "Thạc sĩ",
  "Tiến sĩ",
  "Khác",
];
