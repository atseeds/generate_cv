import React, { useRef } from "react";
import Styles from "./styles/home.module.css";
import Link from "next/link";
import Head from "next/head";

function Index() {
  // Ref for cv template routes
  const linkTemplate01Ref = useRef();
  const linkTemplate02Ref = useRef();
  const linkTemplate03Ref = useRef();
  const linkTemplate04Ref = useRef();
  const linkTemplate05Ref = useRef();

  // Handling click for Cv Template div

  const handlingClickCvTemplate01 = () => {
    linkTemplate01Ref.current.click();
  };

  const handlingClickCvTemplate02 = () => {
    linkTemplate02Ref.current.click();
  };

  const handlingClickCvTemplate03 = () => {
    linkTemplate03Ref.current.click();
  };

  const handlingClickCvTemplate04 = () => {
    linkTemplate04Ref.current.click();
  };

  const handlingClickCvTemplate05 = () => {
    linkTemplate05Ref.current.click();
  };

  return (
    <>
      <Head>
        <title>WowCV - Cập nhật thông tin chi tiết</title>
      </Head>
      <main className={Styles["app-container"]}>
        <div className={Styles["header-and-menu-container"]}>
          <div className={Styles["title-wrapper"]}>Choose your CV</div>
          <div className={Styles["desc-wrapper"]}>
            Each resume template is expertly designed and follows the exact
            “resume rules” hiring managers look for. Stand out and get hired
            faster with field-tested resume templates.
          </div>
          <div className={Styles["cv-menu-container"]}>
            <div className={Styles["cv-item"]}>
              <div
                className={Styles["cv-item-body"]}
                onClick={handlingClickCvTemplate01}
              >
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/5DjZEl7.png"
                  alt=""
                ></img>
                <button className={Styles["use-template-button"]}>
                  <span className={Styles["use-template-button-content"]}>
                    Use This Template
                  </span>
                </button>
              </div>
              <Link
                className={Styles["link"]}
                href={"/design/t1"}
                ref={linkTemplate01Ref}
              ></Link>
            </div>
            <div className={Styles["cv-item"]}>
              <div
                className={Styles["cv-item-body"]}
                onClick={handlingClickCvTemplate02}
              >
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/QCTUjAO.png"
                  alt=""
                ></img>
                <button className={Styles["use-template-button"]}>
                  <span className={Styles["use-template-button-content"]}>
                    Use This Template
                  </span>
                </button>
              </div>
              <Link
                className={Styles["link"]}
                href={"/design/t2"}
                ref={linkTemplate02Ref}
              ></Link>
            </div>
            <div className={Styles["cv-item"]}>
              <div
                className={Styles["cv-item-body"]}
                onClick={handlingClickCvTemplate03}
              >
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/SrRgmAL.png"
                  alt=""
                ></img>
                <button className={Styles["use-template-button"]}>
                  <span className={Styles["use-template-button-content"]}>
                    Use This Template
                  </span>
                </button>
              </div>
              <Link
                className={Styles["link"]}
                href={"/design/t3"}
                ref={linkTemplate03Ref}
              ></Link>
            </div>
            <div className={Styles["cv-item"]}>
              <div
                className={Styles["cv-item-body"]}
                onClick={handlingClickCvTemplate04}
              >
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/Htf9TXe.png"
                  alt=""
                ></img>
                <button className={Styles["use-template-button"]}>
                  <span className={Styles["use-template-button-content"]}>
                    Use This Template
                  </span>
                </button>
              </div>
              <Link
                className={Styles["link"]}
                href={"/design/t4"}
                ref={linkTemplate04Ref}
              ></Link>
            </div>
            <div className={Styles["cv-item"]}>
              <div
                className={Styles["cv-item-body"]}
                onClick={handlingClickCvTemplate05}
              >
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/iRy7u4a.png"
                  alt=""
                ></img>
                <button className={Styles["use-template-button"]}>
                  <span className={Styles["use-template-button-content"]}>
                    Use This Template
                  </span>
                </button>
              </div>
              <Link
                className={Styles["link"]}
                href={"/design/t5"}
                ref={linkTemplate05Ref}
              ></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Index;
