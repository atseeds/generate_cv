import React from "react";
import Styles from "./TemplateDownloadStyles.module.css";

function TemplateDownload05(props) {
  return (
    <>
      <div className={Styles["cv-container"]} ref={props.cvRef}>
        <div className={Styles["left-side-container"]}>
          <div className={Styles["left-side-top-background"]}></div>
          <div className={Styles["avatar-wrapper"]}>
            <img className={Styles["avatar"]} src={props.avatarSrc} alt="" />
          </div>
          <div
            className={Styles["left-side-heading-container"]}
            style={{ marginTop: "66px" }}
          >
            MY CONTACT
          </div>
          <div className={Styles["my-contact-container"]}>
            <div className={Styles["my-contact-mail-container"]}>
              <img
                className={Styles["my-contact-mail-icon"]}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVR4nO2czWsdVRiHn+j1o801KlKRIoXWRlCLqS0IbgqCW5duXbrtok2C2oULF12Elixa8A+oCYIraW2MINhFQRAExRgQg6W0qVJRkxYtTUcOfcd8kJl7586ZOefO/T3wbsLNOed9fzPnvHO+QAghhBBCCCGEEEIIIYQQojPPAxPAPLAArAJJQ23VfHS+jgOjIR+Ql4DPIghKEticGIfqDHwLmAbWInA+icRcLE5bbCrlCVM8tMNJpDYHPF5V8B8ELkTgZBK5fVHVmzAdgXNJn9gp38E/1KHPvw68C4wBwzSXYfPxPWA5Jx4uVgd9VpzX73/c8KBn0QZmcuJyEY95flYl54AhBpehDiLs91HJRE63456CQaed0x0dr7L7cX2+uM/7OWlpaRYzCn/ZR+ENYSwjRj/5KHwlo3B1P+u0M2LkYlearAFG1BQnCRCpAB8CIz4q6HNGLBa1C+DsJjAJPMrg8RDwTocv4soFSO2KNcZN2A3Cx9dbwM9dxqY0SQH7wRrXVN4Avi0Yk9IkPdiXwGGaw4ESq3+lSXq0e8AnvuZDArEH+Kjk6l9pkpJ2x5x4hv7hKeAk8I8H/0uTVbDrD78ruKPgZOSp67BldX8W8OtHG/dqF8DxgFX+S4EG/25OPkI8tCyLu1bAj6tbMr8gAqQ8bI35rYADS8DbEawnvJkz4bid/WEP0I4t5QQVIOVJ62ZuF3DoG+B16uc14FKBdv5rY9mujPKiECDlWWvs3QIOzvteR83gBcvOum3Xmv1+b4dyoxKgrLP78E/VD0WUAmx83b/u4XV/2kP76+oWoxYgxaWu3xcIxN/AB9sMeN3gEoOjNmh2W9+iZXW9JAZ9IUDZlK/VRflparzUQ2rsROuVvhEgZWcPHz0LHSb7Qn4c9p0AZT77LwNH/i8BXgW+Cjw90rcCpDxnm5zudRlE97tPzYr8z4zV5Zu+F8DH1G/IKfLGCFBm8SPkIlHjBOhl+W+j/VrzMmkjBSi6AB5yo0CjBdi4A23SPtC2tueWZVPuGFUIBkKAlN3AWXvanZ2xv4VkoASIEQkQGAkQGAkQGAkQGAkQGAkQGAkQGAkQGAkQGAnQVAG2m/hypmOq64xkxOgvPKCD2p05mLOJoLKrCtyVLeI+J6q8qmA8o3C3OKJuCB4DbmTE6JgPAUZzBpiZCLaXh8T5PpsTH2+7L+Y6iNAe0Cd/Nicun/seZPIOqi3blS2vNFyMtvl4IqfbSSxW3m+TOZ1ToYxNMZiiAtz2jvMKNsGurcQuJc0bDwbdLtZxCrRl92Lq6mI29flTdd+V8WLB40dNtfmazrZlst9uB5yzQ8tZV5w1wVbMxzn7yKpil7UQQgghhBBCCCGEEEIIIWgW/wHfAo17hXJZlAAAAABJRU5ErkJggg=="
                alt=""
              />
              <span>{props.email}</span>
            </div>
            <div className={Styles["my-contact-mail-container"]}>
              <img
                className={Styles["my-contact-mail-icon"]}
                src="data:image/png;base64,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"
                alt=""
              />
              <span>
                {props.dialingCode}
                {props.phoneNumb}
              </span>
            </div>
            <div className={Styles["my-contact-mail-container"]}>
              <img
                className={Styles["my-contact-mail-icon"]}
                src="data:image/png;base64,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"
                alt=""
              />
              <span>{props.address}</span>
            </div>
          </div>
          <div
            className={Styles["left-side-heading-container"]}
            style={{ marginTop: "5px", width: "45px" }}
          >
            SKILLS
          </div>
          <div
            className={Styles["my-contact-container"]}
            style={{ paddingLeft: "18px" }}
          >
            {props.skillList &&
              props.skillList.map((skill, index) => {
                return (
                  <>
                    <div
                      className={Styles["skill-item-container"]}
                      key={"skill" + index}
                    >
                      <div className={Styles["skill-title-wrapper"]}>
                        <li>{skill.name}</li>
                      </div>
                      <div className={Styles["skill-progress-wrapper"]}>
                        <div className={Styles["skill-progress-max"]}>
                          <div
                            className={Styles["skill-progress"]}
                            style={{
                              height: "100%",
                              width: skill.rate * 20 + "%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div
            className={Styles["left-side-heading-container"]}
            style={{ marginTop: "5px", width: "76px" }}
          >
            LANGUAGES
          </div>
          <div
            className={Styles["my-contact-container"]}
            style={{ paddingLeft: "18px" }}
          >
            {props.languages &&
              props.languages.map((language, index) => {
                return (
                  <>
                    <div
                      className={Styles["skill-item-container"]}
                      key={"lang" + index}
                    >
                      <div className={Styles["skill-title-wrapper"]}>
                        <li>{language.name}</li>
                      </div>
                      <div className={Styles["skill-progress-wrapper"]}>
                        <div className={Styles["skill-progress-max"]}>
                          <div
                            className={Styles["skill-progress"]}
                            style={{
                              height: "100%",
                              width: language.rate * 20 + "%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div
            className={Styles["left-side-heading-container"]}
            style={{ marginTop: "5px", width: "75px" }}
          >
            EDUCATION
          </div>
          <div
            className={Styles["my-contact-container"]}
            style={{ marginBottom: "10px" }}
          >
            {props.educations &&
              props.educations.map((edu, index) => {
                return (
                  <React.Fragment key={"education" + index}>
                    <div className={Styles["education-item-container"]}>
                      <div className={Styles["education-school-wrapper"]}>
                        <div className={Styles["dot"]}></div>
                        <span>{edu.school}</span>
                      </div>
                      <div className={Styles["education-major-wrapper"]}>
                        {edu.major} | {edu.fromMonth} - {edu.toMonth}
                      </div>
                      <div className={Styles["education-desc-wrapper"]}>
                        {edu.desc}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
        <div className={Styles["right-side-container"]}>
          <div className={Styles["right-side-top-background"]}>
            <div className={Styles["full-name-wrapper"]}>
              {" "}
              {props.surName} {props.lastName}
            </div>
            <div className={Styles["position-wrapper"]}>{props.position}</div>
          </div>
          <div
            className={Styles["right-side-heading-container"]}
            style={{ width: "69px" }}
          >
            ABOUT ME
          </div>
          <div className={Styles["about-me-desct-wrapper"]}>
            {props.introduction}
          </div>
          <div
            className={Styles["right-side-heading-container"]}
            style={{ width: "85px" }}
          >
            EXPERIENCES
          </div>
          <div className={Styles["exp-container"]}>
            {props.projects &&
              props.projects.map((project, index) => {
                return (
                  <React.Fragment key={"project" + index}>
                    <div className={Styles["exp-item"]}>
                      <div className={Styles["exp-title"]}>
                        {project.name} | {project.position}
                      </div>
                      <div className={Styles["exp-duration"]}>
                        {project.fromMonth} - {project.toMonth}
                      </div>
                      <div className={Styles["exp-desc"]}>{project.desc}</div>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <div
            className={Styles["right-side-heading-container"]}
            style={{ width: "74px" }}
          >
            REFERENCE
          </div>
          <div
            className={Styles["right-side-ref-container"]}
            style={{ marginBottom: "10px" }}
          >
            <div className={Styles["ref-name-wrapper"]}>
              {props.reference.name}
            </div>
            <div className={Styles["ref-company-and-position-wrapper"]}>
              {props.reference.company} | {props.reference.position}
            </div>
            <div className={Styles["ref-phone-container"]}>
              <span style={{ marginRight: "5px" }}>Phone:</span>
              <span>
                {props.reference.dialingCode}
                {props.reference.phone}
              </span>
            </div>
            <div className={Styles["ref-phone-container"]}>
              <span style={{ marginRight: "10px" }}>Email:</span>
              <span>{props.reference.email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateDownload05;
