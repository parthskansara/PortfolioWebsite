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

const ProjectTile = ({name, description, date, link}) => {

    const ref = React.useRef(null);
    const { isTruncated, isShowingMore, toggleIsShowingMore } = useTruncatedElement({
      ref,
    });
  

    return (
        <>
        <div className="px-auto flex">
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    {date &&
                        <CardDescription>Date Published: {date}</CardDescription>}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <p ref={ref} className={`w-[80%] ${!isShowingMore ? 'line-clamp-3' : ''}`}>{description}</p>
                    </div>
                    {isTruncated && (
                        <button className="text-blue-600" onClick={toggleIsShowingMore}>
                            {isShowingMore ? 'Show less' : 'Show more'}
                        </button>
                    )}
                    
                </CardContent>
                <CardFooter>
                    <Button>
                        Learn More
                    </Button>
                </CardFooter>
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