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


const information = {
    githubLink: 'https://github.com/eshk12',
    fullName: 'Itzik Barabie',
    role: 'software developer',
    currentRole: 'Backend Developer in Amdocs',
    aboutMe:
    <>
        I am a passionate Full stack developer, Experienced with building desktop, Web, and mobile applications from scratch.
        <br/><br/>
        I have experience working with Java, JS, Spring boot, React, React-Redux, Node.js, and more. <br/>
        You can see some of my work and contribution at <a href="https://github.com/eshk12/" rel="noopener noreferrer" target="_blank">GitHub</a>.
    </>,
    profilePic: "https://media-exp1.licdn.com/dms/image/C4E03AQFYyF4MRWiGHw/profile-displayphoto-shrink_800_800/0/1619434456421?e=1664409600&v=beta&t=b2ANMUynOBdvaXecUzpZuR3hGjBzuUxB4yvqcE0Yjs0",
    skills:
        [
            {
                icon: <IoLogoJavascript/>,
                title: 'Front end',
                bgColor: 'bg-yellow',
                textColor: 'text-yellow',
                content: <>HTML, CSS, JS<br/>Ajax, Bootstrap<br/>React.js, React-Redux<br />Swing<br/></>
            },
            {
                icon: <SiSpring/>,
                title: 'Backend',
                bgColor: 'bg-green',
                textColor: 'text-green',
                content: <>Java - Spring boot<br/>Node.js - Express<br/>PHP<br/></>
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
                content: <p>Application Management, Development and maintain backend applications</p>
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
                content: <p>Building websites and interfaces according to the requests of the customers.</p>
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
    carouselItems: carouselItemsContent => carouselItemsContent.map((carouselItem, key) =>  ({key: uuidv4(), content: <CarouselItem key={key} carouselItem = {carouselItem} />}) ),


    carouselItemsContent: [
        {
            image: studentTracker,
            projectName: 'StudentTracker - An smarter way to keep your student close.',
            builtWith: ['Java', 'Spring Boot', 'Hibernate', 'HTML', 'CSS', 'Bootstrap','React.js', 'Redux', 'mySQL'],
            links: [{
                linkName: 'GitHub - Backend',
                url: 'https://github.com/eshk12/Student_Tracker_RestAPI',
            },{
                linkName: 'GitHub - Frontend',
                url: 'https://github.com/eshk12/Student_Tracker_FrontEnd',
            },{
                linkName: 'Visit the site',
                url: 'https://studenttracker.co.il/',
                accessDetails: "itshakbar@gmail.com : 12345678"
            }],
            creationDate: 'Created on: 2021',
            content:
                <>
                    StudentTracker was developed as part of my final degree project.<br />
                    StudentTracker can handle multiple institutes with a user permission system, That knows to limit access to users according to their domain.
                    <ul>
                        <li>Admin User - Have access to all institutes and departments in the system.</li>
                        <li>Admin Institute User - Have access only to its departments.</li>
                        <li>Admin Department User - Have access only to the department it associates with.</li>
                    </ul>
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
                    In order to automatically promote Yad2 ads, I developed this bouncer that login to Yad2 servers every 4 hours and retrieves the credentials and active ads,<br />
                    And then the tool automatically bounces each active ad.
                </>
        },{
            image: ametzDog,
            projectName: '"Ametz Kelev" - Adopt-a-Dog Foundation',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4','mySQL'],
            links: [],
            creationDate: 'Created on: 2017',
            content:
                <>
                    This project was developed as part of my volunteering for the "Ametz Kelev" foundation.<br />
                    I have designed and developed a system that helps city veterinarians and municipal corrals to advertise
                    animals for adoption.<br />
                </>
        },{
            image: nadlanil,
            projectName: 'Real Estate site',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4','mySQL'],
            links: [{
                linkName: 'Mock up',
                url: 'https://itzikb.co.il/nadlanil/',
            }],
            creationDate: 'Created on: 2018',
            content:
                <>
                    I have designed and developed a system that manages and advertises real estates agency assets<br />
                    The system includes a site for the agency to manage their assets, and a website for their customers which allow them to filter and view the assets.
                </>
        },{
            image: orBayaar,
            projectName: 'Or Bayaar - Events complex - Yad Mordechai Forest',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4','mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/orbayaar/',
            },{
                linkName: 'Dashboard',
                url: 'https://itzikb.co.il/orbayaar/ui',
                accessDetails: "email : password"
            }],
            creationDate: 'Created on: 2017',
            content:
                <>
                    This site was designed and developed with customized CMS, which allows the user to handle minor changes in the website.
                </>
        },{
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
                    Designed and developed a land page that presents the painter's resume and portfolio.<br />
                    The project included an "Adword" campaign for advertising.
                </>
        },{
            image: yhr,
            projectName: 'Yeshiva Site',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 3', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/yhr/',
            },{
                linkName: 'Dashboard',
                url: 'https://itzikb.co.il/yhr/ui',
                accessDetails: "email : password"
            }],
            creationDate: 'Created on: 2016',
            content:
            <>
                Designed and developed a website that shows Yeshiva's daily activities.<br />
                The site includes content management, An online store, A gallery, And videos.
            </>
        },{
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
                    Designed and developed an online store for fruits trays company <br />
                    The site includes a wide product catalog, content management, and online payment methods.
                    This site was built with an independent system that able the customers to purchase the goods within the site.
                </>
        },{
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
                    Designed and developed a website which present the company portfolio<br />
                    This site includes CMS which allows the user to handle minor changes in the website.
                </>
        },
    ]

}

export default information;