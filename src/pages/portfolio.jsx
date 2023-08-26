// use logic to create your projects using an array of objects
// they said to use 6 total projects/ challenges
import data from "../../data/data.js";
import Project from "../components/project.jsx";
function Portfolio() {
  return (
    <div className="projects">
      {data.map((projectItem) => (
        <Project
          key={projectItem.projectName}
          linkToWebsite={projectItem.linkToWebsite}
          image={projectItem.image}
          projectName={projectItem.projectName}
          githubRepo={projectItem.githubRepo}
        />
      ))}
    </div>
  );
}

export default Portfolio;
