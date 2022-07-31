import './App.css';
import {v4 as uuidv4} from "uuid";
import CarouselItem from "./Components/CarouselItem";
import CustomizedCarousel from "./Components/CustomizedCarousel";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
//import Timeline from "./Components/Timeline";
import {IoLogoJavascript} from 'react-icons/io';
import {SiSpring} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {GiDesk} from 'react-icons/gi';
import Timeline from "./Components/Timeline";

const App = () => {
    let cards = [
        {
            key: uuidv4(),
            content: <CarouselItem/>
        },
        {
            key: uuidv4(),
            content: <CarouselItem/>
        },
        {
            key: uuidv4(),
            content: <CarouselItem/>
        },
        {
            key: uuidv4(),
            content: <CarouselItem/>
        },
        {
            key: uuidv4(),
            content: <CarouselItem/>
        },
        {
            key: uuidv4(),
            content: <CarouselItem/>
        },
        {
            key: uuidv4(),
            content: <CarouselItem/>
        }
    ];

    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col>
                        <div className={"mt-40"}>
                            <div className={"title"}>
                                Itzik Barabie
                            </div>
                            <div className={"sub-title mt-0"}>
                                software developer
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
                            <p>A small introduction about myself</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{span: 4, offset: 3}}>
                            <div className="section-text pl-4">
                                <div className="title">Itzik Barabie</div>
                                <div className="sub-title">Backend Developer in Amdocs</div>
                                <p className="content">
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    <br/><br/>
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. <br/>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting,
                                    remaining essentially unchanged. <br/><br/>It was popularised in the 1960s with the
                                    release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </Col>
                        <Col xl={{span: 1, offset: 1}}>
                            <img className="profile-img"
                                 src="https://media-exp1.licdn.com/dms/image/C4E03AQFYyF4MRWiGHw/profile-displayphoto-shrink_800_800/0/1619434456421?e=1664409600&v=beta&t=b2ANMUynOBdvaXecUzpZuR3hGjBzuUxB4yvqcE0Yjs0"/>
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
                        <Col xl={{span: 10, offset: 1}}>
                            <CustomizedCarousel
                                cards={cards}
                                height="800px"
                                width="100%"
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
                        <Col lg={{span:12}}>
                            <Container fluid>
                                <Row>
                                    <Col xl={{span: 3}} className="mb-4 mb-md-0">
                                        <div className="skill">
                                            <div className="icon bg-yellow">
                                                <IoLogoJavascript/>
                                            </div>
                                            <div className="title text-yellow">Front end</div>
                                            <p className="content">
                                                HTML, CSS, JS<br/>
                                                Ajax, JQuery, Bootstrap<br/>
                                                React.js, Swing<br/>

                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={{span: 3}} className="mb-4 mb-md-0">
                                        <div className="skill">
                                            <div className="icon bg-green">
                                                <SiSpring/>
                                            </div>
                                            <div className="title text-green">Backend</div>
                                            <p className="content">
                                                Java<br/>
                                                Node.js<br/>
                                                PHP<br/>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={{span: 3}} className="mb-4 mb-md-0">
                                        <div className="skill">
                                            <div className="icon bg-blue">
                                                <GrMysql/>
                                            </div>
                                            <div className="title text-blue">Database</div>
                                            <p className="content">
                                                Mysql, Oracle SQL<br/>
                                                MongoDB<br/> via Hibernate, Mongoose.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={{span: 3}} className="mb-4 mb-md-0">
                                        <div className="skill">
                                            <div className="icon bg-purple">
                                                <GiDesk/>
                                            </div>
                                            <div className="title text-purple">Work Space</div>
                                            <p className="content">
                                                InteliJ, WebStorm<br/>
                                                DataGrip, GitHub,<br/>
                                                Jenkins, Jira, Linux
                                            </p>
                                        </div>
                                    </Col>
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
                            <Timeline/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
        ;
}

export default App;
{/**/
}