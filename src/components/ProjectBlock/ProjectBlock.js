import React, { useState, useRef } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Styles from "./ProjectBlockStyle.module.css";
import { DatePicker } from "@mui/x-date-pickers";
import ProjectCard from "./ProjectCard/ProjectCard";
import { countCharacters } from "../../utils/method/ValidationUtils";
import dayjs from "dayjs";
const sxStyle = {
  width: "100%",
  "& .MuiInputBase-input": {
    height: "10px",
  },
};
function ProjectBlock(props) {
  const maxCount = 3000;
  const [count, setCount] = useState(0);
  // State for check from and to Month Value Change or not?
  const [fromMonthChange, setFromMonthChange] = useState(false);
  const [toMonthChange, setToMonthChange] = useState(false);
  // useRef Hooks for input elements
  const nameInputLocator = useRef();
  const positionInputLocator = useRef();
  const fromMonthInputLocator = useRef();
  const toMonthInputLocator = useRef();
  const descInputLocator = useRef();
  const warningBlock = useRef();

  //Store the Add or Edit mode
  const [isEdit, setIsEdit] = useState(false);
  // Store the temp key - this temp key is auto generated +1 after Adding project
  const [projectKey, setProjectlKey] = useState(0);
  // Store key for editting project
  const [projectEditKey, setProjectEditKey] = useState(-1);
  //Store the project value
  const [project, setProject] = useState({
    key: 0,
    name: "",
    position: "",
    fromMonth: "",
    toMonth: "",
    desc: "",
  });

  //Callback handling event function
  const handlingChangeProjectKey = (key) => {
    let tempProject = { ...project, name: key };
    setProject(tempProject);
  };

  const handlingUpdateProjectName = (value) => {
    let tempProject = { ...project, name: value };
    setProject(tempProject);
  };

  const handlingUpdateProjectPosition = (value) => {
    let tempProject = { ...project, position: value };
    setProject(tempProject);
  };

  const handlingUpdateProjectDescription = (value) => {
    let tempProject = { ...project, desc: value };
    setProject(tempProject);
  };

  const handlingChangeNameInput = (e) => {
    let tempProject = { ...project, name: e.target.value };
    setProject(tempProject);
  };
  const handlingChangePosition = (e) => {
    let tempProject = { ...project, position: e.target.value };
    setProject(tempProject);
  };
  const handlingChangeFromMonth = (value) => {
    let tempProject = { ...project, fromMonth: value };
    setProject(tempProject);
    setFromMonthChange(true);
  };
  const handlingChangeToMonth = (value) => {
    let tempProject = { ...project, toMonth: value };
    setProject(tempProject);
    setToMonthChange(true);
  };
  const handlingChangeDescription = (e) => {
    let temp = countCharacters(e.target.value);
    if (temp <= maxCount) {
      setCount(temp);
      let tempProject = { ...project, desc: e.target.value };
      setProject(tempProject);
    }
  };

  // Add Project
  const handlingClickAdd = () => {
    if (
      nameInputLocator.current.value &&
      positionInputLocator.current.value &&
      descInputLocator.current.value &&
      fromMonthChange &&
      toMonthChange &&
      props.projects.length < 5
    ) {
      // Add project to the List
      let tempProject = { ...project, key: projectKey };
      setProjectlKey(projectKey + 1);
      props.onUpdateProjectList(tempProject);
      // Reset Input Elements
      nameInputLocator.current.value = "";
      nameInputLocator.current.focus();
      positionInputLocator.current.value = "";
      descInputLocator.current.value = "";
      warningBlock.current.style.display = "none";
      nameInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      positionInputLocator.current.style.border =
        "1px solid rgb(196, 196, 196)";
      descInputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      props.onClickAdd();
    } else {
      warningBlock.current.style.display = "block";
      if (nameInputLocator.current.value == "") {
        nameInputLocator.current.style.border = "1px solid red";
      }
      if (positionInputLocator.current.value == "") {
        positionInputLocator.current.style.border = "1px solid red";
      }
      if (descInputLocator.current.value == "") {
        descInputLocator.current.style.border = "1px solid red";
      }
    }
  };
  // Edit project
  const handlingClickSave = () => {
    // Update the project List
    console.log("test: " + project);
    props.onEditProjectList(project);
    // Reset Input Elements
    nameInputLocator.current.value = "";
    nameInputLocator.current.focus();
    positionInputLocator.current.value = "";
    descInputLocator.current.value = "";
    // cancel edit mode
    setIsEdit(false);
    props.onClickSave();
  };
  // Cancel editting
  const handlingClickExit = () => {
    // Reset Input Elements
    nameInputLocator.current.value = "";
    nameInputLocator.current.focus();
    positionInputLocator.current.value = "";
    descInputLocator.current.value = "";
    // cancel edit mode
    setIsEdit(false);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={Styles["project-block-wrapper"]}>
          <div className={Styles["content-wrapper"]}>
            {/* Heading */}
            <h2 className={Styles["custom-heading"]}>WORK EXPERIENCE</h2>
            <div className={Styles["short-info"]}>
              Provide a detailed description of your Project - achievements and
              work plan
            </div>
            <div className={Styles["form-wrapper"]}>
              <div className={Styles["row"]}>
                {/* Project Cards */}
                {props.projects &&
                  props.projects.map((project, index) => {
                    return (
                      <React.Fragment key={"projectCard" + project.key}>
                        <ProjectCard
                          project={project}
                          onDeleteProject={props.onDeleteProjectList}
                          setIsEdit={setIsEdit}
                          isEdit={isEdit}
                          projectEditKey={projectEditKey}
                          nameInputLocator={nameInputLocator}
                          positionInputLocator={positionInputLocator}
                          descInputLocator={descInputLocator}
                          onChangeProjectKey={handlingChangeProjectKey}
                          onChangeProjectName={handlingUpdateProjectName}
                          onChangeProjectPosition={
                            handlingUpdateProjectPosition
                          }
                          onChangeProjectDescription={
                            handlingUpdateProjectDescription
                          }
                          onClickDelete={props.onClickDelete}
                        />
                      </React.Fragment>
                    );
                  })}
              </div>
              <div className={Styles["row"]}>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Project
                    name
                  </div>
                  <div className={Styles["position-relative"]}>
                    <input
                      placeholder="Projects name"
                      ref={nameInputLocator}
                      onChange={handlingChangeNameInput}
                      className={Styles["input"]}
                    ></input>
                  </div>
                </div>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span> Your
                    position
                  </div>
                  <div className={Styles["position-relative"]}>
                    <input
                      placeholder="Your position"
                      ref={positionInputLocator}
                      onChange={handlingChangePosition}
                      className={Styles["input"]}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={Styles["row"]}>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}> </span> From
                    month
                  </div>
                  <div className={Styles["position-relative"]}>
                    <DatePicker
                      ref={fromMonthInputLocator}
                      disableFuture
                      sx={sxStyle}
                      onChange={(newValue) => {
                        const formattedDate = dayjs(newValue).format("MM-YYYY");
                        handlingChangeFromMonth(formattedDate);
                      }}
                    />
                  </div>
                </div>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}> </span> To month
                  </div>
                  <div className={Styles["position-relative"]}>
                    <DatePicker
                      disableFuture
                      ref={toMonthInputLocator}
                      sx={sxStyle}
                      onChange={(newValue) => {
                        const formattedDate = dayjs(newValue).format("MM-YYYY");
                        handlingChangeToMonth(formattedDate);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles["row"]}>
                <div className={Styles["col"]}>
                  <div className={Styles["input-label"]}>
                    <span className={Styles["required-icon"]}>*</span>{" "}
                    Description
                  </div>
                  <div className={Styles["position-relative"]}>
                    <textarea
                      ref={descInputLocator}
                      onChange={handlingChangeDescription}
                      className={Styles["text-aria"]}
                    ></textarea>
                  </div>
                  <div className={Styles["count-text"]}>
                    {count}
                    {"/"}
                    {maxCount}
                  </div>
                </div>
              </div>
              <div className={Styles["button-wrapper"]}>
                <div ref={warningBlock} className={Styles["warning-label"]}>
                  Please fill in all the required information
                </div>
                <div className={Styles["button-card"]}>
                  {isEdit && (
                    <button
                      onClick={handlingClickExit}
                      className={Styles["btn-huy"]}
                    >
                      Cancel
                    </button>
                  )}
                  {isEdit ? (
                    <button
                      className={Styles["btn-luu"]}
                      onClick={handlingClickSave}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className={Styles["btn-luu"]}
                      onClick={handlingClickAdd}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </>
  );
}

export default ProjectBlock;
