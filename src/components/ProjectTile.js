import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button";
import { useTruncatedElement } from "@/hook/useTruncatedElement";
import Link from "next/link";
import { FaExternalLinkAlt, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Badge } from "./ui/badge";


const ProjectTile = ({key, name, description, date, link, tech, citations}) => {

    const ref = React.useRef(null);
    const { isTruncated, isShowingMore, toggleIsShowingMore } = useTruncatedElement({
      ref,
    });
    
    
    const formatDate = (dateString, no_day) => {
        const dateObj = new Date(dateString);
        let options;
        if (no_day){
            options = { year: 'numeric', month: 'long' };
        }
        else
        {
            options = { year: 'numeric', month: 'long', day: 'numeric' };
        }
        return dateObj.toLocaleDateString(undefined, options);
        };

    return (
        <>
        <div className="flex">
            <Card className="border-2 border-black">
                <CardHeader>
                    <CardTitle className="text-lg">{name}</CardTitle>
                    {date &&
                        <CardDescription className="text-md">{citations >= 0 ? "Date Published: " + formatDate(date, 0) : formatDate(date, 1)}</CardDescription>}
                   
                </CardHeader>   
                <CardContent>
                        {   
                            tech &&
                            tech.map((t, index) => (
                                <Badge key={index} className="mx-1 ">
                                    {t}
                                </Badge>
                            ))
                        }
                    <div className="flex flex-col mt-4">
                        {citations >=0 && <div className="font-bold">Abstract</div>}<span ref={ref} className={`w-[100%] text-md ${!isShowingMore ? 'line-clamp-2' : ''}`}>{description}</span>
                    </div>
                    {isTruncated && (
                        <>
                            <p className={`${isShowingMore ? 'text-violet-600' : 'text-blue-600'} cursor-pointer`} onClick={toggleIsShowingMore}>
                                {
                                    isShowingMore ? 
                                    <div>
                                        <span className="flex items-center">Read Less <FaAngleUp/>
                                        </span>
                                    </div> : 
                                    <div>
                                        <span className="flex items-center">Read More <FaAngleDown/>
                                        </span>
                                    </div>
                                }
                            </p>
                        </>
                    )}
                    {citations > 0 &&
                        
                        <div className="font-bold mt-2">Citations: <span className="font-normal">{citations}</span></div>
                    }
                    {link &&
                        <Button className="mt-4">
                            <Link className="text-sm flex" href={link} target="_blank" rel="noopener noreferrer">
                                {citations >=0 ? "Read Paper  " : "View on GitHub  "} <FaExternalLinkAlt className="ml-2"/>
                            </Link>
                        </Button>
                    }

                </CardContent>
            </Card>

            {/* <div className="">
                <h1>{name}</h1>
                <h4>{date}</h4>
                <p>{description}</p>
                <a href={link}>Link</a>                
            </div> */}
        </div>
        </>
    );

};

export default ProjectTile;