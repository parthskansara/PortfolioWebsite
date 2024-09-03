import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import "/src/styles/globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



const App = ({Component, pageProps}) => {

  const router = useRouter();
  const currentPath = router.pathname; 
  const pathWithQuery = router.asPath; 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setExperienceOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

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
        <GoogleAnalytics gaId='G-EJZNF5DM6J'/>
        <div className='flex justify-between items-center mt-4'>
          <Link href="/">
            <img className="h-[50px] ml-8" src="/logo/Logo-2.png" alt="Parth Kansara - Logo" />
          </Link> 
          <button className='lg:hidden mr-8' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <IoMdClose size={30}/> : <GiHamburgerMenu size={30}/>}
          </button>
          <div className='hidden lg:block '>  
            <NavigationMenu className="">          
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
          </div>
          {isMobileMenuOpen && (
              <div className="lg:hidden absolute top-[70px] right-[30px] bg-white shadow-lg z-50">
                <nav className='flex flex-col space-y-4 p-4 px-8'>
                  <Link 
                    className={cn("text-lg py-2", currentPath === "/" && "font-bold")} 
                    href="/"
                  >
                    home
                  </Link>
                  <Link 
                    className={cn("text-lg py-2", currentPath === "/resume" && "font-bold")} 
                    href="/Parth_Kansara_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    resume
                  </Link>
                  <div>
                    <button 
                      onClick={() => setExperienceOpen(!experienceOpen)} 
                      className={cn("text-lg py-2 w-full text-left", currentPath === "/experience" && "font-bold")}
                    >
                      experience
                    </button>
                    {experienceOpen && (
                      <div className="flex flex-col pl-4 mt-2 space-y-2">
                        <Link 
                          className={cn("text-lg py-2", pathWithQuery === "/experience?type=education" && "font-bold")} 
                          href="/experience?type=education"
                        >
                          education
                        </Link>
                        <Link 
                          className={cn("text-lg py-2", pathWithQuery === "/experience?type=work" && "font-bold")} 
                          href="/experience?type=work"
                        >
                          work
                        </Link>
                        <Link 
                          className={cn("text-lg py-2", pathWithQuery === "/experience?type=positions" && "font-bold")} 
                          href="/experience?type=positions"
                        >
                          extracurricular
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link 
                    className={cn("text-lg py-2", currentPath === "/project" && "font-bold")} 
                    href="/project"
                  >
                    projects
                  </Link>
                  <Link 
                    className={cn("text-lg py-2", currentPath === "/contact" && "font-bold")} 
                    href="/contact"
                  >
                    contact
                  </Link>
                </nav>
              </div>
            )}
        </div>
        
        
        <div className=''>
          <Component {...pageProps}/> 
        </div>

      </div>
  );
};
export default App;