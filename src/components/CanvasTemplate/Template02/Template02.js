import React from "react";
import Styles from "./Template02Styles.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Language } from "@mui/icons-material";

function Template02(props) {
  return (
    <div>
      <div className={Styles["cv-container"]}>
        <div className={Styles["avatar-container"]}>
          <img className={Styles["avatar"]} src={props.avatarSrc} alt="" />
        </div>
        <div className={Styles["introduction-container"]}>
          <div className={Styles["introduction-wrapper"]}>
            <div className={Styles["first-name"]}>
              <div className={Styles["name"]}>
                <div className={Styles["first"]}>{props.surName}</div>
                <div className={Styles["last"]}>{props.lastName}</div>
              </div>
            </div>
            <div className={Styles["last-name"]}>{props.position}</div>
            <div className={Styles["position"]}>{props.address}</div>
            <div className={Styles["position"]}>{props.nation}</div>
            <div className={Styles["position"]}>{props.birthDay}</div>
            <div className={Styles["contact-wrapper"]}>
              <div className={Styles["phone-wrapper"]}>
                {/* phone icon */}
                <img
                  className={Styles["icon"]}
                  src="data:image/png;base64,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"
                  alt=""
                />
                {props.dialingCode}
                {props.phoneNumb}
              </div>
              <div className={Styles["mail-wrapper"]}>
                <EmailIcon
                  sx={{ fontSize: "15px" }}
                  style={{ marginRight: "4px" }}
                />{" "}
                {props.email}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["overview-container"]}>
          <div className={Styles["profile-container"]}>
            <div className={Styles["profile-title"]}>PROFILE</div>
            <div className={Styles["profile-desc"]}>{props.introduction}</div>
          </div>
          <div className={Styles["skill-container"]}>
            <div className={Styles["skill-title"]}>SKILL</div>
            <div className={Styles["profile-desc"]}>
              <ul className={Styles["ul"]}>
                {props.skillList &&
                  props.skillList.map((skill, index) => {
                    return (
                      <li className={Styles["li"]} key={"skill" + index}>
                        <div className={Styles["skill-card"]}>
                          <div className={Styles["skill-content"]}>
                            {skill.name}
                          </div>
                          <div className={Styles["skill-progress-max"]}>
                            <div
                              style={{
                                height: "100%",
                                width: skill.rate * 20 + "%",
                                backgroundColor: "#C5DFF8",
                              }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className={Styles["language-container"]}>
            <div className={Styles["language-title"]}>LANGUAGE</div>
            <div className={Styles["profile-desc"]}>
              <ul className={Styles["ul"]}>
                {props.languages &&
                  props.languages.map((language, index) => {
                    return (
                      <li className={Styles["li"]} key={"language" + index}>
                        <div className={Styles["skill-card"]}>
                          <div className={Styles["skill-content"]}>
                            {language.name}
                          </div>
                          <div className={Styles["skill-progress-max"]}>
                            <div
                              style={{
                                height: "100%",
                                width: language.rate * 20 + "%",
                                backgroundColor: "#C5DFF8",
                              }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles["exp-container"]}>
          <div className={Styles["exp-wrapper"]}>
            <div className={Styles["exp-title"]}>EXPERIENCES</div>
            <div className={Styles["experiences"]}>
              {/* EXP ITEM */}
              {props.projects &&
                props.projects.map((project, index) => {
                  return (
                    <div
                      className={Styles["experience"]}
                      key={"project" + index}
                    >
                      <div className={Styles["exp-company-name"]}>
                        {project.name} | {project.fromMonth}- {project.toMonth}
                      </div>
                      <div className={Styles["exp-position"]}>
                        {project.position}
                      </div>
                      <div className={Styles["exp-desc"]}>
                        <ul style={{ paddingLeft: "20px", margin: "0" }}>
                          <li style={{ wordWrap: "break-word" }}>
                            {project.desc}
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={Styles["exp-wrapper"]}>
            <div className={Styles["education-title"]}>EDUCATION</div>
            <div className={Styles["experiences"]}>
              {props.educations &&
                props.educations.map((education, index) => {
                  return (
                    <div
                      className={Styles["experience"]}
                      key={"education" + index}
                    >
                      <div className={Styles["exp-company-name"]}>
                        {education.major} | {education.fromMonth} -{" "}
                        {education.toMonth}
                      </div>
                      <div className={Styles["exp-position"]}>
                        {education.school}
                      </div>
                      {education.desc && (
                        <div className={Styles["exp-desc"]}>
                          <ul style={{ paddingLeft: "20px", margin: "0" }}>
                            <li style={{ wordWrap: "break-word" }}>
                              {education.desc}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={Styles["exp-wrapper"]}>
            <div className={Styles["education-title"]}>REFERENCE</div>
            <div className={Styles["experiences"]}>
              <div className={Styles["experience"]}>
                <div className={Styles["ref-name"]}>{props.reference.name}</div>
                <div className={Styles["ref-position"]}>
                  {props.reference.company} | {props.reference.position}
                </div>
                <div className={Styles["ref-contact-wrapper"]}>
                  <div className={Styles["ref-phone"]}>
                    <span style={{ marginRight: "6px" }}>Phone:</span>{" "}
                    {props.reference.dialingCode}
                    {props.reference.phone}
                  </div>
                  <div className={Styles["ref-email"]}>
                    <span style={{ marginRight: "9px" }}>Email:</span>{" "}
                    {props.reference.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template02;
