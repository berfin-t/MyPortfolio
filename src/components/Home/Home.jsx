import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
//import Type from "./Type";
import HomeAbout from "./HomeAbout";
import homeLogo from "../../assets/img/home-main.png";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            
                            <h1 className="heading-name">
                                Merhaba Ben
                                <strong className="main-name"> Berfin Tek</strong> 👋🏻
                            </h1>
                            <div style={{ padding: 50, textAlign: "left" }}>
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomeAbout/>
        </section>
    );

}

export default Home;