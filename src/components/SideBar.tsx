import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../style/components/Sidebar.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="fractions">
        <h1>Hi, I'm Pedro</h1>
      </div>
      <div className="fractions-2">
        <InstagramIcon className='contact-icons'/>
        <LinkedInIcon className='contact-icons'/>
        <GitHubIcon className='contact-icons'/>
      </div>
      <div className="fractions-3"></div>
    </div>
  );
};

export default SideBar;
