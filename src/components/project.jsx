import Github from "../assets/Githubsvg";
import Website from "../assets/websiteIcon";
/* eslint-disable react/prop-types */
function Project({ linkToWebsite, githubRepo, image, projectName }) {
  return (
    <div className="projectCard pulsate-bck">
      <div className="image-holder">
        <img
          className="marg-bot"
          id="projectIMG"
          src={image}
          alt="projectIMG"
        />
        
      </div>
      <div className="NT">
        <h2 className="marg-bot">{projectName}</h2>
        <p className="size marg-bot">
          Read about this project through the github icon
        </p>
        <div className="iconContainer">
          <a
            className="marg-bot marg-right"
            id="websiteIcon"
            href={linkToWebsite}
          >
            <Website />
          </a>
          <a className="marg-bot marg-right" id="githubIcon" href={githubRepo}>
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
