import React from "react";
import {IoLogoJavascript} from 'react-icons/io';
import {SiFreelancer, SiIonic, SiSpring} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {GiDesk} from 'react-icons/gi';
import {TbMilitaryRank} from 'react-icons/tb';
import {MdOutlineDeveloperMode} from 'react-icons/md';
import {FaUniversity} from 'react-icons/fa';
import {v4 as uuidv4} from "uuid";
import CarouselItem from "../Components/CarouselItem";
import yhr from '../assets/images/yhr-sliced.png';
import painter from '../assets/images/painter-sliced.png';
import tropiPri from '../assets/images/tropiPri-sliced.jpg';
import nadlanil from '../assets/images/nadlanil.png';
import orBayaar from '../assets/images/orBayaar.png';
import ametzDog from '../assets/images/ametzDog.png';
import bouncePage from '../assets/images/bouncePage.png';
import orental from '../assets/images/orental.png';
import studentTracker from '../assets/images/studentTracker.png';
import profileImage from '../assets/images/profileImage.png';

const information = {
    githubLink: 'https://github.com/eshk12',
    fullName: 'Itzik Barabie',
    role: 'Software Developer',
    currentRole: 'Backend Developer in Amdocs',
    aboutMe:
        <>
            I am a skilled Full Stack developer with a passion for building high-quality applications from the ground
            up.
            <br/><br/>
            With a B.Sc. degree in Computer Sciences and professional experience in the internet industry, I have a
            strong foundation in engineering principles and a track record of delivering successful projects.
            <br/><br/>
            In my work, I have utilized a variety of technologies, including Java, JavaScript, Spring boot, React,
            Node.js, SQL, noSQL, Linux System Administration.
            <br/><br/>
            I am experienced in building desktop, web, and mobile applications and have a proven ability to learn and
            adapt to new technologies as needed.
            <br/><br/>
            I am also skilled at quickly understanding the flow and structure of existing systems and able to integrate
            new features and functionality seamlessly.<br/>
            In addition to my technical skills, I am a team player with strong communication and problem-solving
            abilities. I am proactive, detail-oriented, and always eager to take on new challenges.
            <br/><br/>
            I enjoy collaborating with others to find creative solutions to complex problems and am committed to
            continuously learning and improving my skills.
            <br/><br/>
            You can see some of my work and contributions on my <a href="https://github.com/eshk12/"
                                                                   rel="noopener noreferrer"
                                                                   target="_blank">GitHub</a> profile.
        </>,
    profilePic: profileImage,
    skills:
        [
            {
                icon: <IoLogoJavascript/>,
                title: 'Front end',
                bgColor: 'bg-yellow',
                textColor: 'text-yellow',
                content: <>HTML, CSS, JS<br/>Ajax, Bootstrap<br/>React.js, React-Redux<br/>Swing<br/></>
            },
            {
                icon: <SiSpring/>,
                title: 'Backend',
                bgColor: 'bg-green',
                textColor: 'text-green',
                content: <>Java - Spring boot<br/>Node.js - Express.js<br/>PHP<br/></>
            },
            {
                icon: <GrMysql/>,
                title: 'Database',
                bgColor: 'bg-blue',
                textColor: 'text-blue',
                content: <>Mysql, Oracle SQL<br/>MongoDB</>
            },
            {
                icon: <GiDesk/>,
                title: 'Work Space',
                bgColor: 'bg-purple',
                textColor: 'text-purple',
                content: <>InteliJ, WebStorm<br/>DataGrip, GitHub,<br/>Jenkins, Jira, Linux<br/></>
            },
        ],
    timelines:
        [
            {
                color: 'rgb(97, 129, 182)',
                icon: <MdOutlineDeveloperMode/>,
                title: 'Software Developer',
                subTitle: 'Amdocs, Shderot, IL',
                date: '2021 - Present',
                content: <p>
                    As a Software Developer, I have been responsible for managing and developing backend applications.<br />
                    I deliver high-quality solutions and ensure the reliability and efficiency of my clients' applications.
                        </p>
            },
            {
                color: 'rgb(233, 30, 99)',
                icon: <FaUniversity/>,
                title: 'B.Sc Computer Science',
                subTitle: 'Ashkelon Academic College',
                date: '2018 - 2021',
                content: ''
            },
            {
                color: 'rgb(39, 179, 254)',
                icon: <SiFreelancer/>,
                title: 'Freelancer',
                subTitle: '',
                date: '2016 - 2018',
                content:
                    <p>
                        I have built custom websites and interfaces to meet the specific needs of my clients.<br />
                        My expertise in user experience design ensures that the solutions I deliver are high-quality and user-friendly.
                    </p>
            },
            {
                color: 'rgb(54, 124, 247)',
                icon: <SiIonic/>,
                title: 'The Mobile Work Shop',
                subTitle: 'Tel Aviv',
                date: '2016 - 2018',
                content: <p>Developed Hybrid mobile and web applications via Ionic/Angular and Node.js.</p>
            },
            {
                color: '#a5945f',
                icon: <TbMilitaryRank/>,
                title: 'Military service',
                subTitle: 'IDF, IL',
                date: '2013 - 2016',
                content: <p>Operation Sergeant Southern command.</p>
            },
            {
                color: 'rgb(39, 179, 254)',
                icon: <SiFreelancer/>,
                title: 'Freelancer',
                subTitle: '',
                date: '2011 - 2013',
                content: <p>Web development, Data security, and business branding along with project management.</p>
            },

        ],
    carouselItems: carouselItemsContent => carouselItemsContent.map((carouselItem, key) => ({
        key: uuidv4(),
        content: <CarouselItem key={key} carouselItem={carouselItem}/>
    })),


    carouselItemsContent: [
        {
            image: studentTracker,
            projectName: 'StudentTracker - An smarter way to keep your student close.',
            builtWith: ['Java', 'Spring Boot', 'Hibernate', 'HTML', 'CSS', 'Bootstrap', 'React.js', 'Redux', 'mySQL'],
            links: [{
                linkName: 'GitHub - Backend',
                url: 'https://github.com/eshk12/Student_Tracker_RestAPI',
            }, {
                linkName: 'GitHub - Frontend',
                url: 'https://github.com/eshk12/Student_Tracker_FrontEnd',
            }, {
                linkName: 'Visit the site',
                url: 'https://studenttracker.co.il/',
                accessDetails: "itshakbar@gmail.com : 12345678"
            }],
            creationDate: 'Created on: 2021',
            content:
                <>
                    StudentTracker is a comprehensive student management system that was developed as part of my final
                    degree project. It is designed to handle multiple institutes and features a user permission system
                    that allows for granular control over access to information.

                    With StudentTracker, there are three levels of admin users:
                    <ul>
                        <li>Admin User: This user has access to all institutes and departments within the system.</li>
                        <li>Admin Institute User: This user has access only to the departments within their institute.
                        </li>
                        <li>Admin Department User: This user has access only to the department with which they are
                            associated.
                        </li>
                    </ul>
                    StudentTracker is a powerful tool that enables administrators to easily manage and track student
                    data, streamline communication, and improve overall efficiency within their institute.
                </>
        },
        {
            image: bouncePage,
            projectName: 'Yad2 Automatic bouncer with GUI',
            builtWith: ['Java', 'Swing', 'Json'],
            links: [{
                linkName: 'GitHub',
                url: 'https://github.com/eshk12/Yad2AutomationWithGUI',
            }],
            creationDate: 'Created on: 2022',
            content:
                <>
                    I developed a tool called the "bouncer" to automate the promotion of Yad2 ads.<br />
                    The bouncer logs in to the Yad2 servers every 4 hours to retrieve the credentials and active ads.<br />
                    It then automatically bounces each active ad to ensure maximum visibility and engagement.<br />
                    The bouncer streamlines the ad promotion process and helps to maximize the effectiveness of marketing efforts.
                </>
        }, {
            image: ametzDog,
            projectName: '"Ametz Kelev" - Adopt-a-Dog Foundation',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4', 'mySQL'],
            links: [],
            creationDate: 'Created on: 2017',
            content:
                <>
                    I am proud to have had the opportunity to volunteer with the "Ametz Kelev" foundation and contribute to a project that helps city veterinarians and municipal corrals advertise animals for adoption.<br />
                    I designed and developed a system specifically for this purpose, which aims to make the process of finding forever homes for these animals more efficient and effective.<br />
                    I believe that this system will be a valuable resource for both veterinarians and potential adopters, and I am confident that it will make a positive impact on the well-being of animals in need.
                </>
        }, {
            image: tropiPri,
            projectName: 'Tropi-Pri Online Store',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://tropi-pri.co.il/',
            }],
            creationDate: 'Created on: 2012',
            content:
                <>
                    I designed and developed an online store for a fruits tray company that features a comprehensive product catalog, content management capabilities, and multiple online payment options.<br />
                    Customers are able to purchase goods directly through the site using the intuitive and user-friendly system that I developed.<br />
                    This project was a successful and fulfilling endeavor that has allowed the company to expand their reach and improve their e-commerce capabilities.
                </>
        }, {
            image: nadlanil,
            projectName: 'Real Estate site',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4', 'mySQL'],
            links: [{
                linkName: 'Mock up',
                url: 'https://itzikb.co.il/nadlanil/',
            }],
            creationDate: 'Created on: 2018',
            content:
                <>
                    I have designed and developed a comprehensive system for managing and advertising real estate agency assets.<br />
                    The system includes a platform for the agency to manage their properties and a website for customers to browse and filter available assets.<br />
                    This system has been a valuable tool for the agency, providing them with an efficient way to manage and showcase their portfolio.<br />
                    It has also been a convenient resource for customers, allowing them to easily search and find properties that meet their needs and preferences.
                </>
        }, {
            image: orBayaar,
            projectName: 'Or Bayaar - Events complex - Yad Mordechai Forest',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/orbayaar/',
            }, {
                linkName: 'Dashboard',
                url: 'https://itzikb.co.il/orbayaar/ui',
                accessDetails: "email : password"
            }],
            creationDate: 'Created on: 2017',
            content:
                <>
                    I designed and developed this site with a custom CMS that enables the user to easily make minor updates and changes to the website.<br />
                    This feature allows for greater flexibility and control over the website's content and design, ensuring that it accurately reflects the needs and goals of the user.<br />
                    The custom CMS is user-friendly and intuitive, making it easy for users to maintain and update the site as needed.
                </>
        }, {
            image: painter,
            projectName: 'Land page for a professional painter',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 3'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/painter/',
            }],
            creationDate: 'Created on: 2016',
            content:
                <>
                    I designed and developed a landing page for a painter that showcases their resume and portfolio.<br />
                    The project also included an Adwords campaign to increase visibility and reach.<br />
                    The landing page is visually appealing and easy to navigate, allowing potential clients to easily view the painter's work and learn more about their background and experience.<br />
                    The Adwords campaign was an effective way to reach a wider audience and generate interest in the painter's services.<br />
                    Overall, this project was a success and has helped to promote the painter's business and reach new clients.
                </>
        }, {
            image: yhr,
            projectName: 'Yeshiva Site',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 3', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/yhr/',
            }, {
                linkName: 'Dashboard',
                url: 'https://itzikb.co.il/yhr/ui',
                accessDetails: "email : password"
            }],
            creationDate: 'Created on: 2016',
            content:
                <>
                    I designed and developed a website for a Yeshiva that showcases the daily activities of the institution.<br />
                    The website includes content management capabilities, an online store, a gallery, and videos.<br />
                    These features provide a comprehensive overview of the Yeshiva's offerings and create an engaging and interactive experience for visitors.<br />
                    The website serves as an important resource for those interested in learning more about the Yeshiva and its programs.
                </>
        }, {
            image: orental,
            projectName: 'Electricity company site',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/orental/',
            }],
            creationDate: 'Created on: 2011',
            content:
                <>
                    I designed and developed a website that showcases the company's portfolio.<br />
                    The website features a custom CMS that allows the user to easily make minor updates and changes to the site.<br />
                    This enables the company to maintain a current and accurate representation of their work and services.<br />
                    The website is visually appealing and easy to navigate, providing an enjoyable and informative experience for visitors.<br />
                    It serves as a valuable resource for those interested in learning more about the company and its offerings.
                </>
        },
    ]

}

export default information;
