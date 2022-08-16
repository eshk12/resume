import './App.css';
import CustomizedCarousel from "./Components/CustomizedCarousel";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Timeline from "./Components/Timeline";
import information from "./data/Information";

import {GoMarkGithub} from 'react-icons/go';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {SiWhatsapp} from 'react-icons/si';
import {MdAlternateEmail, MdOutlinePhoneIphone} from 'react-icons/md';

const App = () => {
    return (
        <div className="App">
            <div className="ms-3 position-absolute top-0 start-0 github">
                <a
                    href={information.githubLink}
                    target="_blank" rel="noopener noreferrer"
                    title="My GitHub"
                >
                    <GoMarkGithub/>
                </a>
            </div>
            <Container fluid>
                <Row>
                    <Col>
                        <div className={"mt-40"}>
                            <div className={"title"}>
                                {information.fullName}
                            </div>
                            <div className={"sub-title mt-0"}>
                                {information.role}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="full-width-container">
                <div className="about-me mt-90">
                    <Row>
                        <Col sm={12}>
                            <div className="section-title">About me</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{span: 4, offset: 3}} className="mt-5">
                            <div className="section-text ps-4 pe-4">
                                <div className="title">{information.fullName}</div>
                                <div className="sub-title">{information.currentRole}</div>
                                <p className="content">{information.aboutMe}</p>
                            </div>
                        </Col>
                        <Col xl={{span: 1, offset: 1}} className="mt-5 mt-md-0">
                            <img className="profile-img" alt="profile" src={information.profilePic}/>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="full-width-container">
                <div className="portfolio mt-90">
                    <Row>
                        <Col>
                            <div className="section-title">Portfolio</div>
                        </Col>
                    </Row>
                    <Row className="carousel-row">
                        <Col xl={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                            <CustomizedCarousel
                                cards={information.carouselItems(information.carouselItemsContent)}
                                margin="0 auto"
                                offset={2}
                                showArrows={false}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className="skills mt-70">
                    <Row>
                        <Col>
                            <div className="section-title">Skills</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span: 12}}>
                            <Container fluid>
                                <Row>
                                    {
                                        information.skills.map((skill, key) => {
                                            return (
                                                <Col
                                                    key={key}
                                                    xl={{span: 3}}
                                                    className="mb-4 mb-md-0"
                                                >
                                                    <div className="skill">
                                                        <div className={"icon " + skill.bgColor}>
                                                            {skill.icon}
                                                        </div>
                                                        <div className={"title " + skill.textColor}>{skill.title}</div>
                                                        <p className="content">{skill.content}</p>
                                                    </div>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="full-width-container">
                <div className="timeline-container mt-90">
                    <Row>
                        <Col>
                            <Timeline
                                timelines={information.timelines}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className="contact mt-40">
                    <Row>
                        <Col md={12}>
                            <div className="primary-icon"><HiOutlineMailOpen/></div>
                            Feel free to contact at any time
                        </Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col md={4}>
                            <div className="icon"><MdAlternateEmail/></div>
                            <div className="reachOut">Itshakbar@gmail.com</div>
                        </Col>
                        <Col md={4}>
                            <div className="icon"><MdOutlinePhoneIphone/></div>
                            <div className="reachOut">+972.52.3937296</div>
                        </Col>
                        <Col md={4}>
                            <div className="icon"><SiWhatsapp/></div>
                            <div className="reachOut">whatsapp</div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default App;