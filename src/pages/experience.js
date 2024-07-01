import 'react-vertical-timeline-component/style.min.css';
import WorkTimeline from "@/components/WorkTimeline";
import { useRouter } from "next/router";

function Work({education, work, positions}) {

    const router = useRouter();
    const { type } = router.query;
    const page = type === 'work' ? work : (type === 'positions' ? positions: education);

    return (
        <div className="mt-4">
            <WorkTimeline experience={page}/>
        </div>
    );
}

export async function getServerSideProps() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const workData = await fetch(`${API_URL}/api/work`);
    const {experiences} = await workData.json();
    
    const work = experiences
        .filter(ex => ex.type === "Work" || ex.type === "Internship")
        .map((ex) => (
            {
                key: ex.key ?? null,
                type: ex.type ?? null,
                year: ex.year ?? null,
                title: ex.title ?? null,
                company: ex.company ?? null,
                location: ex.location ?? null, 
                description: ex.description ?? null,
                tech: ex.tech ?? null,
                icon: ex.icon ?? null,
            }
        ));

    // const internships = experiences
    //     .filter(ex => ex.type === "Internship")
    //     .map((ex) => (
    //         {
    //             type: ex.type ?? null,
    //             year: ex.year ?? null,
    //             title: ex.title ?? null,
    //             company: ex.company ?? null,
    //             location: ex.location ?? null, 
    //             description: ex.description ?? null,
    //             tech: ex.tech ?? null,
    //         }
    //     ));


    const positions = experiences
        .filter(ex => ex.type === "Position")
        .map((ex) => (
            {
                key: ex.key ?? null,
                type: ex.type ?? null,
                year: ex.year ?? null,
                title: ex.title ?? null,
                company: ex.company ?? null,
                location: ex.location ?? null, 
                description: ex.description ?? null,
                tech: ex.tech ?? null,
                icon: ex.icon ?? null,
            }
        ));

    const education = experiences
        .filter(ex => ex.type === "Education")
        .map((ex) => (
            {
                key: ex.key ?? null,
                type: ex.type ?? null,
                year: ex.year ?? null,
                title: ex.title ?? null,
                company: ex.company ?? null,
                location: ex.location ?? null, 
                description: ex.description ?? null,
                tech: ex.tech ?? null,
                icon: ex.icon ?? null,
            }
        ));

    return {
        props: {
            work,
            positions,
            education
        },
    };
}

export default Work;