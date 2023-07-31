import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Styles from "../styles/home.module.css";
import { Grid, Box } from "@mui/material";
import OverviewBlock from "../components/OverviewBlock/OverviewBlock";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import CarreerGoalsBlock from "../components/CarreerGoalsBlock/CarreerGoalsBlock";
import ExperiencesBlock from "../components/Experiences/ExperiencesBlock";
import EducationBlock from "../components/EducationBlock/EducationBlock";
import SkillBlock from "../components/SkillBlock/SkillBlock";
import LanguageBlock from "../components/LanguageBlock/LanguageBlock";
import RefereeBlock from "../components/RefereeBlock/RefereeBlock";
import JobBlock from "../components/JobBlock/JobBlock";
import customTheme from "../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Template01 from "../components/CanvasTemplate/Template01/Template01";
import ProjectBlock from "../components/ProjectBlock/ProjectBlock";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  // useREf for template download
  const cvDownloadRef = useRef();

  const handleGeneratePdf = (filename) => {
    const input = cvDownloadRef.current;

    // Cải thiện chất lượng của ảnh bằng cách tăng tỷ lệ của canvas
    const scale = 2; // Tùy chỉnh tỷ lệ tại đây, ví dụ: 1, 1.5, 2, 3, ...
    const canvasWidth = input.offsetWidth;
    const canvasHeight = input.offsetHeight;
    const scaledWidth = canvasWidth * scale;
    const scaledHeight = canvasHeight * scale;

    html2canvas(input, { scale }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = scaledWidth * 0.264583; // Convert px to mm (1 px = 0.264583 mm)
      const pdfHeight = scaledHeight * 0.264583;
      const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight], true);
      const imgWidth = pdfWidth;
      const imgHeight = (scaledHeight * pdfWidth) / scaledWidth;
      const imgX = 0;
      const imgY = 0;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);
      let name = filename + " -CV";
      pdf.save(name);
    });
  };

  // States
  const [surName, setSurname] = useState("Họ và");
  const [lastName, setLastname] = useState("Tên");
  const [position, setPosition] = useState("Chức danh");
  const [level, setLevel] = useState("Cấp độ");
  const [dialingCode, setDialingCode] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("");
  const [email, setEmail] = useState("Email");
  const [birthDay, setBirthDay] = useState("Ngày sinh");
  const [nation, setNation] = useState("Quốc gia");
  const [address, setAddress] = useState("Địa chỉ");
  const [introduction, setIntroduction] = useState("Giới thiệu");
  const [avatarSrc, setAtavarSrc] = useState("https://i.imgur.com/IY0fVMm.png");
  const [skillList, setSkillList] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [reference, setReference] = useState({
    name: "Họ và tên",
    position: "Chức danh",
    company: "Công ty",
    email: "Email",
    dialingCode: "",
    phone: "Số điện thoại",
  });
  const [experience, setExperience] = useState({
    exPosition: "Chức danh",
    fromMonth: "Từ tháng",
    toMonth: "Tới tháng",
    exCompany: "Tên công ty",
    desc: "Mô tả",
  });
  const [educations, setEducations] = useState([]);
  const [projectList, setProjectList] = useState([]);

  // States for Dialog and avatar source
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  // Callback functions for avatar dialog
  const handlingOpenDialog = () => {
    setIsOpenDialog(true);
  };
  const handlingCloseDialog = () => {
    setIsOpenDialog(false);
  };
  const handlingChangeAvatarSrc = (src) => {
    setAtavarSrc(src);
  };
  const handlingDeleteAvatarSrc = (src) => {
    setAtavarSrc("https://i.imgur.com/IY0fVMm.png");
  };

  // Callback functions
  const updateSurName = (surName) => {
    setSurname(surName);
  };

  const updateLastName = (lastName) => {
    setLastname(lastName);
  };

  const updatePosition = (position) => {
    setPosition(position);
  };

  const updateBirthday = (birthDay) => {
    setBirthDay(birthDay);
  };

  const updateDialingCode = (dialingCode) => {
    setDialingCode(dialingCode);
  };

  const updatePhoneNumb = (phoneNumb) => {
    setPhoneNumb(phoneNumb);
  };

  const updateEmail = (email) => {
    setEmail(email);
  };

  const updateNation = (nation) => {
    setNation(nation);
  };
  const updateAddress = (address) => {
    setAddress(address);
  };

  const updateReference = (value) => {
    setReference(value);
  };

  const updateIntroduction = (introduction) => {
    setIntroduction(introduction);
  };

  const updateExperience = (experience) => {
    setExperience(experience);
  };

  const updateEducations = (edu) => {
    setEducations(() => {
      educations.push(edu);
      let tempEducations = [...educations];
      return tempEducations;
    });
  };

  const deleteEducations = (keyValue) => {
    setEducations(() => {
      let tempEducations = educations.filter((edu) => {
        return edu.id != keyValue;
      });
      return tempEducations;
    });
  };

  const editEducations = (key, major, school, fromMonth, toMonth, desc) => {
    setEducations(() => {
      const tempEducations = educations.map((edu) => {
        if (edu.id == key) {
          let newItem = {
            ...edu,
            major: major,
            school: school,
            fromMonth: fromMonth,
            toMonth: toMonth,
            desc: desc,
          };
          return newItem;
        } else {
          return edu;
        }
      });
      return tempEducations;
    });
  };

  const updateLanguages = (language) => {
    setLanguages(() => {
      languages.push(language);
      let tempLanguages = [...languages];
      return tempLanguages;
    });
  };

  const deleteLanguagesItem = (keyValue) => {
    setLanguages(() => {
      let tempLanguages = languages.filter((lang) => {
        return lang.id != keyValue;
      });
      return tempLanguages;
    });
  };

  const updateSkillList = (value) => {
    setSkillList(() => {
      skillList.push(value);
      let newSkillList = [...skillList];
      return newSkillList;
    });
  };

  const deleteItemInSkillList = (keyValue) => {
    setSkillList(() => {
      let tempSkillList = skillList.filter((skill) => {
        return skill.key != keyValue;
      });
      return tempSkillList;
    });
  };

  const editItemSkillList = (key, name, rate) => {
    setSkillList(() => {
      const tempSkillList = skillList.map((skill) => {
        if (skill.key == key) {
          let newItem = { ...skill, name: name, rate: rate };
          return newItem;
        } else {
          return skill;
        }
      });
      return tempSkillList;
    });
  };

  const updateProjectList = (project) => {
    setProjectList(() => {
      projectList.push(project);
      let newProjectList = [...projectList];
      return newProjectList;
    });
  };

  const deleteItemProjectList = (keyValue) => {
    setProjectList(() => {
      let tempProjectList = projectList.filter((project) => {
        return project.key != keyValue;
      });
      return tempProjectList;
    });
  };

  const editProjectList = (editedProject) => {
    setProjectList(() => {
      const tempProjectList = projectList.map((project) => {
        if (project.key == editedProject.key) {
          let newProject = { ...editedProject };
          return newProject;
        } else {
          return project;
        }
      });
      return tempProjectList;
    });
  };

  useEffect(() => {
    console.log(educations);
  }, [educations]);

  return (
    <>
      <Head>
        <title>WowCV - Cập nhật thông tin chi tiết</title>
      </Head>
      <main className={Styles["app-container"]}>
        <ThemeProvider theme={customTheme}>
          <Grid container spacing={2}>
            {/* Left side */}
            <Grid item xs={8}>
              <OverviewBlock
                surName={surName}
                lastName={lastName}
                position={position}
                handlingCloseDialog={handlingCloseDialog}
                isOpenDialog={isOpenDialog}
                avatarSrc={avatarSrc}
                onDeleteAvatarSrc={handlingDeleteAvatarSrc}
                onChangeAvatarSrc={handlingChangeAvatarSrc}
                onClickOpenDialog={handlingOpenDialog}
                onChangeSurName={updateSurName}
                onChangeLastName={updateLastName}
                onChangePosition={updatePosition}
              />
              <ProfileBlock
                dialingCode={dialingCode}
                phoneNumb={phoneNumb}
                onChangeDialingCode={updateDialingCode}
                onChangePhoneNumb={updatePhoneNumb}
                onChangeEmail={updateEmail}
                onChangeBirtday={updateBirthday}
                onChangeNation={updateNation}
                onChangeAddress={updateAddress}
              />
              <ExperiencesBlock
                experience={experience}
                onChangeExperience={updateExperience}
              />
              <CarreerGoalsBlock
                onChangeIntroduction={updateIntroduction}
                introduction={introduction}
              />

              <SkillBlock
                onUpdateSkillList={updateSkillList}
                skillList={skillList}
                onRemoveSkill={deleteItemInSkillList}
                onEditSkillItem={editItemSkillList}
              />
              <LanguageBlock
                onChangeLanguage={updateLanguages}
                onDeleteLanguageItem={deleteLanguagesItem}
                languages={languages}
              />
              <EducationBlock
                educations={educations}
                onUpdateEducation={updateEducations}
                onDeleteEducationItem={deleteEducations}
                onEditEducations={editEducations}
              />
              <RefereeBlock
                reference={reference}
                onUpdateReference={updateReference}
              />
              <ProjectBlock
                projects={projectList}
                onUpdateProjectList={updateProjectList}
                onDeleteProjectList={deleteItemProjectList}
                onEditProjectList={editProjectList}
              />
            </Grid>
            {/* RightSide */}
            <Grid item xs={4}>
              <Template01
                surName={surName}
                lastName={lastName}
                position={position}
                level={level}
                dialingCode={dialingCode}
                phoneNumb={phoneNumb}
                email={email}
                birthDay={birthDay}
                nation={nation}
                introduction={introduction}
                address={address}
                experience={experience}
                skillList={skillList}
                languages={languages}
                avatarSrc={avatarSrc}
                educations={educations}
                projects={projectList}
                reference={reference}
                cvRef={cvDownloadRef}
              />

              <div className={Styles["button-wrapper"]}>
                <div className={Styles["button-card"]}>
                  <button
                    onClick={() => handleGeneratePdf(`${surName}-${lastName}`)}
                    className={Styles["btn-luu"]}
                  >
                    Tải CV
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
