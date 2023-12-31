import React from "react";
import Styles from "./Template01Style.module.css";

function Template01(props) {
  return (
    <div ref={props.cvRef}>
      <div className={Styles["container"]}>
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
          <h2 className={Styles.h2}>GIỚI THIỆU</h2>
          <div className={Styles["fs-sm"]}>{props.introduction}</div>
        </div>
        <div className={Styles["experience"]}>
          <h2 className={Styles.h2}>KINH NGHIỆM</h2>
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
          <h2 className={Styles["skills"]}>KĨ NĂNG</h2>
          <ul>
            {props.skillList &&
              props.skillList.map((skill, index) => {
                return (
                  <li className={Styles["skills-li"]} key={"skill" + index}>
                    <div className={Styles["skill-card"]}>
                      <div style={{ width: "100%" }}>{skill.name}</div>
                      <progress
                        className={Styles["progress-custom"]}
                        value={skill.rate}
                        max={"5"}
                      ></progress>
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
          <h2 className={Styles["skills"]}>NGOẠI NGỮ</h2>
          <ul>
            {props.languages && (
              <li className={Styles["skills-li"]}>
                <div className={Styles["skill-card"]}>
                  <div style={{ width: "100%" }}>{props.languages.name}</div>
                  <progress
                    className={Styles["progress-custom"]}
                    value={props.languages.rate}
                    max={"5"}
                  ></progress>
                </div>
              </li>
            )}
          </ul>
          <h2 className={Styles["skills"]}>HỌC VẤN</h2>
          {/* Experience Item */}
          <div className={Styles["item"]}>
            <h4 className={Styles.h4}>{props.education.major}</h4>
            <div className={Styles["time"]}>
              <span className={Styles["duration"]}>
                {props.education.school}
              </span>
              <br />
              <span>
                {props.education.fromMonth} - {props.education.toMonth}
              </span>
            </div>
            <div className={Styles["des"]}>{props.education.desc}</div>
          </div>
          <h2 className={Styles["skills"]}>NGƯỜI THAM CHIẾU</h2>
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
          <h2 className={Styles["h2"]}>DỰ ÁN</h2>
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

export default Template01;
