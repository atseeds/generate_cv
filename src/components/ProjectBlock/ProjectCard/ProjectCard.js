import React, { useEffect, useRef } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PhotoIcon from "@mui/icons-material/Photo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Styles from "./ProjectCardStyle.module.css";

function ProjectCard(props) {
  useEffect(() => {
    if (!props.isEdit) {
      deleteButtonLocator.current.hidden = false;
    }
  }, [props.isEdit]);
  // useRef hook for button elements
  const deleteButtonLocator = useRef();

  // Delete project callback
  const handlingClickDelete = () => {
    props.onDeleteProject(props.project.key);
    props.onClickDelete();
  };
  //   Edit project callback
  const handlingClickEdit = () => {
    deleteButtonLocator.current.hidden = true;
    // set the data fill the form
    props.nameInputLocator.current.value = props.project.name;
    props.positionInputLocator.current.value = props.project.position;
    props.descInputLocator.current.value = props.project.desc;
    // set data to the project
    props.onChangeProjectKey(props.project.key);
    props.onChangeProjectName(props.project.name);
    props.onChangeProjectPosition(props.project.position);
    props.onChangeProjectDescription(props.project.desc);
    // set edit mode
    props.setIsEdit(true);
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
          {/* Content of the card */}
          <div className={Styles["task-content-wrapper"]}>
            <div className={Styles["task-content"]}>{props.project.name}</div>
            <div className={Styles["task-content-child"]}>
              {props.project.position}
            </div>
            <div className={Styles["task-content-child"]}>
              {props.project.fromMonth} - {props.project.toMonth}
            </div>
          </div>
        </div>
        <div className={Styles["option-button-wrapper"]}>
          <div onClick={handlingClickEdit}>
            <button key={"edit-btn"} className={Styles["option-button"]}>
              <EditIcon />
            </button>
          </div>
          <div onClick={handlingClickDelete} ref={deleteButtonLocator}>
            <button key={"del-btn"} className={Styles["option-button"]}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
