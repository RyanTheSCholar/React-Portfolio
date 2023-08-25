import Github from "../assets/Githubsvg";
import Linkedin from "../assets/Linkedinsvg";
import StackOverflow from "../assets/Stackoverflowsvg";

const footerItems = [
    {
        id: 1,
        url:"https://github.com/RyanTheSCholar",
        icon: <Github />
    },
    {
        id: 2,
        url:"https://www.linkedin.com/in/ryan-business-bowen/",
        icon: <Linkedin />
    },
    {   
        id: 3,
        url:"https://stackoverflow.com/users/22443949/ryan-bowen",
        icon: <StackOverflow />
    },
]

function Footer() {
    return(
        <div className="footerContainer">
                {footerItems.map((footerItem) => (
                        <a id="footerItem" key={footerItem.id} href= {footerItem.url}> {footerItem.icon} </a>
                ))}
        </div>
    );
}

export default Footer;