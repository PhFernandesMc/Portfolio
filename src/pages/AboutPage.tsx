import "../style/pages/AboutPage.scss";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import SkillsList from "../components/SkillsList";
import EducationTimeLine from "../components/EducationTimeLine";
import Profile from "../components/Profile";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const AboutPage = () => {
  const [text] = useTypewriter({
    words: [" Pedro Fernandes", " a developer", " a student"],
    typeSpeed: 120,
    deleteSpeed: 80,
    loop: true,
  });

  return (
    <div className="about-page">
      <h1 className="title">
        Hello, I'm
        {text}
        <Cursor />
      </h1>
      <div className="about-container">
        <section className="sections -personal">
          <h1 className="title">
            <PersonIcon /> Profile
          </h1>
          <div className="profile-container">
            <Profile />
          </div>
        </section>
        <section className="sections -skills">
          <h1 className="title">
            <CodeIcon /> Skills
          </h1>
          <div className="skills-container">
            <SkillsList />
          </div>
        </section>
        <section className="sections -education">
          <h1 className="title">
            <SchoolIcon /> Education
          </h1>
          <div className="education-container">
            <EducationTimeLine />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
