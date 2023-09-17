import React, { useRef } from "react";
import Styles from "./styles/home.module.css";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Head from "next/head";

function Index() {
  // Ref for cv template routes
  const linkTemplate01Ref = useRef();
  const linkTemplate02Ref = useRef();

  // Handling click for Cv Template div

  const handlingClickCvTemplate01 = () => {
    linkTemplate01Ref.current.click();
  };

  const handlingClickCvTemplate02 = () => {
    linkTemplate02Ref.current.click();
  };

  return (
    <>
      <Head>
        <title>WowCV - Cập nhật thông tin chi tiết</title>
      </Head>
      <main className={Styles["app-container"]}>
        <div className={Styles["header-container"]}>
          <div className={Styles["header-title"]}>Choose your CV</div>
          <div className={Styles["header-desc"]}>
            Make a great first impression and land the interview with our
            collection of attractive and functional CV templates that can be
            modified to suit any position.
          </div>
          <div className={Styles["cv-menu-container"]}>
            <div
              className={Styles["cv-item"]}
              onClick={handlingClickCvTemplate01}
            >
              <div className={Styles["img-preview-wrapper"]}>
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/heSFIiJ.png"
                  alt=""
                ></img>
              </div>
              <Link href="/design/t1" ref={linkTemplate01Ref}>
                Home
              </Link>
            </div>
            <div
              className={Styles["cv-item"]}
              onClick={handlingClickCvTemplate02}
            >
              <div className={Styles["img-preview-wrapper"]}>
                <img
                  className={Styles["img-preview"]}
                  src="https://i.imgur.com/LDmfLzE.png"
                  alt=""
                ></img>
              </div>
              <Link href="/design/t2" ref={linkTemplate02Ref}>
                Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Index;
