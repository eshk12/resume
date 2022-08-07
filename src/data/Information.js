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
            image: 'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
            projectName: 'Project 1',
            builtWith: ['React', 'Java', 'Spring boot', 'Hibernate', 'mySQL'],
            creationDate: '23/07/2020',
            content: <>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</>
        },{
            image: 'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
            projectName: 'Project 2',
            builtWith: ['React', 'Java', 'Spring boot', 'Hibernate', 'mySQL'],
            creationDate: '23/07/2020',
            content: <>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</>
        },
        {
            image: 'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
            projectName: 'Project 3',
            builtWith: ['React', 'Java', 'Spring boot', 'Hibernate', 'mySQL'],
            creationDate: '23/07/2020',
            content: <>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</>
        },
    ]

}

export default information;