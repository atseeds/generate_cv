import React, { useEffect, useRef } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PhotoIcon from "@mui/icons-material/Photo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";
import Styles from "./EducationCardStyles.module.css";

function EducationCard(props) {
  // editButton ref
  const deleteButtonLocator = useRef();

  useEffect(() => {
    if (props.isEdit && props.isEditKey == props.education.id) {
      deleteButtonLocator.current.style.display = "none";
    } else {
      deleteButtonLocator.current.style.display = "block";
    }
  }, [props.isEdit, props.isEditKey, props.education.id]);

  const handlingClickDelete = () => {
    props.onDelete(props.education.id);
    props.onClickDelete();
  };

  const handlingClickEdit = () => {
    // set all the ref value
    props.majorRef.current.value = props.education.major;
    props.schoolRef.current.value = props.education.school;
    props.descRef.current.value = props.education.desc;
    // set the edit mode: one
    props.onEdit(true);
    // pass the key of the item to edit
    props.setIsEditKey(props.education.id);
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
                {props.education.major}
              </div>
              <div className={Styles["task-content-child"]}>
                {props.education.school}
              </div>
              <div className={Styles["task-content-child"]}>
                {props.education.fromMonth} - {props.education.toMonth}
              </div>
            </div>
          </div>
          <div className={Styles["option-button-wrapper"]}>
            <div onClick={handlingClickEdit}>
              <button key={"edit-btn"} className={Styles["option-button"]}>
                <EditIcon />
              </button>
            </div>
            <div>
              <button
                ref={deleteButtonLocator}
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

export default EducationCard;
