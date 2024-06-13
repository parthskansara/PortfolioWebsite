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

import { FaLinkedin, FaGithub, FaEnvelope, FaSpotify } from 'react-icons/fa'; // Email and GitHub icons
import { SiGooglescholar } from 'react-icons/si'; // Google Scholar icon

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
            href: "https://open.spotify.com/user/it6k3av7dg0rzjeabuw98l7or",
            icon: <FaSpotify/>,
            description: "Parth Kansara",
            title: "Spotify"
        },
    ]
    
    return (
        <div>
            <p className="text-center text-5xl font-bold mt-[10vh] mb-[5vh]">Let's Connect!</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                
                {contactLinks.map((link) => (
                    <Link href={link.href}>                
                        <Card className="w-[60vw] sm:w-[40vw] md:w-[15vw]">
                            <CardHeader>
                                <CardTitle className="flex justify-center text-xl ">{link.title}</CardTitle>
                                <CardDescription className="flex justify-center">{link.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex justify-center text-3xl">
                                {link.icon}
                            </CardContent>
                        </Card>                        
                    </Link>
                ))}
            
            

            

            </div>

        </div>
    );
}

export default Contact;