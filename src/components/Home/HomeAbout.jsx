import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myAvatar from "../../assets/img/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeAbout() {
	return (
		<Container fluid className="home-about-section" id="home-about">
		<Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Kendimi <span className="purple"> Tanıtayım </span>
            </h1>
                        <p className="home-about-body">
                            <span className="purple">Aydın Adnan Menderes Üniversitesi Bilgisayar Mühendisliği Bölümü</span> 'nden mezun oldum.
                            <br /> <br />
                            <span className="purple">Fullstack</span>'e ilgi duyuyorum.
                            <br /> <br />
                            Şu anda <span className="purple"> .Net Core, Blazor, React </span> üzerinde projeler geliştiriyorum.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
                            <img src={myAvatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BENİ BUL</h1>
            <p>
							Benimle iletişime geçmek isterseniz.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                                    href="https://github.com/berfin-t"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                                    <AiFillGithub />

                </a>
              </li>
              
              <li className="social-icons">
                <a
                                    href="https://www.linkedin.com/in/berfintek/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />

                </a>
              </li>
              <li className="social-icons">
                <a
                                    href="https://www.instagram.com/berfintek/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />

                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
		
		</Container>
	);
}

export default HomeAbout;