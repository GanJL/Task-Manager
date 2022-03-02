import github from "../icons/iconmonstr-github-1.svg"
import instagram from "../icons/iconmonstr-instagram-11.svg"
import mail from "../icons/iconmonstr-email-2.svg"
import user from "../icons/iconmonstr-user-20.svg"


const Footer = () => {

    const githubURL = "https://github.com/GanJL/Task-Manager"
    const instagramURL = "https://www.instagram.com/gan_jl/?hl=en"
    const mailURL = "mailto:gan.jianlin@gmail.com"
    const meURL = "https://ganjianlin.com"

    return (
          <div className="container footer">
            <div className="row">
              <div className="col text-end py-3 ">Task Manager by Jian Lin</div>
              <div className="col text-start py-3">
                  <a href={githubURL}><img className="me-2" src={github}/></a>
                  <a href={instagramURL}><img className="me-2" src={instagram}/></a>
                  <a href={mailURL}><img className="me-2" src={mail}/></a>
                  <a href="#"><img className="me-2" src={user}/></a>

              </div>
            </div>
          </div>
      );
};

export default Footer;