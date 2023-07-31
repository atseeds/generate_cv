import * as React from "react";
import { Stack } from "@mui/material";
import Style from "./OverviewBlockStyles.module.css";
import { memo } from "react";
import ImageDialog from "./ImageDialog/ImageDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { isOnlyCharacterString } from "../../utils/method/ValidationUtils";
import { useState } from "react";

function OverviewBlock(props) {
  // useRef Hooks for input
  const inputSurnameLocator = React.useRef();
  const inputLastNameLocator = React.useRef();
  const inputPositionLocator = React.useRef();
  // useRef Hooks for label
  const surnameWarning = React.useRef();
  const lastNameWarning = React.useRef();
  const positionWarning = React.useRef();

  const handlingChangeSurName = (e) => {
    let value = e.target.value;
    if (isOnlyCharacterString(value) == true && value != "") {
      props.onChangeSurName(value);
      inputSurnameLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      surnameWarning.current.style.display = "none";
    } else {
      inputSurnameLocator.current.style.border = "1px solid red";
      surnameWarning.current.style.display = "block";
    }
  };

  const handlingChangeLastNAme = (e) => {
    let value = e.target.value;
    if (isOnlyCharacterString(value) == true && value != "") {
      props.onChangeLastName(value);
      inputLastNameLocator.current.style.border =
        "1px solid rgb(196, 196, 196)";
      lastNameWarning.current.style.display = "none";
    } else {
      inputLastNameLocator.current.style.border = "1px solid red";
      lastNameWarning.current.style.display = "block";
    }
  };

  const handlingChangePosition = (e) => {
    let value = e.target.value;
    if (isOnlyCharacterString(value) == true && value != "") {
      props.onChangePosition(value);
      inputPositionLocator.current.style.border =
        "1px solid rgb(196, 196, 196)";
      positionWarning.current.style.display = "none";
    } else {
      inputPositionLocator.current.style.border = "1px solid red";
      positionWarning.current.style.display = "block";
    }
  };

  const handlingClickOpenDialog = () => {
    props.onClickOpenDialog();
  };

  const handlingClickDeleteAvatarSrc = () => {
    props.onDeleteAvatarSrc("");
  };

  return (
    <>
      <div className={Style["user-info"]}>
        {/* wrapper */}
        <Stack display={"flex"} direction={"row"}>
          {/* contains avatar and edit-button */}
          <Stack className={Style["avatar-button-wrapper"]}>
            <div
              onClick={handlingClickOpenDialog}
              className={Style["avatar-wrapper"]}
            >
              {/* Avatar */}
              {props.avatarSrc ? (
                <img
                  src={props.avatarSrc}
                  alt=""
                  className={Style["preview-img"]}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  className={Style["profile-img"]}
                  viewBox="0 0 532 532"
                >
                  <path
                    fill="#a0616a"
                    d="M297.05536 387.22083L309.71625 308.09024 224.2552 273.27277 211.59431 393.55127 297.05536 387.22083z"
                  ></path>
                  <path
                    fill="#c4c4c4"
                    d="M382.947 504.165a263.465 263.465 0 01-22.404 9.671 265.153 265.153 0 01-46.917 12.97 270.607 270.607 0 01-47.966 4.276c-21.789 0-43.452-2.613-64.402-7.785a262.276 262.276 0 01-24.612-7.337c-.852-.307-1.719-.614-2.571-.923a264.754 264.754 0 01-29.56-12.8c-1.286-.643-2.571-1.301-3.857-2a124.952 124.952 0 01-4.263-2.292 233.075 233.075 0 01-5.423-3.075 260.25 260.25 0 01-17.651-11.194l-.378-.251c-.335-.238-.67-.462-.992-.7.21-1.103.406-2.11.587-3.005.699-3.507 1.16-5.436 1.16-5.436l38.266-79.049 10.664-22.026 5.2-2.139 39.272-16.142h95.988l30.286 12.523s.154.573.461 1.677c3.019 10.832 20.629 72.326 47.952 132.493.377.838.769 1.69 1.16 2.544z"
                  ></path>
                  <circle
                    cx="275.459"
                    cy="246.378"
                    r="87.15"
                    fill="#a0616a"
                  ></circle>
                  <path
                    fill="#c4c4c4"
                    d="M167.98 370.32l-.15.75-26.57 126.33-.23 1.1-.37 1.74c-1.43-.73-2.84-1.5-4.26-2.29-1.82-1-3.62-2.03-5.43-3.08-6.03-3.49-11.97-7.27-17.65-11.19l-.38-.26c-.33-.23-.67-.46-.99-.69a269.57 269.57 0 01-12.7-9.45c-.03-.02-.05-.04-.08-.07a267.404 267.404 0 01-21.26-19.12c-4.38-4.38-8.59-8.89-12.62-13.52l.61-2.56.06-.26.76-3.26c6.76-28.55 29.63-50.46 58.44-55.98l38.28-7.33 4.54-.86zM439.396 467.225a267.864 267.864 0 01-36.128 25.927c-1.244.755-2.516 1.494-3.787 2.236a267.528 267.528 0 01-16.534 8.777 263.465 263.465 0 01-22.404 9.671l-.587-2.768-30.006-142.681 3.885.741 38.937 7.463c28.805 5.52 51.684 27.435 58.434 55.988l7.45 31.544.74 3.102z"
                  ></path>
                  <path
                    fill="#2f2e41"
                    d="M375.82 269.674c-2.265 8.442-13.656 46.164-42.824 54.102-5.73 1.565-19.398 3.368-15.778 0 .824-.769 1.62-1.524 2.417-2.265 31.656-29.768 44.57-47.965 38.672-88.356-3.746-25.716-46.4-49.07-70.397-51.39-10.12-.978-23.033 2.445-31.558 11.265-14.074 14.534-11.754 59.147-19.553 85.352-2.096 7.015-4.905 12.718-8.944 16.17-2.516 2.152-4.123-.587-5.311-5.074-2.53-9.532-3.187-26.987-6.779-22.054-10.384 14.298-.489 33.249 2.502 40.559a116.685 116.685 0 001.873 4.305v.013c.363.782.74 1.566 1.104 2.307v.013c9.979 20.349 21.97 27.63 32.536 40.307 4.151 4.961 8.078 10.733 11.586 18.449a82.279 82.279 0 015.325 15.806c6.052 26.136-1.132 49.881-3.075 56.338-4.067 13.446-11.055 36.547-31.557 49.587-25.745 16.38-49.238 1.943-60.475 17.498-.14.182-.266.363-.391.545a19.19 19.19 0 00-1.118 1.886 264.754 264.754 0 01-29.56-12.8c-1.286-.644-2.571-1.301-3.857-2a124.952 124.952 0 01-4.263-2.292c-.056-1.09-.112-2.18-.154-3.284-.824-18.91.42-39.692 5.13-60.419 3.019-13.235 6.01-26.36 10.593-39.007 2.992-8.245 6.653-16.296 11.475-24.053a109.031 109.031 0 0114.004-18.1c12.215-12.76 23.075-18.083 24.794-31.557 2.46-19.23-17.568-25.016-24.794-54.101-4.933-19.888-10.09-48.552-5.087-67.868 4.724-18.252 8.833-34.087 22.543-49.6 3.298-3.719 30.37-29.574 61.732-33.823 14.451-1.942 27.338 16.562 44.808 20.545 20.083 4.57 31.585 7.184 42.822 15.779 18.994 14.507 24.346 36.198 29.308 56.352 3.885 15.765 8.917 36.156 2.25 60.865z"
                  ></path>
                  <path
                    fill="#3f3d56"
                    d="M454.09 77.91C403.85 27.67 337.05 0 266 0S128.15 27.67 77.91 77.91C27.67 128.15 0 194.95 0 266c0 64.85 23.05 126.16 65.29 174.57 4.03 4.63 8.24 9.14 12.62 13.52 6.79 6.79 13.89 13.18 21.26 19.12.03.03.05.05.08.07C146.36 511.33 204.59 532 266 532c71.05 0 137.85-27.67 188.09-77.91C504.33 403.85 532 337.05 532 266s-27.67-137.85-77.91-188.09zM438.94 465.3a264.103 264.103 0 01-56.56 37.63 260.53 260.53 0 01-22.1 9.67C330.99 523.84 299.2 530 266 530c-32.04 0-62.76-5.74-91.19-16.24-11.67-4.3-22.95-9.41-33.78-15.26a262.358 262.358 0 01-28.66-17.93 265.19 265.19 0 01-46.47-42.56C26.09 391.77 2 331.65 2 266 2 120.43 120.43 2 266 2s264 118.43 264 264c0 79.48-35.3 150.87-91.06 199.3z"
                  ></path>
                </svg>
              )}
            </div>
            {/* Edit-button */}
            <div style={{ display: "flex" }}>
              <div
                onClick={handlingClickOpenDialog}
                className={Style["edit-button-wrapper"]}
              >
                <span className={Style["edit-button"]}>
                  <EditIcon />
                </span>
              </div>
              {/* Delete Button */}
              {props.avatarSrc != "https://i.imgur.com/IY0fVMm.png" && (
                <div
                  onClick={handlingClickDeleteAvatarSrc}
                  className={Style["edit-button-wrapper"]}
                >
                  <span className={Style["edit-button"]}>
                    <DeleteIcon />
                  </span>
                </div>
              )}
            </div>

            <ImageDialog
              onChangeAvatarSrc={props.onChangeAvatarSrc}
              isOpenDialog={props.isOpenDialog}
              handlingCloseDialog={props.handlingCloseDialog}
            />
          </Stack>
          {/* Contains Information Form */}
          <Stack flexBasis={"100%"} paddingLeft={"15px"}>
            <div className={Style["input-field"]}>
              {/* Họ */}
              <div className={Style["input-area"]}>
                <div className={Style["input-label"]}>
                  <span className={Style["required-icon"]}>*</span> Họ
                </div>
                <div className={Style["position-relative"]}>
                  <input
                    ref={inputSurnameLocator}
                    defaultValue={props.surName}
                    onChange={handlingChangeSurName}
                    className={Style["input"]}
                  ></input>
                </div>
                <div ref={surnameWarning} className={Style["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
              {/* Tên */}
              <div className={Style["input-area"]}>
                <div className={Style["input-label"]}>
                  <span className={Style["required-icon"]}>*</span> Tên
                </div>
                <div className={Style["position-relative"]}>
                  <input
                    defaultValue={props.lastName}
                    ref={inputLastNameLocator}
                    onChange={handlingChangeLastNAme}
                    className={Style["input"]}
                  ></input>
                </div>
                <div ref={lastNameWarning} className={Style["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
              {/* Chức danh */}
              <div className={Style["input-area"]}>
                <div className={Style["input-label"]}>
                  <span className={Style["required-icon"]}>*</span> Chức danh
                </div>
                <div className={Style["position-relative"]}>
                  <input
                    defaultValue={props.position}
                    ref={inputPositionLocator}
                    onChange={handlingChangePosition}
                    className={Style["input"]}
                  ></input>
                </div>
                <div ref={positionWarning} className={Style["warning-label"]}>
                  Thông tin không hợp lệ
                </div>
              </div>
            </div>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default memo(OverviewBlock);

const options = [
  "Thực tập sinh/ Sinh viên",
  "Mới tốt nghiệp",
  "Nhân viên",
  "Trưởng phòng",
  "Giám đốc và cấp cao hơn",
];
