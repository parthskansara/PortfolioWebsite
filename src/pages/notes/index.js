// pages/notes/index.js
import TopicCard from '@/components/notes/TopicCard';
import Link from 'next/link';

export default function Notes() {
  const topics = [
    {
        id: 'algo',
        name:'Algorithms',
        description: 'Captures some algorithms that I\'ve used to crack problems',
        link: '/notes/algo/Algorithms.html',
    },
    {
        id: 'ds',
        name:'Data Structures',
        description: 'Details a bunch of data structures and their related methods',
        link: '/notes/ds/DataStructures.html',
    },
    {
        id: 'java',
        name:'Java Basics',
        description: 'Explains some basic concepts of Java',
        link: '/notes/java/Java.html',
    },
    {
        id: 'crabs',
        name:'Hermit Crabs',
        description: 'Describes concepts related Hermit Crabs and wealth inequality',
        link: '/notes/crabs/HermitCrabs.html',
    },   
];

  return (
    <div>
      <div className='grid grid-cols-3'>
        {topics.map((topic) => (
            <Link href={topic.link} >
                <TopicCard 
                    topic={topic} 
                />
            </Link>
        ))}
      </div>
    </div>
  );
}