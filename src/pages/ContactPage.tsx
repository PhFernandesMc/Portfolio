import "../style/pages/ContactPage.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { FormEvent, useState } from "react";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    formData.append("access_key", "adb4c288-cdbf-4d82-bd42-a53a355ab3ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-page">
      <h1 className="title">Let's getting touch</h1>
      <div className="contact-main-container">
        <div className="contact-left-container">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="inputs-container">
              <label htmlFor="input-name">Type your name</label>
              <input id="input-name" type="text" name="name" required />
            </div>
            <div className="inputs-container">
              <label htmlFor="input-email">Type your email</label>
              <input id="input-email" type="email" name="email" required />
            </div>
            <div className="inputs-container">
              <label htmlFor="input-message">Type your message</label>
              <textarea id="input-message" name="message" required></textarea>
            </div>
            <button className="form-btn" type="submit">
              Submit Form
            </button>
          </form>
          <span className="form-result">{result}</span>
        </div>
        <div className="contact-right-container">
          <ul className="contact-list">
            <a
              href="https://www.linkedin.com/in/pedro-fernandes-9145732b3/"
              target="_blank"
            >
              <li className="contact-items">
                <LinkedInIcon className="contact-icons" />
                <p>LinkedIn - Pedro Fernandes</p>
              </li>
            </a>
            <a href="https://github.com/PhFernandesMc" target="_blank">
              <li className="contact-items">
                <GitHubIcon className="contact-icons" />
                <p>GitHub - phfernandesmc</p>
              </li>
            </a>
            <a href="https://www.instagram.com/phfernandesmc/" target="_blank">
              <li className="contact-items">
                <InstagramIcon className="contact-icons" />
                <p>Instagram - phfernandesmc</p>
              </li>
            </a>
            <a href="tel:+1-778-723-0142">
              <li className="contact-items">
                <PhoneAndroidIcon />
                <p>+1 {"(778)"} 723 - 0142</p>
              </li>
            </a>
            <a href="mailto:phfernandesmc@gmail.com">
              <li className="contact-items">
                <AlternateEmailIcon />
                <p>phfernandesmc@gmail.com</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
