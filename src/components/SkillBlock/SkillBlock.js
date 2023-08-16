import React, { useEffect, useRef, useState } from "react";
import Styles from "./skillstyles.module.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import SkillCard from "./SkillCard/SkillCard";
import { Block } from "@mui/icons-material";

const sxStyle = {
  "& .MuiRating-root": {
    height: "42px",
  },
};

const labels = {
  1: "Terrible",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function SkillBlock(props) {
  // Store the value for Rating components
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const inputLocator = useRef();
  const warningBlock1 = useRef(); // Warning for not filled the form
  const warningBlock2 = useRef(); // Warning for add more than 5 skills

  // Store the Add or Edit mode
  const [isEdit, setIsEdit] = React.useState(false);
  // Store the temp key - this temp key is auto generated +1 after Adding skill
  const [skillKey, setSkillKey] = React.useState(0);
  // Store key for editting skill
  const [skillKeyEdit, setSkillKeyEdit] = React.useState(-1);
  //Store the skill value
  const [skill, setSkill] = React.useState({
    key: 0,
    name: "",
    rate: 0,
  });

  const updateLevel = (value) => {
    setValue(value);
  };

  const updateSkillKeyEdit = (value) => {
    setSkillKeyEdit(value);
  };

  const handlingChangeSkillName = (e) => {
    let tempValue = { ...skill, name: e.target.value, key: skillKey };
    setSkill(tempValue);
  };

  const handlingSetSkillName = (value) => {
    let tempValue = { ...skill, name: value, key: skillKey };
    setSkill(tempValue);
  };

  const handlingChangeSkillRate = (value) => {
    let tempValue = { ...skill, rate: value, key: skillKey };
    setSkill(tempValue);
  };

  const handlingClickAddButton = () => {
    if (
      inputLocator.current.value &&
      value != 0 &&
      props.skillList.length < 5
    ) {
      //Set the key for skill
      props.onUpdateSkillList(skill);
      setSkillKey(skillKey + 1);
      inputLocator.current.value = "";
      inputLocator.current.focus();
      setValue(0);
      setSkill({
        key: 0,
        name: "",
        rate: 0,
      });
      inputLocator.current.style.border = "1px solid rgb(196, 196, 196)";
      warningBlock1.current.style.display = "none";
      warningBlock2.current.style.display = "none";
      props.onClickAdd();
    } else if (props.skillList.length >= 5) {
      inputLocator.current.style.border = "1px solid red";
      warningBlock2.current.style.display = "block";
    } else {
      inputLocator.current.style.border = "1px solid red";
      warningBlock1.current.style.display = "block";
    }
  };

  const handlingClickSave = () => {
    props.onEditSkillItem(skillKeyEdit, skill.name, skill.rate);
    setIsEdit(false);
    setSkillKeyEdit(-1);
    inputLocator.current.value = "";
    inputLocator.current.focus();
    setValue(0);
    props.onClickSave();
  };

  const handlingClickExitButton = () => {
    inputLocator.current.value = "";
    inputLocator.current.focus();
    setValue(0);
    setIsEdit(false);
  };

  const handlingChangeEdit = () => {
    setIsEdit(true);
  };

  return (
    <>
      <div className={Styles["skill-block-wrapper"]}>
        <div className={Styles["content-wrapper"]}>
          {/* Heading */}
          <h2 className={Styles["custom-heading"]}>Skill</h2>
          <div className={Styles["form-wrapper"]}>
            <div className={Styles["row"]}>
              {/* Skill Card here */}
              {props.skillList &&
                props.skillList.map((skill, index) => {
                  return (
                    <React.Fragment key={"skill" + index}>
                      <SkillCard
                        skillName={skill.name}
                        skillRate={skill.rate}
                        removeSkill={props.onRemoveSkill}
                        skillKey={skill.key}
                        onChangeEdit={handlingChangeEdit}
                        isEdit={isEdit}
                        inputLocator={inputLocator}
                        onUpdateLevel={updateLevel}
                        getSkillEditKey={updateSkillKeyEdit}
                        skillEditKey={skillKeyEdit}
                        changeSkillName={handlingSetSkillName}
                        onClickDelete={props.onClickDelete}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
            <div className={Styles["row"]}>
              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Skill
                </div>
                <div className={Styles["position-relative"]}>
                  <input
                    placeholder="Enter your skill"
                    className={Styles["input"]}
                    ref={inputLocator}
                    onChange={handlingChangeSkillName}
                  ></input>
                </div>
              </div>

              <div className={Styles["col"]}>
                <div className={Styles["input-label"]}>
                  <span className={Styles["required-icon"]}>*</span> Proficiency
                  Level
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
              <div style={{ width: "100%" }}>
                <div ref={warningBlock1} className={Styles["warning-label"]}>
                  Please fill in all the required information
                </div>
                <div ref={warningBlock2} className={Styles["warning-label"]}>
                  You have reached the maximum limit
                </div>
              </div>
              <div className={Styles["button-card"]}>
                {isEdit && (
                  <button
                    className={Styles["btn-huy"]}
                    onClick={handlingClickExitButton}
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
                    onClick={handlingClickAddButton}
                  >
                    Add
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

export default SkillBlock;
