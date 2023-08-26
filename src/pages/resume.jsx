// add a dowloadable resume to your portfolio
// add a list of skills via on the frontend and then on the backend
function Resume() {
  return (
    <div className="resumeContainer">
      <div className="titleContainer">
        <h1 className="Title Red">Resume</h1>
      </div>
      <div className="frontend">
        <h1 className="Title">Front-end Skills</h1>
        <div className="pTags">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>JQuery</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>Bulma</p>
        </div>
      </div>
      <div className="backend">
        <h1 className="Title">Back-end Skills</h1>
        <div className="pTags">
          <p>RESTful APIs</p>
          <p>Node</p>
          <p>Express</p>
          <p>MySQL</p>
          <p>Sequelize</p>
          <p>MongoDB</p>
        </div>
      </div>
      <div className="downloadContainer">
        <a href="https://drive.google.com/file/d/1dyKtRkxE8IVKTTHehctQvG_RmwmWEj1W/view?usp=drive_link" download >
          <button className="download">Download Here</button>
        </a>
      </div>
    </div>
  );
}
export default Resume;
