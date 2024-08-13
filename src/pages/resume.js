import { useEffect, useState } from "react";

function Resume() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <div className="flex flex-col items-center mt-6">
            {!isMobile ? (
                <iframe 
                    title="Parth Kansara Resume"
                    className="w-[90vw] lg:w-[60vw] h-[80vh] border-4 border-black" 
                    src='/Parth_Kansara_Resume.pdf' 
                />
            ) : (
                <a 
                    href="/Parth_Kansara_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded"
                >
                    View or Download Resume
                </a>
            )}
        </div>
    );
}

export default Resume;