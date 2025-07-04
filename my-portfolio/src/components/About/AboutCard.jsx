import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <ImPointRight /> <span className="purple">Bilgisayar Mühendisliği</span> mezunu ve
                        <span className="purple"> Yönetim Bilişim Sistemleri</span> öğrencisiyim.
                        <br /><br />
                        <ImPointRight /> <span className="purple">C# / .NET Core</span>,<span className="purple"> Blazor</span> ve <span className="purple">React </span>
                        teknolojileri başta olmak üzere, yazılım geliştirme süreçlerine hâkimim.
                        <br /><br />
                        <ImPointRight /> <span className="purple">RESTful API, PostgreSQL, MSSQL, RabbitMQ, Docker </span>ve
                        <span className="purple"> ABP Framework </span>
                        gibi teknolojilerle birçok projede görev aldım.
                        <br /><br />
                        <ImPointRight /> <span className="purple">Veri Bilimi </span>stajları ve Bootcamp tecrübeleri sayesinde
                        <span className="purple"> Python, Makine Öğrenmesi, Veri Analizi ve Görselleştirme</span> konularında da bilgi sahibiyim.
                        <br /><br />
                        <ImPointRight /> <span className="purple">Agile </span>ve <span className="purple">Scrum </span>metodolojilerine hakimim, güçlü problem çözme becerilerimle projelere değer katıyorum.
                        <br /><br />
                        <ImPointRight /> Hem <span className="purple">Backend</span> hem de <span className="purple">Frontend</span> tarafında
                        <span className="purple"> Fullstack</span> geliştirme yapabiliyorum.
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;