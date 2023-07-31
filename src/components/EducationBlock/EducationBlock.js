import React, { useRef, useState } from "react";
import Styles from "./EducationStyles.module.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { countCharacters } from "../../utils/method/ValidationUtils";
import EducationCard from "./EducationCard/EducationCard";

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
  const descInputLocator = useRef();
  const schoolInputLocator = useRef();
  const schoollWarning = useRef();
  const limitWarningBlockRef = useRef();
  const missingWarningBlockRef = useRef();

  // hook for edit mode
  const [isEdit, setIsEdit] = useState(false);
  // Store the temp key - this temp key is auto generated +1 after Adding project
  const [id, setId] = useState(0);
  // Store the key of item is being Edited
  const [isEditKey, setIsEditKey] = useState(-1);
  // Education object
  const [education, setEducation] = useState({
    id: id,
    major: "",
    school: "",
    fromMonth: "",
    toMonth: "",
    desc: "",
  });

  const handlingChangeMajorInput = (e) => {
    // Validation
    if (e.target.value != "") {
      majorInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      majorWarning.current.style.display = "none";
    } else {
      majorInputLocator.current.style.border = "1px solid red";
      majorWarning.current.style.display = "block";
    }
  };

  const handlingChangeSchoolInput = (e) => {
    // Validation
    if (e.target.value != "") {
      schoolInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      schoollWarning.current.style.display = "none";
    } else {
      schoolInputLocator.current.style.border = "1px solid red";
      schoollWarning.current.style.display = "block";
    }
  };

  const handlingChangeFromMonthInput = (value) => {
    let tempEducation = { ...education, fromMonth: value };
    setEducation(tempEducation);
  };
  const handlingChangeToMonthInput = (value) => {
    let tempEducation = { ...education, toMonth: value };
    setEducation(tempEducation);
  };
  const handlingChangeDescInput = (e) => {
    let value = e.target.value;
    let tempEducation = { ...education, desc: value };
    if (count <= maxCount) {
      setCount(countCharacters(value));
      setEducation(tempEducation);
    }
  };

  const handlingClickAddButton = () => {
    if (
      majorInputLocator.current.value != "" &&
      majorInputLocator.current.value != "" &&
      education.fromMonth != "" &&
      education.toMonth != "" &&
      props.educations.length < 4
    ) {
      // set key,school,major for the education
      let tempEducation = {
        ...education,
        id: id,
        major: majorInputLocator.current.value,
        school: schoolInputLocator.current.value,
      };

      console.log(tempEducation);
      props.onUpdateEducation(tempEducation);
      // update Key + 1
      setId(id + 1);
      // reset all the ref
      limitWarningBlockRef.current.style.display = "none";
      missingWarningBlockRef.current.style.display = "none";
      majorInputLocator.current.value = "";
      majorInputLocator.current.focus();
      schoolInputLocator.current.value = "";
      descInputLocator.current.value = "";
    } else if (props.educations.length >= 4) {
      limitWarningBlockRef.current.style.display = "block";
    } else {
      missingWarningBlockRef.current.style.display = "block";
      if (majorInputLocator.current.value == "") {
        majorInputLocator.current.style.border = "1px solid red";
      }
      if (schoolInputLocator.current.value == "") {
        schoolInputLocator.current.style.border = "1px solid red";
      }
    }
  };
  const handlingClickExit = () => {
    // set all the ref value to default
    majorInputLocator.current.value = "";
    schoolInputLocator.current.value = "";
    descInputLocator.current.value = "";
    // turn the edit mode: off
    setIsEdit(false);
  };
  const handlingClickSave = () => {
    if (
      majorInputLocator.current.value != "" &&
      majorInputLocator.current.value != "" &&
      education.fromMonth != "" &&
      education.toMonth != "" &&
      props.educations.length < 4
    ) {
      // edit the educationListItem
      props.onEditEducations(
        isEditKey,
        majorInputLocator.current.value,
        schoolInputLocator.current.value,
        education.fromMonth,
        education.toMonth,
        education.desc
      );
      // reset the isEditKey to default
      setIsEditKey(-1);
      // turn the edit mode: off
      setIsEdit(false);
      // reset all the ref
      limitWarningBlockRef.current.style.display = "none";
      missingWarningBlockRef.current.style.display = "none";
      majorInputLocator.current.value = "";
      majorInputLocator.current.focus();
      schoolInputLocator.current.value = "";
      descInputLocator.current.value = "";
    } else {
      missingWarningBlockRef.current.style.display = "block";
      if (majorInputLocator.current.value == "") {
        majorInputLocator.current.style.border = "1px solid red";
      }
      if (schoolInputLocator.current.value == "") {
        schoolInputLocator.current.style.border = "1px solid red";
      }
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
              {props.educations &&
                props.educations.map((edu, index) => {
                  return (
                    <React.Fragment key={"eduCard" + index}>
                      <EducationCard
                        education={edu}
                        onDelete={props.onDeleteEducationItem}
                        onEdit={setIsEdit}
                        isEdit={isEdit}
                        isEditKey={isEditKey}
                        setIsEditKey={setIsEditKey}
                        majorRef={majorInputLocator}
                        schoolRef={schoolInputLocator}
                        descRef={descInputLocator}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Chuyên
                  ngành
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={majorInputLocator}
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
                  <span className={Styles["required-icon"]}> </span> Từ năm
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
                  <span className={Styles["required-icon"]}> </span> Đến năm
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
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["input-label"]}>
                <span className={Styles["required-icon"]}>*</span> Mô tả
              </div>
              <div className={Styles["position-relative"]}>
                <textarea
                  ref={descInputLocator}
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
            <div className={Styles["button-card"]}>
              <div
                ref={limitWarningBlockRef}
                className={Styles["warning-label"]}
              >
                Bạn đã ghi tối đa
              </div>
              <div
                ref={missingWarningBlockRef}
                className={Styles["warning-label"]}
              >
                Bạn cần điền đầy đủ thông tin
              </div>

              {isEdit && (
                <button
                  onClick={handlingClickExit}
                  className={Styles["btn-huy"]}
                >
                  Huỷ
                </button>
              )}
              {isEdit ? (
                <button
                  onClick={handlingClickSave}
                  className={Styles["btn-luu"]}
                >
                  Lưu
                </button>
              ) : (
                <button
                  onClick={handlingClickAddButton}
                  className={Styles["btn-luu"]}
                >
                  Thêm
                </button>
              )}
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
