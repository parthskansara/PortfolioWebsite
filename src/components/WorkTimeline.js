import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaStar, FaAngleUp, FaAngleDown  } from "react-icons/fa";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import React, { useEffect, useState } from "react";

const WorkTimeline = ({experience}) => {
    const [openStates, setOpenStates] = useState({});
  
    const handleOpenChange = (index, isOpen) => {
      setOpenStates((prevOpenStates) => ({
        ...prevOpenStates,
        [index]: isOpen,
      }));
    };


    return(
    <VerticalTimeline
            lineColor="black"
            className=""
            >
                {experience && 
                experience.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ border: "2px solid" }}
                        contentArrowStyle={{borderRight: "10px solid"}}
                        date={exp.year}
                        iconStyle={{ background: 'rgb(0,0,0)', color: '#fff', border: "1px solid" }}
                        icon={
                            exp.type === "Education" ? <FaGraduationCap/> : 
                            (exp.type === "Work" ? <FaBriefcase/>:
                            (exp.type === "Position" ? <FaStar/> : 
                            <FaLaptopCode/>)) 
                        }
                        style={{ margin: '1rem' }}
                    >
                        {
                            exp.title && (
                                <>
                                    <Collapsible
                                        onOpenChange={(isOpen) => handleOpenChange(index, isOpen)}
                                    >
                                        <CollapsibleTrigger className="text-left">
                                            <div className="flex flex-row">
                                                <div className="flex">
                                                    <Avatar className='w-[10vh] h-[10vh] border-[1px] bg-black border-black rounded-full flex items-center justify-center  overflow-hidden mr-6'>
                                                        <AvatarImage className='object-cover w-full h-full' src={`/icons/${exp.icon}.png`}/>
                                                        <AvatarFallback>{exp.icon}</AvatarFallback>
                                                    </Avatar>   
                                                </div>
                                                <div className="flex flex-col ">
                                                      <h4 className="vertical-timeline-element-title font-bold text-lg mt-0">
                                                        {exp.title}
                                                    </h4>
                                                    <h6 className="vertical-timeline-element-subtitle text-sm">
                                                        {exp.company}<br></br>{exp.location}
                                                    </h6>
                                                </div>
                                            </div>
                                            
                                            {
                                                exp.description && 
                                                <h4 id="triggerText" className={`flex items-center underline text-md mt-4 ${openStates[index] ? 'text-violet-700' : 'text-blue-600'}`}>
                                                    {openStates[index] ? 
                                                        <div><span className="flex justify-center items-center">Read Less<FaAngleUp/></span></div> : <div><span className="flex justify-center items-center">Read More <FaAngleDown/></span></div>}
                                                </h4>
                                            }
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="CollapsibleContent">
                                            {exp.description && 
                                                <>
                                                    <span className="pb-4 text-sm" style={{ whiteSpace: 'pre-line' }}>{exp.description}</span>
                                                </>
                                            }
                                        </CollapsibleContent>
                                        <div className="mt-2">
                                            {exp.tech.map((t, index) => (
                                                <Badge key={index} className="mx-1 ">
                                                    {t}
                                                </Badge>
                                            ))}
                                            </div> 
                                    </Collapsible>
                                    

                                </>
                            )
                        }
                    </VerticalTimelineElement>
                ))}
    </VerticalTimeline>
    );
}

export default WorkTimeline;