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

function ExperiencesBlock(props) {
  const maxCount = 5000;
  const [count, setCount] = React.useState(0);

  // useRef Hooks for input elements and warning blocks
  const positionInputLocator = useRef();
  const positionWarning = useRef();
  const companyWarning = useRef();
  const companyInputLocator = useRef();

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
      positionInputLocator.current.style.border = "1px solid red";
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

  const handlingChangeFromMonth = (value) => {
    let tempValue = { ...props.experience, fromMonth: value };
    props.onChangeExperience(tempValue);
  };

  const handlingChangeToMonth = (value) => {
    let tempValue = { ...props.experience, toMonth: value };
    props.onChangeExperience(tempValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={Styles["experiences-block"]}>
        <div className={Styles["content-wrapper"]}>
          <h2 className={Styles["custom-heading"]}>Kinh Nghiệm Làm Việc</h2>
          <div className={Styles["short-info"]}>
            Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt, điều đó
            giúp bạn có cơ hội hiển thị nhiều hơn trong kết quả tìm kiếm
          </div>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Chức danh
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    defaultValue={"Chức danh"}
                    ref={positionInputLocator}
                    onChange={handlingChangeExPosition}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={positionWarning} className={Styles["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Công ty
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={companyInputLocator}
                    defaultValue={"Công ty"}
                    onChange={handlingChangeExCompany}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={companyWarning} className={Styles["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}> </span> Từ tháng
                </div>
                {/* from month */}
                <div className={Styles["position-relative"]}>
                  <DatePicker
                    disableFuture
                    onChange={(newValue) => {
                      const formattedDate = dayjs(newValue).format("MM-YYYY");
                      handlingChangeFromMonth(formattedDate);
                    }}
                    sx={sxStyle}
                  />
                </div>
              </div>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}> </span> Đến tháng
                </div>
                {/* to month */}
                <div className={Styles["position-relative"]}>
                  <DatePicker
                    disableFuture
                    onChange={(newValue) => {
                      const formattedDate = dayjs(newValue).format("MM-YYYY");
                      handlingChangeToMonth(formattedDate);
                    }}
                    sx={sxStyle}
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
            <div className={Styles["button-wrapper"]}>
              <div className={Styles["button-card"]}>
                <button className={Styles["btn-luu"]}>Lưu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default ExperiencesBlock;
