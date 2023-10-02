import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Styles from "../styles/home.module.css";
import { Grid } from "@mui/material";
import OverviewBlock from "../../components/OverviewBlock/OverviewBlock";
import ProfileBlock from "../../components/ProfileBlock/ProfileBlock";
import CarreerGoalsBlock from "../../components/CarreerGoalsBlock/CarreerGoalsBlock";
import EducationBlock from "../../components/EducationBlock/EducationBlock";
import SkillBlock from "../../components/SkillBlock/SkillBlock";
import LanguageBlock from "../../components/LanguageBlock/LanguageBlock";
import RefereeBlock from "../../components/RefereeBlock/RefereeBlock";
import customTheme from "../../Theme/theme";
import { ThemeProvider } from "@mui/material";
import ProjectBlock from "../../components/ProjectBlock/ProjectBlock";
import jsPDF from "jspdf";
import toast, { Toaster } from "react-hot-toast";
import TemplateDownload05 from "../../components/CanvasTemplate/Template05/TemplateDownload05";
import Template05 from "../../components/CanvasTemplate/Template05/Template05";
function App() {
  // useREf for template download
  const cvDownloadRef = useRef();
  // useREf for template download container
  const cvContainerRef = useRef();

  const handleGeneratePdf = async () => {
    // Get height and width of the cv to download

    const height = cvDownloadRef.current.offsetHeight;
    const width = cvDownloadRef.current.offsetWidth;

    // Initialize the jsPDF object fit the cv height
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.html(cvDownloadRef.current, {
      callback: function (doc) {
        let name = surName + "-" + lastName;
        doc.save(name);
      },
    });
  };

  // States
  const [surName, setSurname] = useState("First name");
  const [lastName, setLastname] = useState("Last name");
  const [position, setPosition] = useState("Position");
  const [level, setLevel] = useState("Cấp độ");
  const [dialingCode, setDialingCode] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("Phone");
  const [email, setEmail] = useState("Email");
  const [birthDay, setBirthDay] = useState("Birthday");
  const [nation, setNation] = useState("Nation");
  const [address, setAddress] = useState("Address");
  const [introduction, setIntroduction] = useState("Introduction");
  const [avatarSrc, setAtavarSrc] = useState("https://i.imgur.com/IY0fVMm.png");
  const [skillList, setSkillList] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [reference, setReference] = useState({
    name: "Name",
    position: "Position",
    company: "Company",
    email: "Email",
    dialingCode: "",
    phone: "Phone number",
  });
  const [experience, setExperience] = useState({
    exPosition: "Position",
    expYear: 0,
    exCompany: "Company",
    desc: "Description",
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

  // Toaster message function
  // Avatar Updates
  const notifyUpdateAvtSuccess = () =>
    toast.success("Update image successfully");
  const notifyDeleteAvtSuccess = () =>
    toast.success("Delete image successfully");
  // Skill Updates
  const notifyAddSkillSuccess = () => toast.success("Add skill successfully");
  const notifyDeleteSkillSuccess = () =>
    toast.success("Delete skill successfully");
  const notifyUpdateSkillSuccess = () =>
    toast.success("Update skill successfully");
  // Language Updates
  const notifyAddLanguageSuccess = () =>
    toast.success("Add language successfully");
  const notifyDeleteLanguageSuccess = () =>
    toast.success("Delete language successfully");
  // Education Updates
  const notifyAddEducationSuccess = () =>
    toast.success("Add language successfully");
  const notifyDeleteEducationSuccess = () =>
    toast.success("Delete language successfully");
  const notifyUpdateEducationSuccess = () =>
    toast.success("Update language successfully");
  // Work exp
  const notifyAddProjectSuccess = () =>
    toast.success("Add project successfully");
  const notifyDeleteProjectSuccess = () =>
    toast.success("Delete project successfully");
  const notifyUpdateProjectSuccess = () =>
    toast.success("Update project successfully");

  return (
    <>
      <Head>
        <title>WowCV - Cập nhật thông tin chi tiết</title>
      </Head>
      <main style={{ padding: "16px" }}>
        <div>
          <Toaster
            toastOptions={{
              style: {
                marginTop: "0px",
                backgroundColor: "black",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </div>
        <ThemeProvider theme={customTheme}>
          <Grid container spacing={2}>
            {/* Left side */}
            <Grid item xs={12} sm={6} md={8}>
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
                onClickSave={notifyUpdateAvtSuccess}
                onClickDeleteAvt={notifyDeleteAvtSuccess}
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

              <CarreerGoalsBlock
                onChangeIntroduction={updateIntroduction}
                introduction={introduction}
              />

              <SkillBlock
                onUpdateSkillList={updateSkillList}
                skillList={skillList}
                onRemoveSkill={deleteItemInSkillList}
                onEditSkillItem={editItemSkillList}
                onClickAdd={notifyAddSkillSuccess}
                onClickDelete={notifyDeleteSkillSuccess}
                onClickSave={notifyUpdateSkillSuccess}
              />
              <LanguageBlock
                onChangeLanguage={updateLanguages}
                onDeleteLanguageItem={deleteLanguagesItem}
                languages={languages}
                onClickAdd={notifyAddLanguageSuccess}
                onClickDelete={notifyDeleteLanguageSuccess}
              />
              <EducationBlock
                educations={educations}
                onUpdateEducation={updateEducations}
                onDeleteEducationItem={deleteEducations}
                onEditEducations={editEducations}
                onClickAdd={notifyAddEducationSuccess}
                onClickSave={notifyUpdateEducationSuccess}
                onClickDelete={notifyDeleteEducationSuccess}
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
                onClickAdd={notifyAddProjectSuccess}
                onClickSave={notifyUpdateProjectSuccess}
                onClickDelete={notifyDeleteProjectSuccess}
              />
            </Grid>
            {/* RightSide */}
            <Grid item xs={12} sm={6} md={4}>
              <Template05
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
                    // onClick={() => handleGeneratePdf(`${surName}-${lastName}`)}
                    onClick={handleGeneratePdf}
                    className={Styles["btn-luu"]}
                  >
                    Download CV
                  </button>
                </div>
              </div>

              <div
                className={Styles["cv-Download-container"]}
                ref={cvContainerRef}
              >
                <TemplateDownload05
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
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
