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
                            title={<span className="purple">CRM</span>}
                            description={
                                <>
                                    <br />
                                    Bu proje, ABP Framework ile geliştirilmiş bir Müşteri İlişkileri Yönetimi uygulamasıdır.
                                    Blazor tabanlı bir arayüze sahiptir ve ABP Framework'ün modüler yapısını kullanmaktadır.
                                    <br/>
                                </>
                            }
                            githubLink="https://github.com/berfin-t/Crm"
                            demoLink="https://github.com/berfin-t/Crm" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title={<span className="purple">Dogus Teknoloji Bitirme Projesi</span>}
                            description={
                                <>
                                    <br />
                                    Bu proje, Doğuş Teknoloji Bootcamp bitirme projesi olarak geliştirilmiştir.
                                    Blog uygulaması, SQL Server veritabanını kullanarak blog verilerini yönetmek için bir çözüm sunmaktadır.
                                    <br />
                                </>
                            }
                            githubLink="https://github.com/berfin-t/Dogus-Teknoloji-Bitirme-Projesi"
                            demoLink="https://github.com/berfin-t/Dogus-Teknoloji-Bitirme-Projesi" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title={<span className="purple">Ekşi Sözlük Klonu</span>}
                            description={
                                <>
                                    <br />
                                    Bu proje, EksiSozlukClone adını taşıyan bir sosyal içerik platformu klonudur.
                                    Kullanıcıların giriş yaparak içerik oluşturabildiği, yorum yapabildiği, oylama ve favori ekleme gibi etkileşimlerde bulunabildiği bir sistem sunar.
                                    <br />
                                </>
                            }
                            githubLink="https://github.com/berfin-t/EksiSozlukClone"
                            demoLink="https://github.com/berfin-t/EksiSozlukClone" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            title={<span className="purple">"Gelişmiş Bankacılık API'si"</span>} 
                        description={
                            <>
                                <br />
                                Günümüzde bankacılık hizmetleri giderek daha dijital hale geliyor ve müşteri beklentileri sürekli olarak gelişiyor.
                                Bu değişim, bankacılık sistemlerinin güvenli, etkili ve kullanıcı dostu web hizmetleriyle donatılmasını gerektiriyor.
                                Bu proje, .NET platformunda RESTful API'ler geliştirmeyi hedefliyor.
                                <br />
                            </>
                        }
                            githubLink="https://github.com/berfin-t/Fimple.Net-Bootcamp-FinalCase"
                            demoLink="https://github.com/berfin-t/Fimple.Net-Bootcamp-FinalCase" />
                    </Col>

                </Row>
            </Container>            
        </Container>
    );
}

export default Projects;
