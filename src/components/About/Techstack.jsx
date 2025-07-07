import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaPython } from "react-icons/fa";
import { SiDotnet, SiBlazor, SiReact, SiPostgresql, SiRabbitmq, SiDocker } from "react-icons/si";

function Techstack() {	
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<FaPython/>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiDotnet/>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiBlazor />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
			</Col>			
			<Col xs={4} md={2} className="tech-icons">
				<SiDocker />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRabbitmq />
			</Col>
		</Row>
	);
}

export default Techstack;