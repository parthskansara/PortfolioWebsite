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
        description: '',
        link: '/notes/algo/Algorithms.html',
    },
    {
        id: 'java',
        name:'Java Basics',
        description: '',
        link: '/notes/algo/Algorithms.html',
    },
    {
        id: 'crabs',
        name:'Hermit Crabs',
        description: '',
        link: '/notes/algo/Algorithms.html',
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