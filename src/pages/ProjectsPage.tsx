import "../style/pages/ProjectPage.scss";
import memory from "/images/memoryPicture.png";
import ticTacToe from "/images/tictactoePicture.png";
import calculator from "/images/calculatorPicture.png";
import listPic from "/images/listPicture.jpg";
// import mapPic from "/images/mapPicture.jpg";
// import speedometerPic from "/images/speedometerPicture.jpg";
import ProjectSlide from "../components/ProjectSlide";
import react from "/icons/reactjs-svgrepo-com.svg";
import html from "/icons/html-svgrepo-com.svg";
import css from "/icons/css3-svgrepo-com.svg";
import sass from "/icons/sass-svgrepo-com.svg";
import javaScript from "/icons/javascript-logo-svgrepo-com.svg";
import typeScript from "/icons/typescript-icon-svgrepo-com.svg";

export type ProjectType = {
  obs: string;
  imgUrls: string[];
  name: string;
  desc: string;
  date: string;
  techUrls: string[];
  links: {
    webSite: string;
    code: string;
  };
};

const projects: ProjectType[] = [
  {
    obs: "better experience on mobile",
    imgUrls: [listPic],
    name: "Ride app",
    desc: "Developed a web application to track and visualize running routes in real-time. Utilized the Geolocation API to accurately capture user location data and Leaflet library to create interactive maps displaying the running path. Implemented algorithms to calculate and display real-time running speed.",
    date: "Jun - 2024",
    techUrls: [react, typeScript, sass],
    links: {
      webSite: "https://phfernandesmc.github.io/appRide/",
      code: "https://github.com/PhFernandesMc/appRide",
    },
  },
  {
    obs: "",
    imgUrls: [calculator],
    name: "Calculator",
    desc: "This JavaScript project implements a functional calculator using object-oriented principles. The Calculator class encapsulates core functionalities like number input, operation selection, and calculation. Key features include clear and delete functions, basic arithmetic operations, and a user-friendly display. The code emphasizes modularity, error handling, and a clean interface. Potential improvements include additional operations, memory functions, and enhanced display features.",
    date: "April - 2024",
    techUrls: [html, css, javaScript],
    links: {
      webSite: "https://phfernandesmc.github.io/My-Calculator/",
      code: "https://github.com/PhFernandesMc/My-Calculator",
    },
  },
  {
    obs: "",
    imgUrls: [ticTacToe],
    name: "Tic-tac-toe game",
    desc: `My Tic Tac Toe game provides a classic two-player experience. Players take turns marking spaces on a 3x3 grid with "X" or "O". The first player to get three in a row wins. To improve the game's logic, I implemented a function to check for win conditions more efficiently by analyzing only relevant board positions after each move, rather than examining all possible win states every time. This optimization significantly enhanced performance, especially for larger board sizes.`,
    date: "March - 2024",
    techUrls: [html, css, javaScript],
    links: {
      webSite: "https://phfernandesmc.github.io/My-tic-tac-toe/",
      code: "https://github.com/PhFernandesMc/My-tic-tac-toe",
    },
  },
  {
    obs: "",
    imgUrls: [memory],
    name: "Memory game",
    desc: "I embarked on building a memory game to solidify my understanding of JavaScript fundamentals. I focused on DOM manipulation to create and interact with the game board. Constructing the card objects and their behavior involved working with arrays and object-oriented concepts. The game logic presented an opportunity to apply conditional statements and functions effectively.",
    date: "February - 2024",
    techUrls: [html, css, javaScript],
    links: {
      webSite: "https://phfernandesmc.github.io/My-memory-game/",
      code: "https://github.com/PhFernandesMc/My-memory-game",
    },
  },
];

const ProjectsPage = () => {
  return (
    <div className="project-page">
      <h1 className="title">My experience</h1>
      <div className="project-container">
        {projects.map((project, index) => {
          return (
            <ProjectSlide
              key={index}
              project={project}
              isTextOnTheRight={index % 2 !== 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
