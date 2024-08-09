import { ProjectType } from "../pages/ProjectsPage";

type projectSlideType = {
  project: ProjectType;
  isTextOnTheRight: boolean;
};

const ProjectSlide = ({ project, isTextOnTheRight }: projectSlideType) => {
  return (
    <div className="project-slide-container">
      <div className="project-info-container">
        <div className="project-info">
          <a href={project.links.webSite} target="_blank">
            <h1 className="project-title">
              {project.name}
              {project.obs && <p className="project-obj">* {project.obs} </p>}
            </h1>
          </a>
          <h2 className="project-date">
            <span>Release date:</span> {project.date}
          </h2>
          <p className="project-desc">{project.desc}</p>
          <div className="project-techs">
            <h2>Tech used in this project: </h2>
            <ul className="project-techs-list">
              {project.techUrls.map((techUrl, index) => {
                return (
                  <li className="project-techs-items" key={index}>
                    <img className="" src={techUrl} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="button-container">
          <a href={project.links.webSite} className="btn-links" target="_blank">
            <button className="project-btn">check webSite</button>
          </a>
          <a href={project.links.code} className="btn-links" target="_blank">
            <button className="project-btn"> check code</button>
          </a>
        </div>
      </div>
      <div
        className={`project-img-container ${
          isTextOnTheRight ? "container-right" : ""
        }`}
      >
        {project.imgUrls.length > 1 ? (
          <div className="slider-container">
            <div className="slider-btn-container"></div>
            <div className="test"></div>
            {project.imgUrls.map((imgUrl) => {
              return (
                <a href={project.links.webSite} target="_blank">
                  <img
                    className={`project-img slider-img ${
                      isTextOnTheRight ? "container-right" : ""
                    }`}
                    src={imgUrl}
                    alt=""
                  />
                </a>
              );
            })}
          </div>
        ) : (
          <a href={project.links.webSite} target="_blank">
            <img
              className={`project-img  ${
                isTextOnTheRight ? "container-right" : ""
              }`}
              src={project.imgUrls[0]}
              alt=""
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectSlide;
