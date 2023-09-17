import React from "react";
import Styles from "./TemplateDownload02Styles.module.css";

function TemplateDownload02(props) {
  return (
    <div className={Styles["cv-container"]} ref={props.cvRef}>
      <div className={Styles["avatar-container"]}>
        <img className={Styles["avatar"]} src={props.avatarSrc} alt="" />
      </div>
      <div className={Styles["introduction-container"]}>
        <div className={Styles["introduction-wrapper"]}>
          <div className={Styles["first-name"]}>
            <div className={Styles["first"]}>
              <span style={{ marginRight: "3px" }}>{props.surName}</span>
            </div>
            <div className={Styles["last"]}>{props.lastName}</div>
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
              <img
                className={Styles["mail-icon"]}
                src="data:image/png;base64,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tpxju7L6e9WXVk+v7rFsOcCYBgC2263Vi6pfr15cvWHZci7pmuqzGhb8p+dofthaGgDYLX/e0Ai8uPrthosNLemRDd/pf9bp7WHLlgMclgYAdtsNDTfH+YPRn2+q3rPh97m64aj9T6geN/rzyg2/DzATDQDsp5urN1dvO729veHUw9sbmobbq/edfu6VDXcxvKrhqPwrqo9smOYfWj28us+MtQMz0AAAwAq5FwAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFghDQAArJAGAABWSAMAACukAQCAFdIAAMAKaQAAYIU0AACwQhoAAFihg+qupYsAAGZ110F189JVAACzev9BddPSVQAAs7rxoLpx6SoAgFlpAABghW48qN6zdBUAwKzec1D96dJVAACzesNB9fqlqwAAZvWGg+q6pasAAGb1egkAAKzP609Vl1Xvqq5auBgAYHp/VT3ooLqjetnCxQAA83hJdefB6C8AwP57SX3oboAaAABYh2urTp3+y6nq+urBi5UDAEztz6uH14cSgLuq/7ZYOQDAHH7pzA8Ho1/+/AKFAADz+YUzP5w664HXVB8/by0AwAz+sHrcmb8cnPXg8+etBQCYyd2S/rMTgAdVb6zuM1s5AMDUbqw+utEdgM9OAN5Z/fScFQEAk/vxRot/nZsAVD2s4RbBHzZHRQDApG6pHtVwuv8HnZ0AVL21et4MBQEA0/vpzlr86/wJQNVHVX9S3W/KigCASd1QPaZ6x9kPXHaBF7yv4SZBnz1hUQDAtL6jC1zu/0IJQNXl1e9XnzBFRQDApF5TPaG6/XwPnu8YgDNur/5pw2WCAYDdcWf1TV1g8a8LfwVwxluqB1RP2mBRAMC0ntMlDui/2FcAZ9yjeln1qRsoCACY1iuqT69uu9iTDtMA1HDrwFdVDzxhUQDAdN5TPb5686WeeLFjAMbeUn1dw3cKAMD2uaP6yg6x+NeljwEYe33DpYI//xhFAQDT+tbqFw/75KM0ADWcFniqeuoRXwcATOfZ1XOP8oKjNgBVL60+svqkY7wWANisn6i+86gvOk4DUPVrDZcJfvIxXw8AnNyPNUT/R75mz3EbgKrfaLjG8NM7/NkEAMDJ3VX9QPVdHfOCfSdpAGo41/DPq8/r8GcUAADHd3v1jdW/O8lONjW5P616fvWQDe0PADjX26pnVr910h1tamp/ScNNg/7vhvYHANzdSxoOwD/x4l8n/wpg7ObqBdWtDZcg3OS+AWCtbq2+t/qG6sZN7XSqg/c+pvrR6hkT7R8A1uCl1T+uXrfpHU914N6fVp9b/d0OeUlCAOCDrq++puEYu40v/jXP6Xv3bYgtnlU9dIb3A4BddX3DFf1+snr/lG805/n796y+rPqe6m/O+L4AsO3eUv1w9VPVB+Z4wyUu4HN59TkNdyz6wureC9QAAEu7pfqf1c9XL2o4v382S1/B7/7VF1VfUj2lumLZcgBgUjc2nMb336sXVu9dqpClG4Cxy6snNhzw8NTqsdWDlywIAE7o7dVrq5dV11avbOZJ/0K2qQE4n6sajhe4pnp0wwGF96+uPP3zvZYrDQC6pbqpel/DNH9T9cbquuoNLTjhAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzl/wMMVyje2TTycQAAAABJRU5ErkJggg=="
                alt=""
              ></img>
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
                  <div className={Styles["experience"]} key={"project" + index}>
                    <div className={Styles["exp-company-name"]}>
                      {project.name} | {project.fromMonth}- {project.toMonth}
                    </div>
                    <div className={Styles["exp-position"]}>
                      {project.position}
                    </div>
                    <div className={Styles["exp-desc"]}>
                      <ul style={{ paddingLeft: "20px", margin: "0" }}>
                        <li style={{ wordWrap: "break-word", width: "200px" }}>
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
                    <div className={Styles["exp-desc"]}>
                      <ul style={{ paddingLeft: "20px", margin: "0" }}>
                        <li style={{ wordWrap: "break-word" }}>
                          {education.desc}
                        </li>
                      </ul>
                    </div>
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
  );
}

export default TemplateDownload02;
