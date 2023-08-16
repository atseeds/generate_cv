import React, { useState } from "react";
import Styles from "./ImageDialogStyle.module.css";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import dynamic from "next/dynamic";
import { Opacity, Preview } from "@mui/icons-material";
const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });
function ImageDialog(props) {
  const sxStyle = {
    "& .MuiDialog-container:hover": {
      cursor: "pointer",
    },
    "& .MuiPaper-root": {
      zIndex: "1002",
      width: "700px",
      cursor: "default",
    },
    "& .MuiTypography-root": {
      padding: "10px 14px 10px 24px",
    },
    "& .MuiDialogActions-root": {
      padding: "24px",
    },
  };
  //Props
  const { isOpenDialog, handlingCloseDialog, onChangeAvatarSrc } = props;

  // Image to preview
  const [imgPreview, setImgPreview] = useState(null);

  const handlingCrop = (view) => {
    setImgPreview(view);
  };
  const handlingOnClosePreviewImg = (view) => setImgPreview(null);

  const handlingClickSave = () => {
    onChangeAvatarSrc(imgPreview);
    handlingOnClosePreviewImg();
    handlingCloseDialog();
    props.onClickSave();
  };
  const handlingClickCancel = () => {
    handlingOnClosePreviewImg();
    handlingCloseDialog();
  };

  return (
    <Dialog open={isOpenDialog} onClose={handlingCloseDialog} sx={sxStyle}>
      <DialogTitle
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {imgPreview ? (
          <div className={Styles["Dialog-Title"]}>Edit Image</div>
        ) : (
          <div className={Styles["Dialog-Title"]}>Update Image</div>
        )}

        <div className={Styles[""]}>
          <IconButton aria-label="delete" onClick={handlingCloseDialog}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className={Styles["avatar-preview-wrapper"]}>
          <div className={Styles["edit-img-wrapper"]}>
            <p className={Styles["custom-previewImg-label"]}>
              Please select the image you desire
            </p>
            <Avatar
              width={"506"}
              height={"302"}
              cropColor="black"
              lineWidth={4}
              backgroundColor={"rgb(153,153,153)"}
              closeIconColor="black"
              shadingColor="#8a7e7d"
              label="Choose your file here"
              borderStyle={{
                border: "3px dashed black",
                opacity: 0.8,
                textAlign: "center",
                padding: "3px",
                boxSizing: "border-box",
              }}
              onClose={handlingOnClosePreviewImg}
              onCrop={handlingCrop}
            />
          </div>
          <div className={Styles["preview-img-wrapper"]}>
            <p className={Styles["custom-previewImg-label"]}>Image Preview</p>
            {imgPreview && (
              <img className={Styles.img} src={imgPreview} alt="ABC" />
            )}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <div className={Styles["button-wrapper"]}>
          <div className={Styles["button-card"]}>
            <button className={Styles["btn-huy"]} onClick={handlingClickCancel}>
              Cancel
            </button>
            {imgPreview && (
              <button className={Styles["btn-luu"]} onClick={handlingClickSave}>
                Save
              </button>
            )}
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}

export default ImageDialog;
