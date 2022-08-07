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


const information = {
    githubLink: 'https://github.com/eshk12',
    fullName: 'Itzik Barabie',
    role: 'software developer',
    currentRole: 'Backend Developer in Amdocs',
    aboutMe: <>What is Lorem Ipsum?
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
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</>,
    profilePic: "https://media-exp1.licdn.com/dms/image/C4E03AQFYyF4MRWiGHw/profile-displayphoto-shrink_800_800/0/1619434456421?e=1664409600&v=beta&t=b2ANMUynOBdvaXecUzpZuR3hGjBzuUxB4yvqcE0Yjs0",
    skills:
        [
            {
                icon: <IoLogoJavascript/>,
                title: 'Front end',
                bgColor: 'bg-yellow',
                textColor: 'text-yellow',
                content: <>HTML, CSS, JS<br/>Ajax, JQuery, Bootstrap<br/>React.js, Swing<br/></>
            },
            {
                icon: <SiSpring/>,
                title: 'Backend',
                bgColor: 'bg-green',
                textColor: 'text-green',
                content: <>Java<br/>Node.js<br/>PHP<br/></>
            },
            {
                icon: <GrMysql/>,
                title: 'Database',
                bgColor: 'bg-blue',
                textColor: 'text-blue',
                content: <>Mysql, Oracle SQL<br/>MongoDB<br/> via Hibernate, Mongoose.</>
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
                content: <p>Web development, Data security and business branding along with project management.</p>
            },

        ],
    carouselItems: carouselItemsContent => carouselItemsContent.map((carouselItem, key) =>  ({key: uuidv4(), content: <CarouselItem key={key} carouselItem = {carouselItem} />}) ),


    carouselItemsContent: [
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
                    This project was built because I wanted to advertised something on the website Yad2, So I have found my self entering every 4 hours to bounce my ads to get them to the latest feeds.<br />
                    So this application know to perform login to Yad2 website and populate the active ads and perform bounce every 4 hours.
                </>
        },{
            image: ametzDog,
            projectName: 'Ametz Kelev association',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 4','mySQL'],
            links: [],
            creationDate: 'Created on: 2017',
            content:
                <>
                    This project was developed for free as contribution to the "Ametz Kelev" association.<br />
                    I have design and developed this system to help city veterinarians and municipal corrals to advertise there kidnapped animals.<br />
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
                    Design and develop an full system which manage and advertise mediator assets<br />
                    I have build an engine which know to populate the best results for the customer according to it's inputs.
                </>
        },{
            image: orBayaar,
            projectName: 'Or Bayaar - Events complex in Yad Mordechai Forest',
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
                    Design and develop with customized CMS, which allow the user to handle minor changes in the website.
                </>
        },{
            image: painter,
            projectName: 'Land page for professional painter in Ashkelon',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'Bootstrap 3'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/painter/',
            }],
            creationDate: 'Created on: 2016',
            content:
                <>
                    Design and develop an landpage which demonstrate the painter abilities,<br />
                    Along with this site I have main an "Adword" campaign for advertising.
                </>
        },{
            image: yhr,
            projectName: 'Yeshivat Hochamat Rahamim',
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
                Design and develop an website which shows the Yeshiva daily activitys.<br />
                This site was built with inner store, gallery, videos and Q/A from the Rabai.
            </>
        },{
            image: tropiPri,
            projectName: 'Store for the company Tropi-pri',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://tropi-pri.co.il/',
            }],
            creationDate: 'Created on: 2012',
            content:
                <>
                    Design and develop an maintain an internet store that's hold many variation of fruits trays<br />
                    This site was build with independent system that able the customers to purchase the good within the side.
                </>
        },{
            image: orental,
            projectName: 'Oren-Tal Electricity work LTD.',
            builtWith: ['HTML', 'CSS', 'Java Script', 'Php', 'Ajax', 'mySQL'],
            links: [{
                linkName: 'Visit the site',
                url: 'https://itzikb.co.il/orental/',
            }],
            creationDate: 'Created on: 2011',
            content:
                <>
                    Design and develop an maintain an website which act as portfolio for the customer<br />
                    This site was build along with CMS which allow the user to handle minor changes in the website.
                </>
        },
    ]

}

export default information;