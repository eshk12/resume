import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({timelines}) => {
    return (

        <VerticalTimeline>
            {
                timelines.map((timeline, key) => {
                    return (
                        <VerticalTimelineElement
                            key = {key}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#000', borderTop: 'solid 4px '+timeline.color }}
                            iconStyle={{ background: timeline.color, color: '#fff' }}
                            icon={timeline.icon}
                        >
                            <h3 className="vertical-timeline-element-title">{timeline.title}</h3>
                            { timeline.subTitle !== '' &&
                                  <h5 className="vertical-timeline-element-subtitle">{timeline.subTitle}</h5>
                            }
                            <h6 className="vertical-timeline-element-subtitle">{timeline.date}</h6>
                            {timeline.content}
                        </VerticalTimelineElement>
                    );
                })
            }
        </VerticalTimeline>
    );
};

export default Timeline;
