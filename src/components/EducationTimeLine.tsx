import SchoolIcon from "@mui/icons-material/School";
import "../style/components/EducationTimeLine.scss";

const EducationTimeLine = () => {
  return (
    <div className="timeline">
      <div className="timeline-container left-container">
        <SchoolIcon id="education-icon" />
        <div className="text-box">
          <h2>Cornerstone College</h2>
          <p>Web development</p>
          <small>2023 - Current enrolled</small>
          <p>
            My time at Cornerstone has been instrumental in expanding my web
            development knowledge. I've gained valuable experience with diverse
            technologies like TypeScript, Bootstrap, Git, Astro, jQuery, and
            SCSS. Looking ahead, I'm eager to delve into React and Node.js,
            further solidifying my skillset.
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="timeline-container right-container">
        <SchoolIcon id="education-icon" />
        <div className="text-box">
          <h2>Prog BR</h2>
          <p>Web development (online)</p>
          <small>2023 - 2023</small>
          <p>
            I am a passionate web developer with a foundation in HTML5, CSS3,
            and JavaScript. I began my journey by taking an online course where
            I built interactive projects like a calculator, memory game, and
            Tic-Tac-Toe.
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="timeline-container left-container">
        <SchoolIcon id="education-icon" />
        <div className="text-box">
          <h2>ITTTI Vancouver</h2>
          <p>English Advanced certificate</p>
          <small>2023 - 2023</small>
          <p>
            Seeking to elevate my communication and propel my career in the
            global IT landscape, I immersed myself in an English-speaking
            environment at ITTTI. This empowered seamless collaboration and
            equipped me with the advanced skills I desired.
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="timeline-container right-container">
        <SchoolIcon id="education-icon" />
        <div className="text-box">
          <h2>Etec de Cubatão</h2>
          <p>high-school</p>
          <small>2020 - 2022</small>
          <p>
            My high school's integrated logistics program ignited my interest in
            supply chains. The acquired skills in resource allocation and
            communication proved valuable in IT, aiding data flow optimization,
            server infrastructure management, and seamless team collaboration.
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeLine;
