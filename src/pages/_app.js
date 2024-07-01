import React from 'react';
import Link from 'next/link';
import "/src/styles/globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/router';
import Head from 'next/head';



const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



const App = ({Component, pageProps}) => {

  const router = useRouter();
  const currentPath = router.pathname; 
  const pathWithQuery = router.asPath; 

  return (
    
    <div className={cn("min-h-screen flex flex-col bg-background font-sans antialiased", fontSans.variable)}>
        {/* <Link href="/">Home</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact</Link> */}
        <Head>
          <title>Parth Kansara</title>
          <meta name="Portfolio Website" content="A Snapshot of my entire Journey"/>
          <link rel="icon" href="/icons/favicon.png"/>
        </Head>

        <NavigationMenu className="mt-8 ml-auto">
          <NavigationMenuList className="gap-8 pr-8">
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", currentPath === "/" && "border-2 border-black")} href="/">
                <span className=''>home</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", currentPath === "/resume" && "border-2 border-black")} href="/resume">
                resume
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
              <NavigationMenuTrigger className={cn("text-lg py-4", (currentPath === "/experience" && "border-2 border-black"))}>
                
                {
                  pathWithQuery === "/experience?type=education" ?
                  "education" :
                  (
                    pathWithQuery === "/experience?type=work" ?
                    "work" :
                    (
                      pathWithQuery === "/experience?type=positions" ?
                      "extracurricular":
                      "experience"
                    )
                  )

                }
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-md">
                <ul className=''>
                  <li>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", pathWithQuery === "/experience?type=education" && "border-2 border-black")} href="/experience?type=education">
                      education
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", pathWithQuery === "/experience?type=work" && "border-2 border-black")} href="/experience?type=work">
                      work  
                    </NavigationMenuLink>
                  </li>
                  <li key="3">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", pathWithQuery === "/experience?type=positions" && "border-2 border-black")} href="/experience?type=positions">
                      extracurricular
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
                  {/* <div className='flex items-center'>
                    <span className='text-sm text-left block'>work</span>
                    <Separator className='ml-2' />
                  </div> */}
                  {/* <span className='text-sm pl-2'>work <Separator/></span> */}
                  
                  {/* <ul className="list-none ">
                    <li key="1">
                      
                    </li>
                    <li key="2">
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/work?type=internships">
                        internships
                      </NavigationMenuLink>
                    </li> */}

                  {/* </ul>
                </li>

                
              </ul>
             */}
              {/* <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/work">
                work
              </NavigationMenuLink> */}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", currentPath === "/project" && "border-2 border-black")} href="/project">
                projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4", currentPath === "/contact" && "border-2 border-black")} href="/contact">
                contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        
        <div className=''>
          <Component {...pageProps}/> 
        </div>

      </div>
  );
};
export default App;