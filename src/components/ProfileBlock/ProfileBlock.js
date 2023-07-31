import React, { useRef } from "react";
import Styles from "./ProfileBlockStyles.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { countries } from "../../utils/data/data";
import dayjs from "dayjs";
import { isValidEmail } from "../../utils/method/ValidationUtils";
import { isVietnamesePhoneNumberValid } from "../../utils/method/ValidationUtils";
const PhoneNumberAutoComplete = styled(Autocomplete)`
  & .MuiInputBase-input {
    height: 10px;
  }
`;

const NationAutoComplete = styled(Autocomplete)({
  "& .MuiInputBase-root": {
    width: "100%",
    height: "42px",
  },
  "& .MuiInputBase-input ": {
    height: "10px",
  },
});

const CustomeDatePicker = styled(DatePicker)({
  width: "100%",
  "& .MuiInputBase-input": {
    height: "10px",
  },
  "& .MuiFormControl-root:focus": {
    outline: "none !important",
  },
  "& .MuiInputBase-input:focus": {
    outline: "none !important",
  },
});

function ProfileBlock(props) {
  // React useRef Hooks for Elemets
  const emailInputLocator = useRef();
  const emailWarningLabel = useRef();
  const phoneInputLocator = useRef();
  const phoneWarningLabel = useRef();
  const inputAddressLocator = useRef();
  const addressWarning = useRef();

  const handlingChangeDialingCode = (value) => {
    props.onChangeDialingCode(value);
  };

  const handlingChangePhoneNumb = (e) => {
    let phoneNumber = props.dialingCode + e.target.value;
    if (isVietnamesePhoneNumberValid(phoneNumber)) {
      props.onChangePhoneNumb(e.target.value);
      phoneInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      phoneWarningLabel.current.style.display = "none";
    } else {
      phoneInputLocator.current.style.border = "1px solid red";
      phoneWarningLabel.current.style.display = "block";
    }
  };

  const handlingChangeEmail = (e) => {
    if (isValidEmail(e.target.value) == true) {
      props.onChangeEmail(e.target.value);
      emailInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      emailWarningLabel.current.style.display = "none";
    } else {
      emailInputLocator.current.style.border = "1px solid red";
      emailWarningLabel.current.style.display = "block";
    }
  };

  const handlingChangeNation = (value) => {
    props.onChangeNation(value);
  };

  const handlingChangeAddress = (e) => {
    if (e.target.value != "") {
      props.onChangeAddress(e.target.value);
      inputAddressLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      addressWarning.current.style.display = "none";
    } else {
      inputAddressLocator.current.style.border = "1px solid red";
      addressWarning.current.style.display = "block";
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={Styles["profile-block-wrapper"]}>
        <div className={Styles["content-wrapper"]}>
          {/* Heading */}
          <h2 className={Styles["custom-heading"]}>Thông Tin Cá Nhân</h2>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Email
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    defaultValue={"Email"}
                    ref={emailInputLocator}
                    onBlur={handlingChangeEmail}
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
                  <span className={Styles["required-icon"]}>*</span> Điện thoại
                </div>
                <div
                  className={`${Styles["position-relative"]} ${Styles["phoneNumber-wrapper"]}`}
                >
                  {/* PhoneNumber */}
                  <div style={{ flex: 1 }}>
                    <PhoneNumberAutoComplete
                      onChange={(event, country) => {
                        if (country) {
                          handlingChangeDialingCode(`+${country.phone}`);
                        }
                      }}
                      id="country-select-demo"
                      sx={{ width: 140 }}
                      options={countries}
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
                  <div style={{ flex: 3 }}>
                    <input
                      defaultValue={"Số điện thoại"}
                      ref={phoneInputLocator}
                      onBlur={handlingChangePhoneNumb}
                      className={Styles["input"]}
                    ></input>
                  </div>
                </div>
                <div
                  ref={phoneWarningLabel}
                  className={Styles["warning-label"]}
                >
                  Số điện thoại của bạn không hợp lệ.
                </div>
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Ngày sinh
                </div>
                <div className={Styles["position-relative"]}>
                  <CustomeDatePicker
                    disableFuture
                    onChange={(newValue) => {
                      const formattedDate =
                        dayjs(newValue).format("DD-MM-YYYY");
                      props.onChangeBirtday(formattedDate);
                    }}
                  />
                </div>
              </div>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Quốc gia
                </div>
                <div className={Styles["position-relative"]}>
                  <NationAutoComplete
                    fullWidth
                    onChange={(event, country) => {
                      if (country) {
                        handlingChangeNation(country.label);
                      }
                    }}
                    id="country-select-demo"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
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
                        {option.label}
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
              </div>
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Địa chỉ
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    ref={inputAddressLocator}
                    onChange={handlingChangeAddress}
                    className={Styles["input"]}
                  ></input>
                </div>
                <div ref={addressWarning} className={Styles["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
              <div className={Styles["col"]}></div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default ProfileBlock;

const options = ["Việt Nam", "Nước Ngoài"];
