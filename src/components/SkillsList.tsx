import react from "/icons/reactjs-svgrepo-com.svg";
import html from "/icons/html-svgrepo-com.svg";
import css from "/icons/css3-svgrepo-com.svg";
import sass from "/icons/sass-svgrepo-com.svg";
import next from "/icons/next-js-svgrepo-com.svg";
import node from "/icons/node-js-svgrepo-com.svg";
import java from "/icons/java-svgrepo-com.svg"
import mongo from "/icons/mongo-svgrepo-com.svg";
import typeScript from "/icons/typescript-icon-svgrepo-com.svg";
import javaScript from "/icons/javascript-logo-svgrepo-com.svg";
import bootStrap from "/icons/bootstrap-svgrepo-com.svg";
import git from "/icons/git-svgrepo-com.svg";
import "../style/components/SkillsList.scss";

const SkillsList = () => {
  const imgList: {
    name: string;
    path: string;
  }[] = [
    {
      name: "Html",
      path: html,
    },
    {
      name: "Css",
      path: css,
    },
    {
      name: "JavaScript",
      path: javaScript,
    },
    {
      name: "Sass",
      path: sass,
    },
    {
      name: "BootStrap",
      path: bootStrap,
    },
    {
      name: "TypeScript",
      path: typeScript,
    },
    {
      name: "React.js",
      path: react,
    },
    {
      name: "Next.js",
      path: next,
    },
    {
      name: "Node.js",
      path: node,
    },
    {
      name: "Java",
      path: java
    }, 
    {
      name: "MongoDB",
      path: mongo,
    },
    {
      name: "Git",
      path: git,
    },
  ];

  return (
    <ul className="skills-list">
      {imgList.map((skill, index) => {
        return (
          <li key={index} className="skills-items">
            <div className="skills-container-img">
              <img
                className="skills-img"
                src={skill.path}
                alt={`${skill.name}`}
              />
            </div>
            <p className="skills-name">{skill.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
