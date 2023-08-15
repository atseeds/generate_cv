import React, { useEffect, useRef } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PhotoIcon from "@mui/icons-material/Photo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";
import Styles from "./LanguageCardStyles.module.css";

function LanguageCard(props) {
  const handlingClickDelete = () => {
    props.onDelete(props.language.id);
  };

  return (
    <>
      <>
        <div className={Styles["skill-card"]}>
          <div className={Styles["drag-button-block"]}>
            <div className={Styles["drag-button-wrapper"]}>
              <DragHandleIcon className="drag-button" />
            </div>
          </div>
          <div className={Styles["task-icon-block"]}>
            <div className={Styles["task-icon-wrapper"]}>
              <PhotoIcon
                style={{ padding: "12px" }}
                className={Styles["task-icon"]}
              />
            </div>
          </div>
          <div className={Styles["task-content-block"]}>
            <div className={Styles["task-content-wrapper"]}>
              <div className={Styles["task-content"]}>
                {props.language.name}
              </div>
              <Rating name="read-only" value={props.language.rate} readOnly />
            </div>
          </div>
          <div className={Styles["option-button-wrapper"]}>
            <div>
              <button
                onClick={handlingClickDelete}
                key={"del-btn"}
                className={Styles["option-button"]}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default LanguageCard;
