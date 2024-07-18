import "../style/components/Profile.scss";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

const Profile = () => {
  return (
    <div className="profile-main-container">
      <div className="profile-upper-container">
        <div className="profile-upper-left-container"></div>
        <div className="profile-upper-right-container"></div>
      </div>
      <div className="profile-under-container">
        <div className="profile-under-left-container">
          <ul className="profile-list-categories">
            <li className="profile-items-categories">
              <SportsVolleyballIcon/>
              <p>Hobbies</p>
            </li>
            <li className="profile-items-categories">
              <ModeStandbyIcon/>
              <p>Goals</p>
            </li>
            <li className="profile-items-categories">
              <CodeIcon/>
              <p>Web Developer</p>
            </li>
            <li className="profile-items-categories">
              <SchoolIcon />
              <p>Student</p>
            </li>
          </ul>
        </div>
        <div className="profile-under-right-container">
          <ul className="profile-list">
            <li className="profile-items">
              <p>
                Since 2020, I've been fascinated by web development,
                particularly the challenge of crafting efficient solutions to
                complex problems. In one of my projects, I built a weather app
                that showcased my ability to: Work with APIs, Build user
                interfaces, Problem-solve.
              </p>
            </li>
            <li className="profile-items">
              <p>
                Outside of work, I joy to practice some activities like cycling
                and volleyball. These activities allow me to clear my head and
                return to projects with fresh perspectives.
              </p>
            </li>
            <li className="profile-items">
              <p>
                Contributing to a fast-paced, collaborative team is crucial step
                in my journey to became a valuable developer. My main goal now
                is learning from experienced professionals to improve my skills
                in problem-solving, communication and logic.
              </p>
            </li>
            <li className="profile-items">
              <p>
                I'm excited to connect with teams looking for a passionate and
                quick learner who thrives in collaborative environments. Let's
                discuss how I can contribute to your success!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
