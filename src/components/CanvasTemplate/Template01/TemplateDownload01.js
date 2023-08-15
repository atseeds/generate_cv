import React from "react";
import Styles from "./TemplateDownload01Styles.module.css";

function TemplateDownload01(props) {
  return (
    <div>
      <div className={Styles["container"]} ref={props.cvRef}>
        <div className={Styles["avatar"]}>
          <div className="avatar-container"></div>
          <img className={Styles["img"]} src={props.avatarSrc} alt="" />
        </div>
        <div className={Styles["name"]}>
          <h1 className={Styles["h1"]}>
            {props.surName} {props.lastName}
          </h1>
          <div className={Styles["specialize"]}>{props.position}</div>
          <ul className={Styles["contact"]}>
            {props.phoneNumb ? (
              <li className={Styles["li"]}>
                <span className={Styles["span"]}>P</span>
                {props.dialingCode}
                {props.phoneNumb}
              </li>
            ) : (
              <li className={Styles["li"]}>
                <span className={Styles["span"]}>P</span>

                {"Số điện thoại"}
              </li>
            )}

            <li className={Styles["li"]}>
              <span className={Styles["span"]}>E</span>
              {props.email}
            </li>
          </ul>
        </div>
        <div className={Styles["info"]}>
          <ul className={Styles.ul}>
            <li>{props.address}</li>
            <li>
              <b>{props.nation}</b>
            </li>
            <li>{props.birthDay}</li>
            {/* <li>AAAA University</li> */}
          </ul>
        </div>
        <div className={Styles["intro"]}>
          <h2 className={Styles.h2}>INTRODUCTION</h2>
          <div className={Styles["fs-sm"]}>{props.introduction}</div>
        </div>
        <div className={Styles["experience"]}>
          <h2 className={Styles.h2}>EXPERIENCE</h2>
          {/* Experience Item */}
          <div className={Styles["item"]}>
            <h4 className={Styles.h4}>{props.experience.exPosition}</h4>
            <div className={Styles["time"]}>
              <span className={Styles["duration"]}>
                {props.experience.fromMonth} - {props.experience.toMonth}
              </span>
              <br />
              <span> {props.experience.exCompany}</span>
            </div>
            <div className={Styles["des"]}> {props.experience.desc}</div>
          </div>
          <h2 className={Styles["skills"]}>SKILL</h2>
          <ul>
            {props.skillList &&
              props.skillList.map((skill, index) => {
                return (
                  <li className={Styles["skills-li"]} key={"skill" + index}>
                    <div className={Styles["skill-card"]}>
                      <div style={{ width: "100%" }}>{skill.name}</div>
                      {/* <progress
                        className={Styles["progress-custom"]}
                        value={skill.rate}
                        max={"5"}
                      ></progress> */}
                      <div className={Styles["progress-max"]}>
                        <div
                          style={{
                            height: "100%",
                            width: skill.rate * 20 + "%",
                            backgroundColor: "#413f42",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                );
              })}

            {/* <li className={Styles["skills-li"]}>CSS</li>
          <li className={Styles["skills-li"]}>Bootstrap</li>
          <li className={Styles["skills-li"]}>Javascript</li>
          <li className={Styles["skills-li"]}>PHP</li>
          <li className={Styles["skills-li"]}>MySql</li>
          <li className={Styles["skills-li"]}>Git</li>
          <li className={Styles["skills-li"]}>Laravel</li> */}
          </ul>
          <h2 className={Styles["skills"]}>LANGUAGE</h2>
          <ul>
            {props.languages &&
              props.languages.map((language, index) => {
                return (
                  <li key={"language" + index} className={Styles["skills-li"]}>
                    <div className={Styles["skill-card"]}>
                      <div style={{ width: "100%" }}>{language.name}</div>
                      {/* <progress
                    className={Styles["progress-custom"]}
                    value={props.languages.rate}
                    max={"5"}
                  ></progress> */}
                      <div className={Styles["progress-max"]}>
                        <div
                          style={{
                            height: "100%",
                            width: language.rate * 20 + "%",
                            backgroundColor: "#413f42",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          <h2 className={Styles["skills"]}>EDUCATION</h2>
          {/* Experience Item */}

          {props.educations &&
            props.educations.map((edu, index) => {
              return (
                <React.Fragment key={"education" + index}>
                  <div className={Styles["item"]}>
                    <h4 className={Styles.h4}>{edu.major}</h4>
                    <div className={Styles["time"]}>
                      <span className={Styles["duration"]}>{edu.school}</span>
                      <br />
                      <span>
                        {edu.fromMonth} - {edu.toMonth}
                      </span>
                    </div>
                    <div className={Styles["des"]}>{edu.desc} </div>
                  </div>
                </React.Fragment>
              );
            })}

          <h2 className={Styles["skills"]}>REFERENCE PERSON</h2>
          {/* Reference Item */}
          <div className={Styles["item"]}>
            <h4 className={Styles.h4}>{props.reference.name}</h4>
            <div className={Styles["time"]}>
              <span className={Styles["duration"]}>
                {props.reference.position} - {props.reference.company}
              </span>
              <br />
              <span>{props.reference.email}</span>
            </div>
            <div className={Styles["des"]}>
              {props.reference.dialingCode}
              {props.reference.phone}
            </div>
          </div>
        </div>
        <div className={Styles["project"]}>
          <h2 className={Styles["h2"]}>PROJECT</h2>
          {props.projects &&
            props.projects.map((project, index) => {
              return (
                <div className={Styles["item"]} key={"projcet" + index}>
                  <h4 className={Styles.h4}>{project.name}</h4>
                  <div className={Styles["time"]}>
                    {project.fromMonth} - {project.toMonth}
                  </div>
                  <div className={Styles["location"]}>{project.position}</div>
                  <div className={Styles["des"]}>
                    {project.desc}
                    {/* <ul className={Styles["project-ul"]}>
                      <li>Lorem ipsum dolordolores.</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Consequuntur, dolores.
                      </li>
                      <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
                    </ul> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TemplateDownload01;
