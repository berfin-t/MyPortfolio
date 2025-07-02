import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from "../../assets/img/home-main.png"
import Particle from '../Particle';
import AboutCard from './AboutCard';
import Techstack from './Techstack';

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
            <Row>
                <Col md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}>
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}><strong className="purple">Berfin Tek </strong>Kimdir?</h1>                  
                        <AboutCard />
                    </Col>
                <Col md={5}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="img-fluid"                >
                    <img src={homeLogo} alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }} />
                </Col>

            </Row>

            <h1 className="project-heading">
            Kullandığım
                    <strong className="purple"> Araçlar</strong></h1>
                <Techstack/>
            </Container>
        </Container>
    );
}

export default About;