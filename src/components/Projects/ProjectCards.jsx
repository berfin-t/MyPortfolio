import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            {/*<Card.Img variant="top" src={props.imgPath} alt="card-img" />*/}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.githubLink} target="_blank">
                Github
                </Button>
                {"\n"}
                {"\n"}
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                >
                    Demo
                    </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;