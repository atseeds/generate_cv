import React, { use, useEffect, useState } from "react";
import Styles from "./LanguageStyles.module.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import LanguageCard from "./LanguageCard/LanguageCard";

const sxStyle = {
  width: "100%",
  "& .MuiInputBase-input": {
    height: "10px",
  },
};

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function LanguageBlock(props) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  // Store useRef Hooks for warning label and input
  const inputLocator = useRef();
  const warningLabelBlock = useRef();
  const warningLabelBlock2 = useRef();
  const warningLabelBlock3 = useRef();

  //Store the Add or Edit mode
  const [isEdit, setIsEdit] = useState(false);
  // Store the temp key - this temp key is auto generated +1 after Adding project
  const [languageKey, setLanguageKey] = useState(0);

  // Store the language states
  const [language, setLanguage] = React.useState({
    id: languageKey,
    name: "",
    rate: 0,
  });

  const handlingChangeInput = (value) => {
    let tempValue = { ...language, name: value };
    setLanguage(tempValue);
  };

  const handlingChangeSkillRate = (value) => {
    let tempValue = { ...language, rate: value };
    setLanguage(tempValue);
  };

  const IsDuplicateLanguage = (value) => {
    const result = props.languages.some((lang) => lang.name == value);
    return result;
  };

  const handlingClickAddButton = () => {
    if (IsDuplicateLanguage(language.name) == true) {
      console.log("aaaa");
      warningLabelBlock3.current.style.display = "block";
    } else if (
      language.name != "" &&
      language.rate != 0 &&
      props.languages.length < 4
    ) {
      // setId for language
      let tempLanguage = { ...language, id: languageKey };
      props.onChangeLanguage(tempLanguage);
      setLanguageKey(languageKey + 1);
      warningLabelBlock.current.style.display = "none";
      warningLabelBlock2.current.style.display = "none";
      warningLabelBlock3.current.style.display = "none";
    } else if (props.languages.length >= 4) {
      warningLabelBlock2.current.style.display = "block";
      warningLabelBlock3.current.style.display = "none";
    } else {
      warningLabelBlock.current.style.display = "block";
    }
  };

  return (
    <>
      <div className={Styles["skill-block-wrapper"]}>
        <div className={Styles["content-wrapper"]}>
          {/* Heading */}
          <h2 className={Styles["custom-heading"]}>Ngoại ngữ</h2>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              {props.languages &&
                props.languages.map((language, index) => {
                  return (
                    <React.Fragment key={"skill" + index}>
                      <LanguageCard
                        language={language}
                        onDelete={props.onDeleteLanguageItem}
                        onEdit={setIsEdit}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span>Ngoại ngữ
                </div>
                <div className={Styles["position-relative"]}>
                  <div className={Styles["position-relative"]}>
                    <Autocomplete
                      sx={sxStyle}
                      options={languages}
                      onChange={(event, language) => {
                        if (language) {
                          handlingChangeInput(language);
                        }
                      }}
                      style={{ height: "40px" }}
                      renderInput={(params) => (
                        <TextField
                          inputRef={inputLocator}
                          {...params}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Mức độ
                  thành thạo
                </div>
                <div className={Styles["position-relative"]}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      size="large"
                      name="hover-feedback"
                      value={value}
                      precision={1}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                        handlingChangeSkillRate(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </div>
              </div>
            </div>
            <div className={Styles["button-wrapper"]}>
              <div ref={warningLabelBlock} className={Styles["warning-label"]}>
                Bạn cần điền đầy đủ thông tin
              </div>
              <div ref={warningLabelBlock2} className={Styles["warning-label"]}>
                Bạn đã ghi tối đa
              </div>
              <div ref={warningLabelBlock3} className={Styles["warning-label"]}>
                Thông tin bị trùng
              </div>
              <div className={Styles["button-card"]}>
                {isEdit && <button className={Styles["btn-huy"]}>Huỷ</button>}
                {isEdit ? (
                  <button className={Styles["btn-luu"]}>Lưu</button>
                ) : (
                  <button
                    className={Styles["btn-luu"]}
                    onClick={handlingClickAddButton}
                  >
                    Thêm
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguageBlock;

const languages = [
  "Tiếng anh",
  "Tiếng Việt",
  "Tiếng ả rập",
  "Tiếng Bangladesh",
  "Tiếng Bungari",
  "Tiếng Miến Điện",
  "Tiếng campuchia",
  "Tiếng Bisaya (Philipines)",
  "Tiếng Quảng Đông",
  "Tiếng phổ thông",
  "Tiếng Séc",
  "Tiếng Đan Mạch",
  "Tiếng Hà Lan",
  "Tiếng Phần Lan",
  "Tiếng Pháp",
  "Tiếng Đức",
  "Tiếng Hi Lạp",
  "Tiếng Ấn Độ",
  "Tiếng Hungari",
  "Tiếng Indonesia",
  "Tiếng Ý",
  "Tiếng Nhật",
  "Tiếng Java (Indonesia)",
  "Tiếng Hàn",
  "Tiếng Lào",
  "Tiếng Mã Lai",
  "Tiếng Na Uy",
  "Tiếng Ba Lan",
  "Tiếng Bồ Đào Nha",
  "Tiếng Romania",
  "Tiếng Nga",
  "Tiếng Tây Ban Nha",
  "Tiếng Thuỵ Điển",
  "Tiếng Tagalog (Philipines)",
  "Tiếng Đài Loan",
  "Tiếng Thái",
  "Tiếng Thổ Nhĩ Kì",
  "Tiếng UKraina",
  "Khác",
  "",
];
