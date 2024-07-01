// Projects, Publications

import ProjectTile from '@/components/ProjectTile';
import Head from 'next/head';
import 'dotenv/config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




function Projects({sanitizedProjects, sanitizedPublications}) {
  return (
    <div>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="Contact me for more information" />
        <link rel="icon" href="" />
      </Head>
      <main className='p-4'>
      {/* <p className='w-[100vw] text-center font-bold text-6xl mb-4'>Projects</p> */}
      <Tabs defaultValue="projects">
        <TabsList className="py-6 px-1">
          <TabsTrigger value="projects" className="text-lg">projects</TabsTrigger>
          <TabsTrigger value="publications" className="text-lg">publications</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid mx-32 grid-cols-1 sm:grid-cols-2 md: grid-cols-4 gap-4">            
            {sanitizedProjects.map((project) => (
              <ProjectTile
                key={project.id}
                name={project.name}
                description={project.description}
                date={project.date}  
                link={project.link}
                tech={project.tech}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="publications">
          <div className="grid mx-32 grid-cols-1 sm:grid-cols-2 md: grid-cols-4 gap-4"> 
          {sanitizedPublications.map((pub) => (
            <ProjectTile
                key={pub.id}
                name={pub.name}
                description={pub.description}
                date={pub.date}  
                link={pub.link}
                tech={pub.tech}
                citations={pub.citations}
            />
          ))}
        </div>
        </TabsContent>
      </Tabs>      
          
      </main>
      

    </div>
  );
}

export async function getServerSideProps() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const projectData = await fetch (`${API_URL}/api/project`);
    const { projects } = await projectData.json();
    
    const pubData = await fetch(`${API_URL}/api/publication`);
    console.log(`Logging Publication Data: ${pubData}`);
    const { pubs } = await pubData.json();

    

    const sanitizedProjects = projects.map(project => ({
      id: project._id ?? null,
      name: project.name ?? null,
      description: project.description ?? null,
      date: project.date ?? null,
      link: project.link ?? null,
      tech: project.tech ?? null
    }));

    const sanitizedPublications = pubs.map(pub => ({
      id: pub._id ?? null,
      name: pub.name ?? null,
      description: pub.description ?? null,
      date: pub.date ?? null,
      link: pub.link ?? null,
      tech: pub.tech ?? null, 
      citations: pub.citations ?? null,
    }));

    return {
        props:{
          sanitizedProjects,
          sanitizedPublications,
        },
    };
}

export default Projects;