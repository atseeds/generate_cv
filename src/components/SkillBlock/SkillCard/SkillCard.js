import React, { useEffect } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PhotoIcon from "@mui/icons-material/Photo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";
import Styles from "./SkillCardStyle.module.css";

function SkillCard(props) {
  const deleteButtonLocator = React.useRef();

  useEffect(() => {
    if (props.isEdit && props.skillEditKey == props.skillKey) {
      deleteButtonLocator.current.style.display = "none";
    } else {
      deleteButtonLocator.current.style.display = "block";
    }
  }, [props.isEdit, props.skillEditKey, props.skillKey]);

  const handlingDeleteClick = () => {
    props.removeSkill(props.skillKey);
    props.onClickDelete();
  };
  const handlingEditClick = () => {
    props.inputLocator.current.value = props.skillName;
    props.inputLocator.current.focus();
    deleteButtonLocator.current.hidden = true;
    props.onUpdateLevel(props.skillRate);
    props.changeSkillName(props.skillName);
    props.getSkillEditKey(props.skillKey);
    props.onChangeEdit();
  };

  return (
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
            <div className={Styles["task-content"]}>{props.skillName}</div>
            <Rating name="read-only" value={props.skillRate} readOnly />
          </div>
        </div>
        <div className={Styles["option-button-wrapper"]}>
          <div>
            <button
              key={"edit-btn"}
              className={Styles["option-button"]}
              onClick={handlingEditClick}
            >
              <EditIcon />
            </button>
          </div>
          <div ref={deleteButtonLocator}>
            <button
              key={"del-btn"}
              className={Styles["option-button"]}
              onClick={handlingDeleteClick}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
