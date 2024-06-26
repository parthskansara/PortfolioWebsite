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
            <div className='home-page flex flex-row justify-center mt-[130px] gap-8'>
                <div className='w-[40vw]  justify-end'>
                    <Avatar className='w-[40vh] h-[40vh] border-4 border-black ml-auto'>
                        <AvatarImage src="/a2.png" />
                        <AvatarFallback>Parth Kansara</AvatarFallback>
                    </Avatar>
                </div>
                <div className='text-xl w-[50vw] my-auto '>                    
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2>Hi, I'm</h2>
                    <span className='text-6xl font-bold mb-2'>Parth Kansara</span>
                    <Separator className='my-2'/>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>I'm a software developer, with a proficiency in Java, Python and JavaScript.</p>
                </div>
                
            </div>
        </div>
    )
}