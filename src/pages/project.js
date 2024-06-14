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
      <Tabs defaultValue="projects" className="">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid grid-cols-1 sm:grid-cols-3 md: grid-cols-4 gap-4">            
            {sanitizedProjects.map((project) => (
              <ProjectTile
                  key={project.id}
                  name={project.name}
                  // description={project.description}
                  description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                  link={project.link}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="publications">
          <div className="grid grid-cols-1 sm:grid-cols-3 md: grid-cols-4 gap-4"> 
          {sanitizedPublications.map((pub) => (
            <ProjectTile
                key={pub.id}
                name={pub.name}
                description={pub.description}
                date={pub.date}  
                link={pub.link}
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
      link: project.link ?? null,
    }));

    const sanitizedPublications = pubs.map(pub => ({
      id: pub._id ?? null,
      name: pub.name ?? null,
      description: pub.description ?? null,
      date: pub.date ?? null,
      link: pub.link ?? null,
    }));

    return {
        props:{
          sanitizedProjects,
          sanitizedPublications,
        },
    };
}

export default Projects;