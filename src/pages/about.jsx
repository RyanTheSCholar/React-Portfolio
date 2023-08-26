/* eslint-disable react/no-unescaped-entities */
// have a image above the text that youre writing
// then some about me text me
import Avatar from "../../src/assets/avatar.png"
function About() {
  return (
    <div className="aboutContainer">
        <div className="avatarContainer">
        <img src={Avatar} alt="avatar" />
        </div>
        <div className="about">
            <p className="pTags">
        Greetings! I'm a passionate and dedicated web developer with a wide
        array of skills in both front-end and back-end technologies. On the
        front-end, I'm well-versed in crafting captivating and user-friendly
        interfaces using HTML, CSS, and JavaScript. I bring life to websites
        with dynamic features and seamless interactions through tools like
        JQuery, React, Bootstrap, and Bulma. Transitioning to the back-end
        realm, I possess proficiency in building robust server-side
        applications. 
      </p>
      <p className="pTags">My expertise lies in creating efficient RESTful APIs that
        facilitate smooth communication between the front-end and back-end. I'm
        skilled in Node.js and Express.js, utilizing their power to develop
        scalable and responsive back-end systems. When it comes to databases, I
        have a strong command over MySQL, Sequelize for relational databases,
        and MongoDB for NoSQL environments. This enables me to design,
        implement, and manage database structures effectively, ensuring data
        integrity and optimal performance. </p>
      <p className="pTags">With a blend of creative flair and technical acumen, I strive to deliver seamless and engaging web
        experiences. My journey as a developer is driven by an insatiable
        curiosity and a commitment to staying at the forefront of industry
        trends. Let's collaborate to transform your digital ideas into stunning,
        functional realities!</p>
        </div>
      
    </div>
  );
}

export default About;
