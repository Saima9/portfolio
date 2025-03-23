import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'Sep 2024 - Feb 2025',
            title: 'Rachayitha',
            subtitle: 'Frontend Developer',
            type: typeWork,
        },
        {
            id: 1,
            date: 'Jun 2024 - Aug 2024',
            title: 'Infotrixs',
            subtitle: 'Full Stack Developer',
            type: typeWork,
        },
        {
            id: 2,
            date: 'Aug 2019 - Aug 2023',
            title: 'Gaya College Of Engineering',
            subtitle: 'Computer Science and Engineering',
            type: typeSchool,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                <VerticalTimelineElement
                    id={item.id}
                    key={item.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#aaa', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                    date={item.date}
                    iconStyle={{ background: '#aaa', border: '#000' }}
                    icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
