import { House } from 'lucide-react';
import { useEffect, useRef, useState } from "react";

function AboutMe () {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
    <div 
      className={`bg-gray-300 p-4 text-center 
      rounded-md shadow-lg leading-6 border-l-4
      border-blue-500`}
    >
      <h1 className="text-2xl font-bold mb-2">
        About Me
      </h1>
      <p className="text-xl">
        Hello, I'm Sara, an architect with over 
        three years of experience specializing in 
        comprehensive architectural design, including 
        new constructions and renovations.
      </p>
      <p className="text-xl mt-2">
        Proficient in various software tools, 
        I bring innovative designs to life.
      </p>
      <House className='mx-auto mt-2 text-blue-500'/>
    </div>
    <div 
      className={`bg-gray-300 p-4 text-center
      rounded-md shadow-lg border-r-4 border-blue-500 mt-4
      transition-opacity duration-1000 transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      ref={sectionRef}
    >
      <h2 className='text-xl font-bold text-blue-700 mb-2'>
        Services
      </h2>
      <div className='h-1 w-24 rounded bg-blue-700 mx-auto mb-2'></div>
      <ul className='flex flex-col gap-2 pt-2 text-gray-700 text-lg'>
        <li>3D Design</li>
        <li>Visual Design</li>
        <li>Architecture</li>
        <li>Landscape Design</li>
        <li>Interior Design</li>
        <li>Graphic Design</li>
      </ul>
    </div>
  </>
  )
}

export default AboutMe;