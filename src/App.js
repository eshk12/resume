import './App.css';
import CustomizedCarousel from "./Components/CustomizedCarousel";
import React, {useEffect, useRef, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Timeline from "./Components/Timeline";
import information from "./data/Information";

import {GoMarkGithub} from 'react-icons/go';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {SiWhatsapp} from 'react-icons/si';
import {BsArrowDownCircle, BsArrowRightShort} from 'react-icons/bs';
import {MdAlternateEmail, MdOutlinePhoneIphone} from 'react-icons/md';

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const intro = useRef();
    const aboutMe = useRef();
    const timeline = useRef();
    const skills = useRef();
    const portfolio = useRef();
    const contact = useRef();

    const [introDetails, setIntroDetails] = useState({})
    const [aboutMeDetails, setAboutMeDetails] = useState({})
    const [timelineDetails, setTimelineDetails] = useState({})
    const [skillsDetails, setSkillsDetails] = useState({})
    const [portfolioDetails, setPortfolioDetails] = useState({})
    const [contactDetails, setContactDetails] = useState({})
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        setIntroDetails({offsetTop: intro.current.offsetTop, height: intro.current.getBoundingClientRect().height});
        setAboutMeDetails({
            offsetTop: aboutMe.current.offsetTop,
            height: aboutMe.current.getBoundingClientRect().height
        });
        setTimelineDetails({
            offsetTop: timeline.current.offsetTop,
            height: timeline.current.getBoundingClientRect().height
        });
        setSkillsDetails({offsetTop: skills.current.offsetTop, height: skills.current.getBoundingClientRect().height});
        setPortfolioDetails({
            offsetTop: portfolio.current.offsetTop,
            height: portfolio.current.getBoundingClientRect().height
        });
        setContactDetails({
            offsetTop: contact.current.offsetTop,
            height: contact.current.getBoundingClientRect().height
        });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollTo = (offsetFromTop) => {
        window.scrollTo({
            top: offsetFromTop,
            behavior: 'smooth',
        });
    };
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
            <div className={scrollPosition < 1 ? 'element-hidden' : 'element-show'}>
                <div className="mt-5 ms-3 navigation-bar d-md-block d-lg-block d-xl-block">
                    <ul>
                        <li onClick={() => {
                            scrollTo(introDetails.offsetTop)
                        }}>
                            {(scrollPosition - introDetails.offsetTop < introDetails.height) &&
                                <span><BsArrowRightShort/></span>
                            }
                            Intro
                        </li>
                        <li onClick={() => {
                            scrollTo(aboutMeDetails.offsetTop)
                        }}>
                            {(scrollPosition - aboutMeDetails.offsetTop < aboutMeDetails.height && scrollPosition > introDetails.offsetTop + introDetails.height) &&
                                <span><BsArrowRightShort/></span>
                            }
                            About me
                        </li>
                        <li onClick={() => {
                            scrollTo(timelineDetails.offsetTop)
                        }}>
                            {(scrollPosition - timelineDetails.offsetTop < timelineDetails.height && scrollPosition > aboutMeDetails.offsetTop + aboutMeDetails.height) &&
                                <span><BsArrowRightShort/></span>
                            }
                            Timeline
                        </li>
                        <li onClick={() => {
                            scrollTo(skillsDetails.offsetTop - 300)
                        }}>
                            {(scrollPosition - skillsDetails.offsetTop < skillsDetails.height && scrollPosition > timelineDetails.offsetTop + timelineDetails.height) &&
                                <span><BsArrowRightShort/></span>
                            }
                            Skills
                        </li>
                        <li onClick={() => {
                            scrollTo(portfolioDetails.offsetTop)
                        }}>
                            {(scrollPosition - portfolioDetails.offsetTop < portfolioDetails.height && scrollPosition > skillsDetails.offsetTop + skillsDetails.height && !(scrollPosition - contactDetails.offsetTop < contactDetails.height && scrollPosition > portfolioDetails.offsetTop - portfolioDetails.height + portfolioDetails.height)) &&
                                <span><BsArrowRightShort/></span>
                            }
                            Portfolio
                        </li>
                        <li onClick={() => {
                            scrollTo(contactDetails.offsetTop)
                        }}>
                            {(scrollPosition - contactDetails.offsetTop < contactDetails.height && scrollPosition > portfolioDetails.offsetTop - portfolioDetails.height + portfolioDetails.height) &&
                                <span><BsArrowRightShort/></span>
                            }
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
            <div className={scrollPosition < 300 ? 'element-show' : 'element-hidden'}>
                <div
                    className="position-absolute bottom-0 start-50 translate-middle arrow-down">
                    <BsArrowDownCircle/>
                </div>
            </div>

            <Container fluid ref={intro}>
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
            <Container fluid className="full-width-container" ref={aboutMe}>
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
            <Container fluid className="full-width-container" ref={timeline}>
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
            <Container ref={skills}>
                <div className="skills mt-40">
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
            <Container fluid className="full-width-container" ref={portfolio}>
                <div className="portfolio mt-40">
                    <Row>
                        <Col>
                            <div className="section-title mb-5">Portfolio</div>
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
            <Container ref={contact}>
                <div className="contact mt-40">
                    <Row>
                        <Col md={12}>
                            <div className="primary-icon"><HiOutlineMailOpen/></div>
                            Feel free to contact at any time
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col md={4}>
                            <div className="icon"><MdAlternateEmail/></div>
                            <div className="reachOut"><a href="mailto:Itshakbar@gmail.com" target="_blank"
                                                         rel="noopener noreferrer">Itshakbar@gmail.com</a></div>
                        </Col>
                        <Col md={4}>
                            <div className="icon"><MdOutlinePhoneIphone/></div>
                            <div className="reachOut"><a href="tel:+972523937296" target="_blank"
                                                         rel="noopener noreferrer">+972.52.3937296</a></div>
                        </Col>
                        <Col md={4}>
                            <div className="icon"><SiWhatsapp/></div>
                            <div className="reachOut"><a href="https://api.whatsapp.com/send?phone=972523937296"
                                                         target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default App;