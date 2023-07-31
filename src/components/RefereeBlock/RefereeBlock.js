import React from "react";
import { useRef } from "react";
import Styles from "./RefereeBlock.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../utils/data/data";
import { isOnlyCharacterString } from "../../utils/method/ValidationUtils";
import { isValidEmail } from "../../utils/method/ValidationUtils";
import { isVietnamesePhoneNumberValid } from "../../utils/method/ValidationUtils";
const AutoComplete = styled(Autocomplete)`
  & .MuiInputBase-input {
    height: 10px;
  }
`;

function RefereeBlock(props) {
  // React useRef Hooks for Elemets
  const emailInputLocator = useRef();
  const emailWarningLabel = useRef();
  const phoneInputLocator = useRef();
  const phoneWarningLabel = useRef();

  const handlingUpdateReferenceName = (e) => {
    if (isOnlyCharacterString(e.target.value)) {
      let tempReference = { ...props.reference, name: e.target.value };
      props.onUpdateReference(tempReference);
    }
  };

  const handlingUpdateReferencePosition = (e) => {
    if (isOnlyCharacterString(e.target.value)) {
      let tempReference = { ...props.reference, position: e.target.value };
      props.onUpdateReference(tempReference);
    }
  };

  const handlingUpdateEmail = (e) => {
    if (isValidEmail(e.target.value) == true) {
      let tempReference = { ...props.reference, email: e.target.value };
      props.onUpdateReference(tempReference);
      emailInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      emailWarningLabel.current.style.display = "none";
    } else {
      emailInputLocator.current.style.border = "1px solid red";
      emailWarningLabel.current.style.display = "block";
    }
  };

  const handlingUpdatePhoneNumb = (e) => {
    let phoneNumber = props.reference.dialingCode + e.target.value;
    if (isVietnamesePhoneNumberValid(phoneNumber)) {
      let tempReference = { ...props.reference, phone: e.target.value };
      props.onUpdateReference(tempReference);
      phoneInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      phoneWarningLabel.current.style.display = "none";
    } else {
      phoneInputLocator.current.style.border = "1px solid red";
      phoneWarningLabel.current.style.display = "block";
    }
  };

  const handlingUpdateDialingCode = (value) => {
    let tempReference = { ...props.reference, dialingCode: value };
    props.onUpdateReference(tempReference);
  };

  const handlingUpdateReferenceCompany = (e) => {
    if (isOnlyCharacterString(e.target.value)) {
      let tempReference = { ...props.reference, company: e.target.value };
      props.onUpdateReference(tempReference);
    }
  };

  return (
    <>
      <div className={Styles["referee-block"]}>
        <div className={Styles["content-wrapper"]}>
          <h2 className={Styles["custom-heading"]}>Người tham khảo</h2>
          <div className={Styles["short-info"]}>
            Thông tin Người Tham Khảo giúp tăng độ tin cậy cho hồ sơ của bạn và
            là cơ hội giúp bạn chứng minh năng lực của bản thân.
          </div>
          <form>
            <div className={Styles["form-wrapper"]}>
              <div className={Styles["row"]}>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Họ và tên
                  </div>
                  <div className={Styles["position-relative"]}>
                    <input
                      onChange={handlingUpdateReferenceName}
                      value={props.reference.name}
                      className={Styles["input"]}
                    ></input>
                  </div>
                </div>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Chức danh
                  </div>
                  <div className={Styles["position-relative"]}>
                    <input
                      value={props.reference.position}
                      onChange={handlingUpdateReferencePosition}
                      className={Styles["input"]}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={Styles["row"]}>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Công Ty
                  </div>
                  <div className={Styles["position-relative"]}>
                    <input
                      onChange={handlingUpdateReferenceCompany}
                      value={props.reference.company}
                      className={Styles["input"]}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={Styles["row"]}>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Email
                  </div>
                  <div className={Styles["position-relative"]}>
                    <input
                      ref={emailInputLocator}
                      onBlur={handlingUpdateEmail}
                      className={Styles["input"]}
                    ></input>
                  </div>
                  <div
                    ref={emailWarningLabel}
                    className={Styles["warning-label"]}
                  >
                    Email của bạn không hợp lệ.
                  </div>
                </div>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Số điện
                    thoại
                  </div>
                  <div
                    className={`${Styles["position-relative"]} ${Styles["phoneNumber-wrapper"]}`}
                  >
                    {/* PhoneNumber */}
                    <div style={{ flex: 1 }}>
                      <AutoComplete
                        id="country-select-demo"
                        sx={{ width: 140 }}
                        options={countries}
                        onChange={(event, country) => {
                          if (country) {
                            handlingUpdateDialingCode(`+${country.phone}`);
                          }
                        }}
                        autoHighlight
                        getOptionLabel={(option) => "+" + option.phone}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              alt=""
                            />
                            {option.label} (+{option.phone})
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password", // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </div>
                    <input
                      onBlur={handlingUpdatePhoneNumb}
                      ref={phoneInputLocator}
                      className={Styles["input"]}
                    ></input>
                  </div>
                  <div
                    ref={phoneWarningLabel}
                    className={Styles["warning-label"]}
                  >
                    Số điện thoại của bạn không hợp lệ.
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RefereeBlock;
