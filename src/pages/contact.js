import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelope, FaSpotify } from 'react-icons/fa'; // Email and GitHub icons
import { SiGooglescholar, SiLeetcode } from "react-icons/si"; // Google Scholar icon
import { React, useState } from "react";

function Contact() {

    const contactLinks = [
        {
            href: "mailto:parthskansara@gmail.com",
            icon: <FaEnvelope/>,
            description: "parthskansara@gmail.com",
            title: "Email"
        },
        {
            href: "https://www.linkedin.com/in/parth-kansara",
            icon: <FaLinkedin/>,
            description: "/parth-kansara",
            title: "LinkedIn"
        },
        {
            href: "https://www.github.com/parthskansara",
            icon: <FaGithub/>,
            description: "parthskansara",
            title: "GitHub"
        },
        {
            href: "https://scholar.google.com/citations?user=yqTFjSIAAAAJ&hl=en",
            icon: <SiGooglescholar/>,
            description: "Parth Kansara",
            title: "Google Scholar"
        },
        {
            href: "https://leetcode.com/u/parthskansara/",
            icon: <SiLeetcode/>,
            description: "Parth Kansara",
            title: "Leetcode"
        },
        {
            href: "https://open.spotify.com/user/it6k3av7dg0rzjeabuw98l7or",
            icon: <FaSpotify/>,
            description: "Parth Kansara",
            title: "Spotify"
        },
    ]

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = (event) => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    }
    
    return (
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-center text-3xl lg:text-5xl font-bold mt-[8vh] mb-[5vh]">Let's Connect!</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-3 gap-6 max-w-4xl">
                    
                    {contactLinks.map((link, index) => (
                        <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">                
                            <Card className="w-[40vw] sm:w-[40vw] md:w-[15vw]">
                                <CardHeader>
                                    <CardTitle className="flex justify-center text-md lg:text-xl ">{link.title}</CardTitle>
                                    <CardDescription className="flex text-xs lg:text-base justify-center">{link.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex justify-center text-3xl">
                                    <div className="flex flex-col justify-center items-center">
                                        {link.icon}                                   
                                    
                                    {
                                        link.title === "Leetcode" &&
                                        <div>
                                            <p className={`${isExpanded ? 'text-violet-600' : 'text-blue-600'} cursor-pointer text-sm mt-4 text-center`} onClick={toggleExpanded}>
                                                {isExpanded ? "Hide Badges" : "View Badges"}
                                            </p>
                                        {
                                            isExpanded && 
                                                <div className="flex flex-col">
                                                    <div className="flex flex-row justify-center items-center mt-4">    
                                                        <img 
                                                            className="h-[5vh] lg:h-[10vh] lg:w-[10vh]" 
                                                            src="https://assets.leetcode.com/static_assets/marketing/2023-50.gif"
                                                            alt="Badge - 50 Days 2023"
                                                        /> 
                                                        <img 
                                                            className="h-[5vh] lg:h-[10vh] lg:w-[10vh]" 
                                                            src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif"
                                                            alt="Badge - 50 Days 2024"
                                                        />
                                                    </div>
                                                    <div className="flex flex-row justify-center items-center mt-4">                                            
                                                        <img 
                                                            className="h-[5vh] lg:h-[10vh] lg:w-[10vh]" 
                                                            src="https://assets.leetcode.com/static_assets/public/images/badges/2024/gif/2024-07.gif"
                                                            alt="Badge - July 2024"
                                                        />
                                                        <img 
                                                            className="h-[5vh] lg:h-[10vh] lg:w-[10vh]" 
                                                            src="https://assets.leetcode.com/static_assets/others/Premium_Algo_100.gif"
                                                            alt="Badge - Study Plan - Premium Algo 100"
                                                        />
                                                    </div>
                                                    
                                                    <div className="flex flex-row justify-center items-center mt-4">                                            
                                                        <img 
                                                            className="h-[5vh] lg:h-[10vh] lg:w-[10vh]" 
                                                            src="https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif"
                                                            alt="Badge - 100 Days 2024"
                                                        />
                                                        {/* <img 
                                                            className="h-[5vh] lg:h-[10vh] lg:w-[10vh]" 
                                                            src="https://assets.leetcode.com/static_assets/others/Premium_Algo_100.gif"
                                                            alt="Badge - Study Plan - Premium Algo 100"
                                                        /> */}
                                                    </div>
                                                </div>
                                        }
                                        </div>                           
                                    }
                                    
                                    </div>
                                </CardContent>
                            </Card>                        
                        </Link>
                    ))}
                
                

                

                </div>
            </div>

        </div>
    );
}

export default Contact;