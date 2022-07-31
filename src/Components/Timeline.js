import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiFreelancer, SiIonic } from 'react-icons/si';
import { TbMilitaryRank } from 'react-icons/tb';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';


const Timeline = () => {
    return (

        <VerticalTimeline

        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px rgb(97, 129, 182)' }}
                iconStyle={{ background: 'rgb(97, 129, 182)', color: '#fff' }}
                icon={<MdOutlineDeveloperMode />}
            >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h5 className="vertical-timeline-element-subtitle">Amdocs, Shderot, IL</h5>
                <h6 className="vertical-timeline-element-subtitle">2021 - Present</h6>
                <p>
                    Application Management, Development and maintain backend applications
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px rgb(233, 30, 99)' }}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaUniversity />}
            >
                <h3 className="vertical-timeline-element-title">B.Sc Computer Science</h3>
                <h5 className="vertical-timeline-element-subtitle">Ashkelon Academic College</h5>
                <h6 className="vertical-timeline-element-subtitle">2018 - 2021</h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px rgb(39, 179, 254)' }}
                iconStyle={{ background: 'rgb(39, 179, 254)', color: '#fff' }}
                icon={<SiFreelancer />}
            >
                <h3 className="vertical-timeline-element-title">Freelancer</h3>
                <h6 className="vertical-timeline-element-subtitle">2016 - 2018</h6>
                <p>
                    Building websites and interfaces according to the requests of the customers.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px rgb(54, 124, 247)' }}
                iconStyle={{ background: 'rgb(54, 124, 247)', color: '#fff' }}
                icon={<SiIonic />}
            >
                <h3 className="vertical-timeline-element-title">The Mobile Work Shop</h3>
                <h5 className="vertical-timeline-element-subtitle">Tel Aviv</h5>
                <h6 className="vertical-timeline-element-subtitle">2016 - 2018</h6>
                <p>
                    Developed Hybrid mobile and web applications via Ionic/Angular and Node.js.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px #a5945f' }}
                iconStyle={{ background: '#a5945f', color: '#fff' }}
                icon={<TbMilitaryRank />}
            >
                <h3 className="vertical-timeline-element-title">Military service</h3>
                <h5 className="vertical-timeline-element-subtitle">IDF, IL</h5>
                <h6 className="vertical-timeline-element-subtitle">2013 - 2016</h6>
                <p>
                    Operation Sergeant Southern command.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px rgb(39, 179, 254)' }}
                iconStyle={{ background: 'rgb(39, 179, 254)', color: '#fff' }}
                icon={<SiFreelancer />}
            >
                <h3 className="vertical-timeline-element-title">Freelancer</h3>
                <h6 className="vertical-timeline-element-subtitle">2011 - 2013</h6>
                <p>
                    Web development, Data security and business branding along with project management.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Timeline;
