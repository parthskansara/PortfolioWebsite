// Timeline, Skills
import Head from 'next/head';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"


export default function Home() {
    
    return (
        <div>
            <Head>
                <title>Parth Kansara</title>
                <meta name="Portfolio Website" content="A Snapshot of my entire Journey"/>
                <link rel="icon" href="/icon/favicon.png"/>
            </Head>
            <div className='home-page flex flex-col lg:flex-row justify-center mt-[130px] mb-[35vh] lg:gap-8 '>
                <div className='mx-auto lg:justify-end lg:w-[40vw] '>
                    <Avatar className='w-[30vh] h-[30vh] lg:w-[40vh] lg:h-[40vh] border-4 border-black lg:ml-auto'>
                        <AvatarImage src="/a2.png" />
                        <AvatarFallback>Parth Kansara</AvatarFallback>
                    </Avatar>
                </div>
                <div className='text-xl text-center mt-[30px] mx-[20px]  lg:text-left lg:w-[50vw] lg:my-auto '>                    
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2>Hi, I'm</h2>
                    <span className='text-3xl lg:text-6xl font-bold mb-2'>Parth Kansara</span>
                    <Separator className='my-2'/>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>I'm a software developer, with a proficiency in Java, Python and JavaScript.</p>
                </div>                             
            </div>
            <div className='flex justify-center'>
                <h1>Skills</h1>

            </div>
            
        </div>
    )
}