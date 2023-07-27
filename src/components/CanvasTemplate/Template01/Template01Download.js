import React from "react";
import Styles from "./template01Download.module.css";

function Template01Download(props) {
  return (
    <>
      <div
        ref={props.cvRef}
        className={Styles["body"]}
        style={{ display: props.display }}
      >
        <div>
          <div className={Styles["container"]} id="html-content">
            <div className={Styles["avatar"]}>
              <img
                src="https://i.pinimg.com/564x/eb/57/6f/eb576ff023487bcb1fa3ad61ee7b23ee.jpg"
                alt=""
              />
            </div>
            <div className={Styles["name"]}>
              <h1>HO HOANG</h1>
              <div className={Styles["specialize"]}>Frond-End Developer</div>
              <ul className={Styles["contact"]}>
                <li>
                  <span>P</span> +84123456789
                </li>
                <li>
                  <span>E</span> hohoang.dev@gmail.com
                </li>
                <li>
                  <span>W</span> lundevweb.com
                </li>
              </ul>
            </div>
            <div className={Styles["info"]}>
              <ul>
                <li>
                  From <b>HCMC</b> - VietNam
                </li>
                <li>01/01/0101</li>
                <li>AAAA University</li>
              </ul>
            </div>
            <div className={Styles["intro"]}>
              <h2>INTRODUCE MYSELT</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              eligendi omnis quasi dolores modi eius aliquam ipsum soluta,
              dolore tenetur excepturi praesentium porro alias itaque enim
              labore qui necessitatibus molestias hic cum deserunt ab! Illum sed
              eveniet distinctio, alias sunt repudiandae labore a dolorum
              tenetur? Harum deleniti mollitia odio neque.
            </div>
            <div className={Styles["experience"]}>
              <h2>EXPERIENCE</h2>

              <div className={Styles["item"]}>
                <h4>Frond-end Developer</h4>
                <div className={Styles["time"]}>
                  <span>2020 - 2022</span>
                  <span>ABC D company</span>
                </div>
                <div className={Styles["des"]}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium officia nobis quas excepturi
                  consectetur quidem quia est neque doloremque.
                </div>
              </div>

              <div className={Styles["item"]}>
                <h4>Student</h4>
                <div className={Styles["item"]}>
                  <span>2015 - 2019</span>
                  <span>ACDC University</span>
                </div>
                <div className={Styles["des"]}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium officia nobis quas excepturi
                  consectetur quidem quia est neque doloremque.
                </div>
              </div>
              <h2 className={Styles["skills"]}>SKILLS</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>MySql</li>
                <li>Git</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className={Styles["project"]}>
              <h2>PROJECTS</h2>
              <div className={Styles["item"]}>
                <h4>Website shopping</h4>
                <div className={Styles["time"]}>2020</div>
                <div className={Styles["web"]}>www.lundevweb.com</div>
                <div className={Styles["location"]}>Frond-end Developer</div>
              </div>

              <div className={Styles["item"]}>
                <h4>Website shopping</h4>
                <div className={Styles["time"]}>2020</div>
                <div className={Styles["web"]}>www.lundevweb.com</div>
                <div className={Styles["location"]}>Frond-end Developer</div>
                <div className={Styles["des"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consequatur amet sed, est eum facilis repellendus atque
                  perspiciatis iste porro nobis autem explicabo expedita fugiat
                  nostrum. Eveniet eum autem culpa!
                  <ul>
                    <li>Lorem ipsum dolordolores.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur, dolores.
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
                  </ul>
                </div>
              </div>

              <div className={Styles["item"]}>
                <h4>Website shopping</h4>
                <div className={Styles["time"]}>2020</div>
                <div className={Styles["web"]}>www.lundevweb.com</div>
                <div className={Styles["location"]}>Frond-end Developer</div>
                <div className={Styles["des"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consequatur amet sed, est eum facilis repellendus atque
                  perspiciatis iste porro nobis autem explicabo expedita fugiat
                  nostrum. Eveniet eum autem culpa!
                  <ul>
                    <li>Lorem ipsum dolordolores.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur, dolores.
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template01Download;
