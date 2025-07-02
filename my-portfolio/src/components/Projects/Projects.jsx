import React from "react";
import ProjectCards from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">Projelerim </strong>
                </h1>                
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">
                    <ProjectCards
                        title="Deneme"
                        description="Deneme"
                        githubLink="https://github.com/berfin-t"
                            demoLink="https://github.com/berfin-t" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title="Deneme"
                            description="Deneme"
                            githubLink="https://github.com/berfin-t"
                            demoLink="https://github.com/berfin-t" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title="Deneme"
                            description="Deneme"
                            githubLink="https://github.com/berfin-t"
                            demoLink="https://github.com/berfin-t" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title="Deneme"
                            description="Deneme"
                            githubLink="https://github.com/berfin-t"
                            demoLink="https://github.com/berfin-t" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title="Deneme"
                            description="Deneme"
                            githubLink="https://github.com/berfin-t"
                            demoLink="https://github.com/berfin-t" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title="Deneme"
                            description="Deneme"
                            githubLink="https://github.com/berfin-t"
                            demoLink="https://github.com/berfin-t" />
                    </Col>

                </Row>
            </Container>            
        </Container>
    );
}

export default Projects;
