import React from "react";
import Styles from "./TemplateDownload04Styles.module.css";
import { Style } from "@mui/icons-material";

function TemplateDownload04(props) {
  return (
    <>
      <div className={Styles["cv-container"]} ref={props.cvRef}>
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

                <span style={{ marginBottom: "3px" }}>MY CONTACT</span>
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
                <span style={{ marginBottom: "3px" }}>SKILLS</span>
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
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span style={{ marginBottom: "3px" }}>LANGUAGES</span>
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
                <span style={{ marginBottom: "3px" }}>REFERENCE</span>
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
                      marginTop: "2px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className={Styles["ref-email-icon"]}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKUlEQVR4nO3aS6gOYRzH8ee4H7kliXSkFBFFKeqIBTssT1lZ2lraWsrO0lZWtoqFsqCIsnAiRXQkkmtux3H96q3nrelt7u9c/s+8v09ZmnlmvjPzzDvPcU5EREREREREREREOgAxRUGMURBjFMR6kLbntFGjIMYoiDEKYoyCGKMgxiiIMQpijIKEHgRY1M5QuyfuXJYJ8hSYamzUHQUcBh5VEaTvBrC7sSPoCGA7cC3H+S0cpOcvcBFY39gRBQpYA5wH/hQ4v4WD9H0DzgDjjR1hQPMEcAr4HHfiqggyTbIZ4Dgw5kYcMObPRe+cJJmuIsg84ATwJmVH94D9bkQBe4BbKefnvb9rFgwdJPIfl/nH1I+Enf4DLgOb3IgANgAX/Nwa55efR1ambKNckMgGJvzE3gsQZxY4C6xwHQUsBU4DX0l2BdicY1vDBYlsaC9wO2VAr4GTwHzXrXliCniRctz3gQMFtllNkIEBzmQM8KALHLAPuJNynK/KXICVBom5hb8MewtbA2zMeER/94/o5SW3X32QEpPcKmccDb3E1Bpk4DXwJsk+JL0Gti3na/5dYLKi/dUfJLKzY8CzlAN7DBx1RgCHgAcp433pY1X2Q7jRIHk+JXjXgZ1V77vAGLf6xw8Zn4qW1LDvZoNkfWyL+O3nn7V1jSFmTKv9hPwzYUz9j6nrahxDO0EiA9gGXE25Gj/5N7bFNY5hoX9FfZcyjt5yw666xmAmyMCCzcOUE/KkjoWxtvZrPsjAlfq27iuV7DvzY913pvkgTTzLMTh3mQ8SGdyWnG874xW+3e1o5ugCDFLV7wH/++d5xu+fI86AIIIUXBibLPCFIHGhqC3BBOnrLe4A54C5lG9Kl/y/pA+Ac34biQtFbQkuSIGvrkF+ZQ42SIGFsaDWYYIPkmNhrNRCUVs6ESRhbXt2mIWitnQqyMAfXky4AHUySMgUxBgFMUZBjFEQYxTEGAUxRkGMURBjFMQYBTFGQYxREGMUxBgFMUZBjFEQYxTEGAUxRkGMURBjFMQYBTFGQYxRkNCCSLsUxBgFMUZBjGl7ThMRERERERERERERV4H/D2II3NSy5O0AAAAASUVORK5CYII="
                      alt=""
                    />
                    <span>{props.reference.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles["right-side-container"]}>
            <img
              className={Styles["img-background-wave-top"]}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAFACAMAAAB9dStrAAACwVBMVEUAAAD////////////////MzMzV1dXb29vf39/j4+Pm5ubo6Ojq6urr6+vt7e3d3d3f39/h4eHj4+Pk5OTm5ubn5+fo6Ojp6enf39/g4ODi4uLj4+Pk5OTl5eXm5ubm5ubn5+fo6Ojh4eHi4uLj4+Pj4+Pk5OTl5eXm5ubm5ubn5+fh4eHj4+Pj4+Pk5OTk5OTl5eXm5ubm5ubi4uLi4uLj4+Pk5OTl5eXl5eXm5ubi4uLj4+Pj4+Pk5OTk5OTl5eXl5eXm5ubi4uLj4+Pj4+Pj4+Pk5OTk5OTl5eXl5eXm5ubj4+Pj4+Pj4+Pk5OTk5OTk5OTl5eXl5eXj4+Pj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXl5eXj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXl5eXl5eXj4+Pj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXj4+Pj4+Pk5OTk5OTk5OTl5eXj4+Pj4+Pk5OTk5OTk5OTk5OTk5OTl5eXl5eXj4+Pj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXl5eXj4+Pj4+Pk5OTk5OTk5OTk5OTk5OTl5eXl5eXj4+Pj4+Pk5OTk5OTk5OTk5OTk5OTl5eXj4+Pk5OTk5OTk5OTk5OTk5OTk5OTl5eXj4+Pk5OTk5OTk5OTk5OTk5OTl5eXl5eXj4+Pk5OTk5OTk5OTk5OTk5OTk5OTk5OTl5eXj4+Pk5OTk5OTk5OTk5OTk5OTk5OTk5OTl5eXk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTj4+Pk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTj4+Pk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTl5eXk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTj4+Pk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5ORA1VkEAAAA6nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKy0uLzAxMjM0NTc4Ojs8Pj9AQkNERUZHSElKS0xNT1BRUlNUVVZXWFpbXF1eX2BhY2RlZmdoaWprbG1ub3BxcnN2d3h5en1/gIGCg4SFhoeIiYqLjI2Oj5GSk5SVlpeYmZqbnJ2eoKGio6Smp6iqq6ytrq+xsrO0tre4ubq7vL2+v8DBwsPExsfIycrLzM3Oz9DR0tPV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f5ze1ECAAAAAWJLR0QB/wIt3gAADR1JREFUeNrt3fubnFdBwPHJbprdtLk3Ns3N0PSWZLGmK7cRyqhUHKsywVJXEMaihbGSMeqAtoxS7FihDkLbscIgFxeVDkZKBwWHUuhKG7Pk0pIm3XZjskk22ewmf4U/lAebNk33Mpf38vn8CfOe833Oc97znkmcBSCQEn4CAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEEGpim8dHRvcO7Go1Haj+xs9FoPDE8vH/0lJ8HgYZ2Of7049/48v13/8ltA5nUm67fuGpJ4oK6lq+9sj+Z2nbrH99135cefvxHio1AQ1ONPv7Qg3fveM+vvH7DxYk5Wtn31lv+8K6/rw0d87Mi0DBrh779hdL2W958zcJEK6y4Lv37H33wkafO+KERaJh2mL/52eKtN25pTZdfpndz+g/u+ecnbX4g0HABBx7+zI7M1sWJTujeeOOHPvXwsx4CAg3nmNr95Y/ecv0lic5b8cbf+fhDBz0RBBrOnj1QK2WTQUjziy1PZkt1rxERaOJqctcX77h5a28isLo23fyxfzvsQSHQxMr4t+59X39PIhQ2vuPOfxnxyAQaYuDUUCWXDEmb/9+adLF+wsMTaIis//33j79rc3cirC563W2V//EUBRqiZmxncdtV8xLht3rbPY9NeZ4CDRFxoJpLLkhEyKJUoTbuuQo0hNtEo5RZlYii+f35wVEPWKAhpAvnwXz4XgbO7NvDvmxlvwct0BAqp//zrl9fk4iHLbmvjHniAg3hiHOjlFmWiJXu/nxtwpMXaAh4nIvppYlYWpQqNgwAgYbgxnlJItZWZyrPGQgCDcFyYuefvqU3QSLR9XM7drpYWqAhICa/dcdbepT5RRb/xn2uKxVo6LjhcmaFIp9HX77un7QEGjpmrJbvV+JXdtlA9ahRItDQdqcbxdRFGvxqelOlfQaLQEMbPf5XN14ivtP1Mzu+OWnMCDS0wZEvvHet6M7QyvcMultJoKG1hkupBXI7KxenK0cMIIGG1jhey23Q2TluSDt9J9DQ/KVzOe2oczMu7UiWnjaaBBqa5kQtv0lam/epYX/hSYNKoKEJ9n/ybT7hbrrr/2zI0BJomJOhYnKemrbGlsIPDDCBhtkZr+XWyWhrvwYv7DLOBBpmaqSSWSygbWn0sNEm0DB9w6XUfOls2zvDZOmAMSfQMA2nv/bBK0Sz3Wfv3vop1/wLNFzYicHsKrns1PnoEQNQoOEVPHf/TQuFsoN6fu2LJw1DgYaX2VdOuzu085YO1FzyL9DwYsMlp50DY13uUSNSoOHs2bNnz041Cj7jDtzRuz0GpkATexMP/e7lehjEV4a/8ID/yhJo4uxkLXeZFAZWb7o6YZAKNLF07PO/6UvBoPupD3zbSBVo4ub44MAi+QuFTYW9xqtAEx/PV9y8HyZdqcoxo1agiYORiuPOTkcj0ATP06Vkl9qF07V3PmUACzSR9ZQ6h3yrI1keM4wFmgja71PBKFhiq0OgiZq9d71BnaPiqj+31SHQRMY+a+foneo4YVwLNBFYO6tzJC3Luk9JoFFngqq/5C9YBJqw2qPOUdeb8cZQoFFngmp9fo/RLtCEyQ9LSeXyxhCBJnD++yOvFa2YWXn7kIEv0ATesLVzXN8Yll2nJNAE2VBhi1DF15Lsd8wBgUadCai+4vNmgkCjzjh4J9CgzszMpuKISSHQBKTOmyWJc/VYRgs06kxgXV3Yb34INOpMMHWnqqfNEoFGnQmmtT4DF2g6UOdN4sN0dKWqEyaMQKPOBNPl+d1mjUCjzgTTvGTZbUoCjToTUMuy3zOBBJqWafzRVTLDHCQfsIwWaFqzdr5GYJirpf7GUKBpfp2tnWmS/vKYGSXQNMlUPX+lqtBEi7N180qgaUadc2sEhaZzKalAM/c6r5YSWqM3UzPFBJpZmqznLlcRWmlz8TkTTaCZTZ1X6Qct51JSgWbmdb5MOmiTa4vPmnMCzfSMDw4sFQ0sowWaANZ5iV7QflcXD5p+As0FHKtuu0Qp6JAF7/jqlEko0JzX4erAIpGgo9bl95mJAs1LPVdJL5AHOq/LX2QJNOfYX3pztzIQFOsLltECzQv2lJLzNIFgLaOT5eOmpkDH3lAxqQYE0VK3KQl0zOvsL7kJsi3FQ2apQMfSVD3vemeCbkHaG0OBjp1JF4gSFqtz3zdjBTo+xgezrtkgTPrLR81bgY6D4z7kJoQWuqpDoCNvtJLxITchdU1hryks0JH19CdT881yQqz77f94ykQW6Aga9jEKUbA8+6jZLNCRMtVw3Jno6CuOmNQCHRHjNQfqiJiezOCkQBP+l4JVRzaIpLX53QJNmO2/J3WRiUxUdd1QOSbQeCkIwbQwvlsdAh3ql4KbTF5iYV3+SYEmVC8FV5u2xEh/aUSgCclLwcUmLHHTk65OCDTBtq+c9lKQmFqR/Y5AE1iPfnirSUqsbb37kEATPCdqufWmJ3SnKscFmiA5VMnYdoYfWzYQj2tJBToMhopOO8O5ri38UKDptOOD2bUmI7xcV7I8JtB0zp5yusc8hFcS9Y8MBTqwphqFfhsb8CrW5XcJNO11+HO3XGrqwXTMe9Pfjgo07TJcTi8w62D6etLRPHkn0AEzWc9vMd1gxiJ58k6gg+T56sAyEw1maX3uMYGmJc58985ktykGc/K60iGBpsmODWbXmVvQBN2pyphA0zRDxZR3gtA8CzODpwWauRuzdIYWWJOrCzRzXTq72RlaZEsELusQ6A4Z+exvrzKFoJW6brjviEAzQ5ONYmq+2QOt15uunhJopm24nHHWGdpnebZ+RqB5dUe+9P4rzRdot6s/vFuguZCphtN00DF9xWcEmvPb++l3upwOOqr7lx44KtC8xNFavt/kgADoDduldwLdUifqzmtAkCwbCNNXhgLd0k3nXvMBgmZteL4yFOiWHaZbYSJAQG0u7BLomNr/wLt/2gyAYHvDXx8U6Lg5WM32GfoQBl3J8hGBjo1nB/P+hhvCJOjHOgS6eWfpxBnCJ9DHOgR67g7/0+0/22WcQ1it+9CjAh3NPefPf/A6cYaw2/yRXQIdLQeqOdsaEBV9hd0CHZVzzhWnNSBq+kvPCHTo41wecM4ZIqk7WRoR6LA6/vU73r7cIIYI67npc8cFOnSeGcwne4xeiL6FQfmjLIGejskhW84QK8sGBicEOvjG6sW0XQ2In0sHamcEOrjOPHH/+6/rNk4hrjZs/65AB9HRejG90viEuHtN/gcCHagd58fuffcmX6AAL9j6F3sFOiBHNQrpZQYkcI6+4o8EuqOO7PzLbRsMROB8un7+E4cEuiMmGqWBPnceARdsdLJ0SKDb6vRQJZdcYOgB09DmT8HjHOjTj3361v6LDDlgBnp+9R/GBLq1expDlVzyYkMNmIXedGVMoFvzLrBeGui3pwHMxcK2/JthrAJ9oFYa6HPAGWiGpQODpwS6KVsa33tw+y9eZkQBzXTp+742KdBzcfChj/3WdbY0gJZY9XtfnxLoWb0JrBbSqw0goLXr6IHB0wI9fWf2fKX4rtc6QQe0x5oPPDIl0K9utF7OJRcbL0B7rczWpwT6gmlOrTJMgA5Zl6ufEeiXOrTz3ttucEYD6Lj1t//HGYH+ycnmci51uUEBBKfRzVtHhzXQp4drpWxykbEARLfR4Qv0wYf/bvtNm53QAILsiu3/FatAnxyqFrPJpR48EAob5ryODkOgJ4Zr5Vxqo0s0gHg1OtiBHq2X85m++Z4yEFavydWjFujRRrU40O8dIBDnRicCWWb/qw1EyhWzanRQAj0+XCvnM/0LPUcgqo1uhC7Qo41qMesNIBADG2e4ju5YoE+9sGS2zQxodFACPf7EV8s7bn7jGs8JiKe+wlDQAn1quFYpZlMbuzwdwDq6HohAnxyulQvCDDDjRrcs0Ie/P/g329/5ejfNAcxyryPRilMZuYyTzABzXUc3K9DjP97J8Fk2QJManbBgBghmoxMWzADBbPTMAn1y9zcqd9z6y33+NRugyV7+znBagT55oFEt5TNJZ+UA2reOTlzwCHO9WszpMkBHGp043/5yvVrMZfrXuMAIoIONTugyQDAbnTg69K+fKbz3xj5/xgoQIH2FIT8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABh9n/XYHy9DhvLaQAAAABJRU5ErkJggg=="
              alt=""
            />
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
            <img
              className={Styles["img-background-wave-bottom"]}
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateDownload04;
