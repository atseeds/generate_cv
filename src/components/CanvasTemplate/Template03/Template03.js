import React from "react";
import Styles from "./Template3Styles.module.css";

function Template03(props) {
  return (
    <>
      <div className={Styles["cv-container"]}>
        <div className={Styles["introduction-container"]}>
          <div className={Styles["avatar-and-name-container"]}>
            <div className={Styles["avatar-wrapper"]}>
              <img className={Styles["avatar"]} src={props.avatarSrc} alt="" />
            </div>
            <div className={Styles["name-container"]}>
              <div className={Styles["name-wrapper"]}>
                {props.surName} {props.lastName}
              </div>
              <div className={Styles["position-wrapper"]}>{props.position}</div>
            </div>
          </div>
          <div className={Styles["contact-container"]}>
            <div className={Styles["phone-container"]}>
              <div className={Styles["phone-icon-wrapper"]}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className={Styles["icon"]}
                  style={{ width: "24px", height: "24px" }}
                ></img>
              </div>
              <div className={Styles["phone-number-wrapper"]}>
                {props.dialingCode}
                {props.phoneNumb}
              </div>
            </div>
            <div className={Styles["mail-container"]}>
              <div className={Styles["phone-icon-wrapper"]}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAALsUlEQVR4nO1dV6wdNRAdWkLvLQmQR2iiIxACRIkIgSS0EEooEkWiiCJA9B8+3gegBIUmQKIIIkAQSAQRvdck9F5ER5TQe+/F5+1esc/ru+stM/bu9ZHOz7u7O/Z43q49nhkTtQ8LKI5S3F3xeMXzFGcpPqL4iuInit8o/qT4b8yf4r99El+Da2fG9+IZu8XPXECsFwHWGKE4WfEixccVf6D/B7Zu4tnzFC9U3E9xuED/AjQsqjieogF/k/gG25ZvKF6gOE5xKGO/expDKHqlX6v4Pbkf9G78TvEaij4Zi7BoosewjuIUxc/I/eAWJdqMt9SGtWulB7Cd4u2K/5D7gayDcxX3oDCJzASUM0nxBXI/YFx8TnEiBUNIYYLis+R+gKT4DEWTxp7Heop3kPsBccX7FTeqrMUGYnGKnCx/kvtBcM0/FKcqLlZJow3CWMV3yb3ifePbimMq6NV7wIGDJd3f5F7ZvhKrnsspekO2CpsovkruFdwUvkwt8h8cSIM3XgLt+IvioSX07Q0WoshH7lqRTec0xQUL6t454Lu/idwrry28haI5VCOwpOK95F5pbeNDiksXGAcnWIUid6drZbWV8JaubD0awuijaC3rWklt51uxrr3CShQFRrhWTq/wHcVVrUZGAPguhde+PF9SXNZifFiB2f595F4ZvUpMDJ2FoWFtOjOngYH8nE2Rz0UcwcnjD6fmjFXtOKimhgfWQ2wiTcwcsRqBjZ2fmTsUWJxfKa6eMW61AO7Ilx13NLA7nyTmcPSLPehkYDandB29ikAkT1vCtNtMjNHoLmNYGohQeceDzgXa8TWq+VNwngedCizG04wjWQLrUxS56rpDgcWIldpIw3gWxt0edCawHGcZxrMQJnjQicBq3Ck1qpZA/trTHnQgsBrn6QNri0keND6wHm5PJcCRpfstRbV4ArvzWwa930sFMZahEWDrMl4YAB1x6H7LIo3gmvkHA8gHlwHMtm0AyrJwuXyDAeSDywAwpmvZNGAqUwOCAdiBywDAs/OEw3/8KWMDggHkg9MAMLaZewR7MAoPBmAHTgMAx2cJv45ZeDCAfHAbwPRughHtw12EcbcKiukVQEecYwA/wxCT4PHMgsG/FI+rpJ5243CS2XkdaxJ+kYDgDiGrcTnvjMC+Sz/J6X+aqRFvCTYAvJl6qDJWBpDZcwPJ6v41vREjhBvQIaJYvU13FsAKio+RG90PSzZkspDQGw1/Q6zhuqVV2Fygz6Y4S5OOOLhPsjFS338scU6kaDKY/Dt2wUaXVGQTsY3iFzRYB3DV9hP/MrDD85MNelxIaMcPgKWOvuT8jaKUs7YDfURfk32HLjpLZCkDmNtpEGbjPwoJTTqC8ArUi0p0/gvaWk0bbz+9UCaqpiZrAkoZAA63GNDz2kICdQMAlld80HDddOrirGgoFla8jNL9nEPpSbCUAYAjIZDb/59lAMAiXZTzgOIy2XptBNAH9EXvH/ps2piRNAAE/dIJggKz9gKOorQXDOvVvox7fAeW13poHSbAZ2TcI2kAx0CgZNZP3mbQzhStCJL3YAuzUDiTJ9hU8SMa3Bf0zeiGTUDSAM6FwFmCAm12A02TQ9QaFiuAUAPQVr0+8usURVvlQdIAUM2VHhUUaLsdvBRFh0Yl7+2sEHyHyc+BqFzbil6SBoAiU6Jl3IvEA6Dw0RTDM1BPf+ECz5EC2mtyqBVtr6QBoNTcwHm5PhpAB0co/q4951bFJUo8iwtoC9qUbCPafHiJZ0kawHwI/E5QYNmIoG0pfXgkrHe1ks+rE6jYiVPAkm1DvZ4dSz5P0gAwKR04mMB3AwAw2HpFUljwZhWeWRXw4L2vtQk1lNas8ExJA0AKeWrC4qsBAChFP1t7Jk70nlDxuWWArFs9jesuqu68kjQAjH2jDADoRM8kk1dw/NzRNTzbFodR2mlVV5STuAE05ROgY39D27lDzUyhW9jZO6RGGeKfAI5sVAkDAE41yLieeAooD42frcs7pWY54pPAjwUF1mkA2MT6tYschFmtUKOsrNCtX+O21AVJA4Crml4RFFiXAeAoOv0brO+zv0nRVndVrB0/K0sW2nJADbIAcUfQw4IC6zCAIyk9APAYYt2t+zS+VtyhgqytFT/XnongGZz83a/9/e+4bVUhaQDYpvZuMygLJ1M6df3MxO8bU+QbSP6OV/TkErImU/oTMz+W0cGZ2u9o20klZCUhvhnk03ZwFs7QngVln2y4bjil9+CLbiSZQrcQm7CG4dpjKW2UVer1ShrAwDkDxwsKLGMAWHpN057zT9zubsDO2yMG+VdRdno0NnQuNdyHoNmsSaXps3QJlYttFA8I2V1QYFEDwIBcqT0DzouDLe7Fss10euk9ZD6Acen4N/36m8huWXkwpZ1qV1Bxv4SkAQykio8SFFh0O/ga7X7ssO1b4Bndcu6w8km+zvHZeN5wXVHH0p6UDvmeQcUKN0sawMABE1ASd1p4UQPAf9wt2r1Q7F6W9+tA3KP+isY2+BYUTeo+1H7DJ+b0krKwL6F7KO8g+zxI8bBwYJ6QUBsDwIaPHiqO8KrSJU9jYFav/3f+SOmciN+o3KohCbRVDwlDn5a0uFfKAOYkhV4oJDTPADB5040RlrptrtrsgJSsLzPaB7f46JpkIZD1a+35KL2b56GUMoBBKeL7CQnNMgAkSOjLN/iqt8pRWFFsoPiBoW1wiW9as6zNKW1wCMEblnGPlAFMSgodLiS0mwEMo3RsIjxwm2QoqgogLznpw6SQ68QtnLeg77e8kSFPygBSZw/r/m4pA0D0jJ4mjQnahoZr6wS+x6iIishY7gyk9Sg90XyfzGHiEgbwqqmREvMA3QA2onRQ6ntULaSqCIaQXA4i+oS+5Rm6hAEYS8SMExCcNAAswfTvI16NPgR6cgGvXf1Th3nO1olrJAzAuKLC2ps7QrhjAKhfr/se4GsfbqPFhgOT3RdpcN+xFB0T/85tAF3LxAG6543DAMZQeu39rOKK1ipsPpZTfIIG6wDhWXDNchvAVVkN4y5SiKAJfYsVDgmTb77twCQUE9CkLuDqPoR4x2CXrEZxF4vW3bEISPApw0ca6LteO0DXUZ3EcjQ3Tc2Uj8fBOynUCQQw99JzHbh4lk2DEAPHfUYwopDaVAKmKqAL7sgsjOko2wbdydgQhFb7mN3rGtj+vpr49H5bkcaMYWoEUqVDjeDuwPYsV83GwkfH6YmYdTAcG+fm2LgnqQQmMjQk0A13pZJ4yoPGB1YjYhBKF96U2B8I5GXHxVwanCuCQF7eaBjPwoBfQK/RE+g/UThjhGE8S4HzMMlAHpqypkoDLtu3PehUoB0Rc1AkF8EKmExwu4gDqxObSYWdPraQCh8PLM/c84GrADtXejRLoD9EkEntr34dCGLUs14C3RPxlWLxlEgqCPMBf4ix2DNzxBig5+wHuuM5OWPFAmzrSp1xF9idM8jhFjsmHKaiCoEyRMYxR03EQsDhDgjrdq2MXiMqlNukm4sAMf36MS+BfEQu5SpWIyOIPpI/gbwXCR2PtBsSeaD4gZ7xElgf8dr3/rR1fJfCxLB+YsLXmAwqxLljeeJaaW3hzYqLFhoBD4C1KeIIgsewPKG7c6jhofQ4KVM/8Ckwn/Dtl47m9Q3YpEAWsGulNoWIxu4ro2ifgXSwfuLNfm068cpHZhD7lq5LjCbZ00qbQhw3xxbJ4xvwNkBJdkSuula8a6IySD/1aLY0agJdS+4HwRVxQLbpDIKeA6pWdTuUqY2Et7Ryxk4bgfN92uxFxOy+NUs7TqBmLz4NkqeachEz+/up3qPlegaop4uzgkzFnX0nqoCi3tJatWulB4FVA2roTSfZk06LEgUeUOZlHIUyOGzAcmlnik47Q3VR14MOnwYCZMdSjy7lXAP1d/dRPF9xLvGWu8Wz58Sy9iYPo3ICIvRRdHYPzvQ7l6LoZVTlxFGpOPwRr+qkE+qH+G/z42tw7Yz4Xhyths/PSMkOSOE/gFWhTRsBuwYAAAAASUVORK5CYII="
                  alt=""
                  style={{ width: "21px", height: "21px" }}
                ></img>
              </div>
              <div className={Styles["phone-number-wrapper"]}>
                {props.email}
              </div>
            </div>
            <div className={Styles["location-container"]}>
              <div className={Styles["phone-icon-wrapper"]}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className={Styles["icon"]}
                  style={{ width: "35px", height: "35px" }}
                ></img>
              </div>
              <div className={Styles["phone-number-wrapper"]}>
                {props.address}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["overview-container"]}>
          <div className={Styles["leftside-container"]}>
            <div className={Styles["work-exp-title"]}>WORK EXPERIENCE</div>
            {props.projects &&
              props.projects.map((project, index) => {
                return (
                  <>
                    <div
                      className={Styles["work-exp-container"]}
                      key={"project" + index}
                    >
                      <div className={Styles["work-exp-position-and-duration"]}>
                        <div className={Styles["work-exp-position"]}>
                          <span
                            style={{
                              boxSizing: "border-box",
                              width: "92%",
                              wordBreak: "break-word",
                              marginRight: "10px",
                            }}
                          >
                            {project.name}
                          </span>
                        </div>
                        <div className={Styles["work-exp-duration"]}>
                          {project.fromMonth}- {project.toMonth}
                        </div>
                      </div>
                      <div className={Styles["work-exp-company-location"]}>
                        {project.position}
                      </div>
                      <div className={Styles["work-exp-desc"]}>
                        <span
                          style={{
                            width: "100%",
                            wordBreak: "break-word",
                          }}
                        >
                          {project.desc}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}

            {/* REFERENCE */}
            <div
              className={Styles["work-exp-container"]}
              style={{ marginTop: "13px" }}
            >
              <div
                className={Styles["work-exp-title"]}
                style={{ marginBottom: "10px" }}
              >
                REFERENCE
              </div>
              <div className={Styles["work-exp-position-and-duration"]}>
                <div className={Styles["work-exp-position"]}>
                  {props.reference.name}
                </div>
              </div>
              <div className={Styles["work-exp-company-location"]}>
                {props.reference.company} / {props.reference.position}
              </div>
              <div className={Styles["reference-phone-container"]}>
                <span>Phone:</span>
                <span>
                  {props.reference.dialingCode}
                  {props.reference.phone}
                </span>
              </div>
              <div className={Styles["reference-email-container"]}>
                <span>Email:</span>
                <span>{props.reference.email}</span>
              </div>
            </div>
          </div>
          <div className={Styles["rightside-container"]}>
            <div className={Styles["about-me-container"]}>
              <div className={Styles["work-exp-title"]}>ABOUT ME</div>
              <div className={Styles["work-exp-desc"]}>
                <span style={{ width: "100%", wordBreak: "break-word" }}>
                  {props.introduction}
                </span>
              </div>
            </div>
            <div className={Styles["about-me-container"]}>
              <div className={Styles["work-exp-title"]}>EDUCATION</div>
              {props.educations &&
                props.educations.map((education, index) => {
                  return (
                    <>
                      <div
                        className={Styles["course-container"]}
                        key={"edu" + index}
                      >
                        <span style={{ fontSize: "10px", marginBottom: "2px" }}>
                          {education.major}
                        </span>
                        <span style={{ fontSize: "10px" }}>
                          {education.school}/{education.desc}
                        </span>
                        <span style={{ fontSize: "10px" }}>
                          {education.fromMonth} - {education.toMonth}
                        </span>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className={Styles["about-me-container"]}>
              <div className={Styles["work-exp-title"]}>SKILLS</div>
              <div className={Styles["skill-container"]}>
                {props.skillList &&
                  props.skillList.map((skill, index) => {
                    const diamonds = [];
                    for (let i = 1; i <= 5; i++) {
                      if (i <= skill.rate) {
                        diamonds.push(
                          <div
                            className={Styles["diamond"]}
                            key={"my-diamond" + i}
                          ></div>
                        );
                      } else {
                        diamonds.push(
                          <div
                            className={Styles["empty-diamond"]}
                            key={"my-diamond" + i}
                          ></div>
                        );
                      }
                    }
                    return (
                      <>
                        <div
                          className={Styles["skill-card"]}
                          key={"skill" + index}
                        >
                          <li style={{ fontSize: "10px" }}>{skill.name}</li>
                          <div className={Styles["diamond-container"]}>
                            {diamonds &&
                              diamonds.map((dia, index) => {
                                return (
                                  <>
                                    <div key={"diamond" + index}>{dia}</div>
                                  </>
                                );
                              })}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className={Styles["about-me-container"]}>
              <div className={Styles["work-exp-title"]}>LANGUAGES</div>
              <div className={Styles["skill-container"]}>
                {props.languages &&
                  props.languages.map((language, index) => {
                    const diamonds = [];
                    for (let i = 1; i <= 5; i++) {
                      if (i <= language.rate) {
                        diamonds.push(
                          <div
                            className={Styles["diamond"]}
                            key={"my-diamond" + i}
                          ></div>
                        );
                      } else {
                        diamonds.push(
                          <div
                            className={Styles["empty-diamond"]}
                            key={"my-diamond" + i}
                          ></div>
                        );
                      }
                    }
                    return (
                      <div
                        className={Styles["skill-card"]}
                        key={"lang" + index}
                      >
                        <li style={{ fontSize: "10px" }}>{language.name}</li>
                        <div className={Styles["diamond-container"]}>
                          {diamonds &&
                            diamonds.map((dia, index) => {
                              return (
                                <>
                                  <div key={"diamond" + index}>{dia}</div>
                                </>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template03;
