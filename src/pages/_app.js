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


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



const App = ({Component, pageProps}) => {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background font-sans antialiased", fontSans.variable)}>
        {/* <Link href="/">Home</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact</Link> */}

        <NavigationMenu className="mt-8 ml-auto">
          <NavigationMenuList className="gap-8 pr-8">
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/">
                <span className=''>home</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/resume">
                resume
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/work">
                work
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/project">
                projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg py-4")} href="/contact">
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