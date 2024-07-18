import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RoomIcon from "@mui/icons-material/Room";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import profile from "/images/profile.png";
import "../style/components/Sidebar.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="fractions f1">
        <h1>Hi, I'm Pedro</h1>
        <a
          href="https://www.linkedin.com/in/pedro-fernandes-9145732b3/"
          target="_blank"
        >
          <img className="profile-img" src={profile} alt="" />
        </a>
      </div>
      <div className="fractions f2">
        <ul className="link-list">
          <a
            href="https://www.linkedin.com/in/pedro-fernandes-9145732b3/"
            target="_blank"
          >
            <li className="link-list-items">
              <LinkedInIcon className="contact-icons" />
              <p>LinkedIn - Pedro Fernandes</p>
            </li>
          </a>
          <a href="https://github.com/PhFernandesMc" target="_blank">
            <li className="link-list-items">
              <GitHubIcon className="contact-icons" />
              <p>GitHub - phfernandesmc</p>
            </li>
          </a>
          <a href="https://www.instagram.com/phfernandesmc/" target="_blank">
            <li className="link-list-items">
              <InstagramIcon className="contact-icons" />
              <p>Instagram - phfernandesmc</p>
            </li>
          </a>
        </ul>
      </div>
      <div className="fractions f3">
        <ul className="list-moreDetails">
          <li className="list-moreDetails-items">
            <RoomIcon />
            <p>Burnaby - CA</p>
          </li>
          <li className="list-moreDetails-items">
            <PhoneAndroidIcon />
            <p>+1 {"(778)"} 723 - 0142</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
