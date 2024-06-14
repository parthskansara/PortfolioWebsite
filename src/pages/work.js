import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from "@/components/ui/badge"

import {FaGraduationCap, FaBriefcase } from "react-icons/fa";

function Work({sanitizedWorkEx}) {
    // const content = [
    //     {
    //         year: "August 2023 - April 2024",
    //         title: "Software Engineering Intern",
    //         company: "AICAN Pvt. Ltd.",
    //         location: "Remote", 
    //         description: "This was my most recent internship",
    //         tech: ["React", "JavaScript", "MongoDB", "Node.js"],
    //         icon: <FaBriefcase/>

    //     },
    //     {
    //         year: "August 2023 - April 2024",
    //         title: "Software Engineering Intern",
    //         company: "AICAN Pvt. Ltd.",
    //         location: "Remote", 
    //         description: "This was my most recent internship",
    //         tech: ["React", "JavaScript", "MongoDB", "Node.js"],
    //         icon: <FaGraduationCap/>

    //     },
    //     {
    //         year: "August 2023 - April 2024",
    //         title: "Software Engineering Intern",
    //         company: "AICAN Pvt. Ltd.",
    //         location: "Remote", 
    //         description: "This was my most recent internship",
    //         tech: ["React", "JavaScript", "MongoDB", "Node.js"],
    //         icon: <FaBriefcase/>

    //     },
    // ];
    return (
        <div>
            <VerticalTimeline
                lineColor="black"
            >
                {sanitizedWorkEx.map((exp) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ border: "2px solid" }}
                        contentArrowStyle={{borderRight: "10px solid"}}
                        date={exp.year}
                        iconStyle={{ background: 'rgb(0,0,0)', color: '#fff', border: "1px solid" }}
                        icon={exp.type === "Education" ? <FaGraduationCap/> : <FaBriefcase/>}
                    >
                        {
                            exp.title && (
                                <>
                                    <h2 className="vertical-timeline-element-title font-bold">
                                        {exp.title}
                                    </h2>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        {exp.company}, {exp.location}
                                    </h4>
                                    {exp.description && 
                                        <>
                                            <p className="pb-4">{exp.description}</p>
                                            {exp.tech.map((t) => (
                                                <Badge className="mx-1">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </>

                                    }
                                </>
                            )
                        }
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
           
        </div>
    );
}

export async function getServerSideProps() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const workData = await fetch(`${API_URL}/api/work`);
    const {experiences} = await workData.json();

    const sanitizedWorkEx = experiences.map((ex) => (
        {
            type: ex.type ?? null,
            year: ex.year ?? null,
            title: ex.title ?? null,
            company: ex.company ?? null,
            location: ex.location ?? null, 
            description: ex.description ?? null,
            tech: ex.tech ?? null,
        }
    ));

    return {
        props: {
            sanitizedWorkEx
        },
    };
}

export default Work;