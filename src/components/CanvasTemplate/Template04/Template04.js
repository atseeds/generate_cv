import React from "react";
import Styles from "./Template04Styles.module.css";

function Template04(props) {
  return (
    <>
      <div className={Styles["cv-container"]}>
        <div className={Styles["cv-background-container"]}>
          <img
            className={Styles["img-background-wave"]}
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className={Styles["img-background-wave"]}
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className={Styles["cv-content-container"]}>
          <div className={Styles["left-side-container"]}>
            <div className={Styles["avatar-container"]}>
              <img
                className={Styles["avatar"]}
                src={props.avatarSrc}
                alt=""
              ></img>
            </div>
            <div className={Styles["contact-container"]}>
              <div className={Styles["contact-title"]}>
                <img
                  className={Styles["contact-icon"]}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVR4nO3cy2oUQRiG4dKFEq/A08IYxFswLjxdgXgdKiRxo1cQtx6IutaduFLwvFQDyrgxEZdKhKhETUaTVV4pLGEcunu6p6tSXT3fA4EwSaqn/q+nqqc6U8aIiIiIiIiIiIiIiIhkAE4Ct4BFoMvo6roa3AROBD9ZgAngWexeN9gTYDxU8Y8C32L3MAFfgUnfxT8AfInds4TYE3XCZwBPY/coQc99Ff9U7J4krP7E7K52sqwDU8BuM6KAPcC0q0WWGz4O8j6n8SkvvWgBYCanRgs+Gl/LaXxkz/x+thY5NVo1deU0TO2GW4ZQdVIA5SiAyBRAZAogMgUQmQKITAFEpgAiSyYAYCdwHnjl7ih13ffn7M9MopIIANgHvM1rE+jY3zEJanwA7swvKn5vCMm9EsjRmIbdsFPWWZOYFAKYrxDAyyHa3wVcB37gz3fgGjC2VXUK1nDBsraXZVx784NwBt5YyfvDqv1IMgBgO/CbcH7ZY2xFnZIcglAApYpkr/ODTcKEHYLmShw/U9V+hL4MtZeYg3SAHUO0PwZcdROnLyvAlVZMwj1vxIpC6OiNWOBk7dlthxg7zvN3YrZfL9xjlc/8pkjiFdBmKIC4FEBkCiCyxgXgJtvLwGeGtwTMpjA5NzEAWzhfZk3DNTEAe/b6slTieFoN7SvIhscANkoEoNXQvoIsewxgeUDxtRpa4XMFw1hUAH1KDAl3PAZwO/IQlN5qKHDGYwFOlzieVkMzxuU3Hor/GthmGi7vyUdtGNgPfKpR/I+2DZOARgbg/n4vcA/YrFD4TeCu/RSiSURjA+hp5zBwCXgAfHB3m/5ZcY/dBy4Ch0xiyNHchlsGBRCXAohMAUSmACJTAJEpgMgUQGQKoMUBrOa0re1q/l9uyfLT1FVwY2W6duMtAVwIuWGT3ZQ0y7rbriuZBbNAW5bNFNz/nvO1S64M55ivpB8P+QRG2UMvxXcBaOPW6hu3HvQWgAth0m3LK8XsDsNHvBa/J4RxDUeFHtnRIkjx+4I47v4NZKHix0/bZg14Z692vE24IiIiIiIiIiIiIiJi2uYP3zsIVEEoQQ0AAAAASUVORK5CYII="
                  alt=""
                />
                <span>MY CONTACT</span>
              </div>
              <div className={Styles["contact-detail-container"]}>
                <div className={Styles["contact-header"]}>Phone</div>
                <div className={Styles["contact-content"]}>
                  {props.dialingCode}
                  {props.phoneNumb}
                </div>
              </div>
              <div className={Styles["contact-detail-container"]}>
                <div className={Styles["contact-header"]}>Email</div>
                <div className={Styles["contact-content"]}>{props.email}</div>
              </div>
              <div className={Styles["contact-detail-container"]}>
                <div className={Styles["contact-header"]}>Address</div>
                <div className={Styles["contact-content"]}>{props.address}</div>
              </div>
            </div>
            <div className={Styles["contact-container"]}>
              <div className={Styles["contact-title"]}>
                <img
                  className={Styles["skill-icon"]}
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span>SKILLS</span>
              </div>
              {props.skillList &&
                props.skillList.map((skill, index) => {
                  const dots = [];
                  for (let i = 1; i <= 10; i++) {
                    if (i <= skill.rate * 2) {
                      dots.push(
                        <>
                          <div
                            className={Styles["ball"]}
                            key={"my-dot" + i}
                          ></div>
                        </>
                      );
                    } else {
                      dots.push(
                        <>
                          <div
                            className={Styles["ball-disable"]}
                            key={"my-dot-dis" + i}
                          ></div>
                        </>
                      );
                    }
                  }
                  return (
                    <>
                      <div
                        className={Styles["contact-detail-container"]}
                        key={"skill" + index}
                      >
                        <div className={Styles["contact-header"]}>
                          {skill.name}
                        </div>
                        <div className={Styles["contact-content"]}>
                          <div className={Styles["ball-container"]}>
                            {dots &&
                              dots.map((dot, index) => {
                                return (
                                  <>
                                    <div key={"dot" + index}>{dot}</div>
                                  </>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className={Styles["contact-container"]}>
              <div className={Styles["contact-title"]}>
                <img
                  className={Styles["skill-icon"]}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAI1ElEQVR4nO2de4xfRRXHbxdYQIjlVVNePpGEKBJFRUGjUhBQXoHCP/WJBAuIvGJSCaj/UCpga8urIfxBQOQVAoISCK0oGAMYLKuJVAsVgbWYLS0ItlRsP+SwZ5N1d87cuXdm7u/+tveb/JLNb3/zPWfu3Dtz5pwz5xZFhw4dOnTo0KFDhw4dOrQIwLuAo4DvAtcCy4A/A38H1gFv6kf+Xq3/k99co22k7Yxe96NvAOwIHA/8FPgTsIV4CMeQch4nMnrdz9YBOBhYDLxMfrwK3AQcAUwrtlYA2wNzgWfoHUT2t0WXYiubZi4AhmkPXgTOm/LTE3CsLpZtxbPAl4upBuDdwD01L8rTwI3APOAk4EDgvcCuwLb62VW/k/+dDHxf20jbOrgb2LeYCgBOVDMxFBuAnwNzgD0TyN9LuW5V7lCIzicU/QpgUE2/UFPyMeA04J0ZdZquMh4P1El0Xyh9KfoJOiX8LrCTy4DDe6DjLODXgTo+AuxS9AOAvXVHWoa/AF9ogb6zAtcK2RjuVbQZwAeB50o6skEX1O2Kdk2X8wLWCHGB7Fe0EbrYiYI+rAQOKloK4ICAp/f51llIOueXKX4zsHPRcgA7A7eU9GWoNWuCPr6Plih8aT/5XYBpwPySPv22FdOompo+M+7cok8BnFtiRl/ZBteCT8Hziz4HcFbJDXZCL90Lvh3upUWLAQxU+O1lnn6KC33vvNq6lbqnZMGNmvOBd2hk6xWqQzytC1w7WPXGXq288rmqzAuqa4K4RyzcWfRg6rEgm5qdEshYSjwWBK5ZCwOtIzGjLRxVNAG9gyyXsmxkDkwgY6Ci48zCsIP7Jcfv1gTqdRCw0ZC1Ctghtu8hSpzv6fC8RDIGEg0ADu6g33l0u8gj7pwU/S8LIw57fDvJvIakmYJyDMCgZyp6PqvnVOOnFg7PMNVdBaxv0wAohwT0LZye8jpMtASsAPryLEIroMkBUJ6HDaq/Zdn1A5/zjHrj/vwWDMCRnuvxmap8IQJvMIQ9llxYvUiXCxtzDYByWZG16+vwlc3HktDkwreSCqsB4COGbv/MPACnG3Trk5qkmtLnwoZUMVxGrQuJv67Vz5Wh3kbgQkO/hx2/DcF63S2X7ZB38ewL0qW3AIsMIbcmlLHQwf+TgHbbeGIRrp1wFSwNkH+H0bZU92BoAMKFOQnn8A0OfvlueoDLOHgxrDgA/ylz2gFfM9quSHFtRMAMj8s5SZCa0RxRC3M97Y4G3vD4pKY1MAD7GG03A7unuDiSY+/CymhyBfCE5yI8UTgAfLbEXfF1o10VXOficHCK7e/CkSHty8jPMchvjCYv3uaXdMIyTHLwAU+WJHk571zCIHGOJaHJupru7sLZKS6QWAMuXJR5gR+PRY52m3BDzOX9PfKciOzDxQbtkhjeMfKHDPKTE5meI5RjZKKTy5i2NpU99pkG4BSD9sEY3jFyy8SLzu8BZhOO2RPafmrC5lD+/mKAzBwD8FGDdiiGd4zcSrZ6TwLu+ysMwP2O9nsCZ2rgPCiTOtMAvM+gXR3DO0ZundvaLUEO6f8qDMDmFBlpmQZgD4N2JFZf32I3mGnhGvGsCxe3dAAkUOXCG7H6Fp67dIdMsYWFHstodYJsi74bgNcN8tqnVyQt3boQjAa+P+z5/+e3tinoXwb5ARGckjfk3fV6dsc3R/bHiTYvwpYj7tOJHW//5/fx+IdKHXQl8p2oy6ecH8tphj5gkJ9Yk2+ux/E1fcJAyXeVHHQ9GoCsGzGXn17ww5p8fzD4bqozVbVkAC4xaBfH8I6Rf9Ug/0Umx1soamXgWWR1uAJulCTOOMsieSGT4y0Ukxx0gTq48ozW1eEaxylpiS4cEcM7Rr6tZ9GcmcHxFopJDroI7+6SyDT9fAEZFWIdQTojk+OtloOuQobHUl3g5XNdTJEOCfwYuj1Zl9Ml5HuGkIcyOd5qO+gq7sajM9jkbICh2xWx3OOF7GcIeTOkJJjGTas43kIhnPsUPUJJWsoxqYUN1bXJSxxvg5HrR7SDri5kCvaENNMWgRK735N9MFDT8bYogQX1TK+OwHr2NEtzCJNp5L9VF8Myx1sRLj+bgy5xtojg0FxCpeaOC3+07sKUu1kyOejqQA9qu/DXbE8k8AnPqDuD4ZIgm8qfg+1HmnQWrId3/2m9Gvlrjd+/lMqjie1JnZQFnQsafLESsf6RvXyBnt2tMgA/dvx2foT8BQ6+y6I6VU2+ZdEJzmpCgVUVUwEH9aT5sE5H82PiyYzyLVCu4Vi+GuknGz1zf976o57Iz5YUBfbaDD2o7ausdUwTSpxtCH+qmMJgdC9jnQMQ3N6UIveGHoSYSgAu91z8kUZqyenc+5qhRM+L7/XgqR+beo9vShFrR/ta39XVDITWuPbVQ2ruyTfMScG9xdSc8y/Hj+USrGpSqad6Zvs2CDn1WbLgClbkrPDrUmqm51H8QDFFwKidb+1yx6dHzmxaMSvstqqYAmDUvXCJZ5M1vrx98zecp1zX1TVeyvMVDYxfkyRrII1jreyuH5t2ZvZCwQFPNOrYkrbbaZGP+Xqobovhyp5dpYhewgsvRblDsLzROX+Cop80lNrkqoSr7oq5+hKEfxOOp/W0y4zMFX7P8ESyJmKL+p2as3YqpN29XSNICvRJXQQ91ikOqRSB9mVaHCp6h6l5O98A7vIc6nZBnvovJbmIkR2wHtPf64Wq0qk6GAbuA36kb+M4DPiQFgvfURfQ3YH3Ax8HTlWX8c88ntsy3NaaUvUNvdurLZABO7poE4yIVgye1Wy039AePKcnLdvnUtG5MwZyxOmXwHfkBQ+ON+jd4sm2yI2V+k6Z3ldBL7GCql6gIfWlzAqJEgH76mIvJmlurNMn8NC+Kamvd4lvENbqwvXN2MWLUTP2Qg3+WwcEq2Cz7kGu0PI2/fnaQrUwJBF1jZpo8pakHwCHSNWqTDK30deKzNESZr/SHekavZM3qxW2VteWFXqkarHuKWbFHijv0KFDhw4dOnTo0KFDhyIx3gLICDYcNYALtAAAAABJRU5ErkJggg=="
                  alt=""
                />
                <span>LANGUAGES</span>
              </div>
              {props.languages &&
                props.languages.map((lang, index) => {
                  const dots = [];
                  for (let i = 1; i <= 10; i++) {
                    if (i <= lang.rate * 2) {
                      dots.push(
                        <>
                          <div
                            className={Styles["ball"]}
                            key={"my-dot-lang" + i}
                          ></div>
                        </>
                      );
                    } else {
                      dots.push(
                        <>
                          <div
                            className={Styles["ball-disable"]}
                            key={"my-dot-dis-lang" + i}
                          ></div>
                        </>
                      );
                    }
                  }
                  return (
                    <>
                      <div
                        className={Styles["contact-detail-container"]}
                        key={"lang" + index}
                      >
                        <div className={Styles["contact-header"]}>
                          {lang.name}
                        </div>
                        <div className={Styles["contact-content"]}>
                          <div className={Styles["ball-container"]}>
                            {dots &&
                              dots.map((dot, index) => {
                                return (
                                  <>
                                    <div key={"dot-lang" + index}>{dot}</div>
                                  </>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className={Styles["contact-container"]}>
              <div className={Styles["contact-title"]}>
                <img
                  className={Styles["skill-icon"]}
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span>REFERENCE</span>
              </div>
              <div className={Styles["reference-infor-contain"]}>
                <div className={Styles["reference-name-wrapper"]}>
                  <div
                    className={Styles["contact-header"]}
                    style={{ fontSize: "9px" }}
                  >
                    {props.reference.name}
                  </div>
                  <div
                    className={Styles["contact-header"]}
                    style={{ fontSize: "8px", marginTop: "1px" }}
                  >
                    {props.reference.company} / {props.reference.position}
                  </div>
                  <div
                    className={Styles["contact-header"]}
                    style={{
                      fontSize: "8px",
                      marginTop: "1px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      className={Styles["ref-phone-icon"]}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <span>
                      {props.reference.dialingCode}
                      {props.reference.phone}
                    </span>
                  </div>
                  <div
                    className={Styles["contact-header"]}
                    style={{
                      fontSize: "8px",
                      marginTop: "1px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className={Styles["ref-phone-icon"]}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <span>{props.reference.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles["right-side-container"]}>
            <div className={Styles["name-and-position-container"]}>
              <div className={Styles["name-wrapper"]}>
                {props.surName} {props.lastName}
              </div>
              <div className={Styles["position-wrapper"]}>{props.position}</div>
            </div>
            <div className={Styles["about-myselft-container"]}>
              <div className={Styles["right-side-header"]}>ABOUT MYSELF</div>
              <div className={Styles["right-side-desc"]}>
                <span
                  style={{
                    width: "100%",
                    wordBreak: "break-word",
                  }}
                >
                  {props.introduction}
                </span>
              </div>
            </div>
            <div className={Styles["about-myselft-container"]}>
              <div className={Styles["right-side-header"]}>EXPERIENCES</div>
              {props.projects &&
                props.projects.map((project, index) => {
                  return (
                    <>
                      <div
                        className={Styles["right-side-exp"]}
                        key={"project" + index}
                      >
                        <div
                          className={
                            Styles["project-name-and-duration-wrapper"]
                          }
                        >
                          <span
                            style={{
                              width: "100%",
                              wordBreak: "break-word",
                            }}
                          >
                            {project.name}
                          </span>{" "}
                          | {project.fromMonth}- {project.toMonth}
                        </div>
                        <div
                          className={
                            Styles[
                              "src/components/CanvasTemplate/Template04/TemplateDownload04.js"
                            ]
                          }
                        >
                          {project.position}
                        </div>
                        <div className={Styles["project-desc-wrapper"]}>
                          <span
                            style={{
                              width: "100%",
                              wordBreak: "break-word",
                            }}
                          >
                            {project.desc}
                          </span>
                        </div>
                        <div className={Styles["border"]}></div>
                        <div className={Styles["dot-top"]}></div>
                        <div className={Styles["dot-bottom"]}></div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className={Styles["education-container"]}>
              <div className={Styles["right-side-header"]}>EDUCATION</div>
              {props.educations &&
                props.educations.map((education, index) => {
                  return (
                    <>
                      <div
                        className={Styles["right-side-education"]}
                        key={"edu" + index}
                      >
                        <div className={Styles["education-item-container"]}>
                          <div
                            className={
                              Styles["edu-name-and-duration-container"]
                            }
                          >
                            <div className={Styles["edu-major-wrapper"]}>
                              <span
                                style={{
                                  width: "100%",
                                  wordBreak: "break-word",
                                }}
                              >
                                {education.major}
                              </span>
                            </div>
                            <div className={Styles["edu-school-wrapper"]}>
                              {education.school}
                            </div>
                            <div className={Styles["edu-duration-wrapper"]}>
                              {education.fromMonth} - {education.toMonth}
                            </div>
                          </div>
                          <div className={Styles["edu-desc-wrapper"]}>
                            {" "}
                            <span
                              style={{
                                width: "100%",
                                wordBreak: "break-word",
                              }}
                            >
                              {education.desc}
                            </span>
                          </div>
                        </div>
                        <div className={Styles["border"]}></div>
                        <div className={Styles["dot-top"]}></div>
                        <div className={Styles["dot-bottom"]}></div>
                      </div>
                    </>
                  );
                })}
            </div>
            <hr className={Styles["right-side-bottom-line"]}></hr>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template04;
