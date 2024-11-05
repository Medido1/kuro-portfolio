import {experiences, educations} from '../data';
import Experience from './Experience';
import Education from './Education';
import { useState, useEffect} from 'react';
import ComputerSkills from './ComputerSkills';
import Languages from '../components/Languages';

function Cv() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-gray-200 rounded-md shadow-md p-4 mt-4 transition ease-in-out duration-1000
      ${isVisible ? "translate-x-1" : "translate-x-[-1000px]"}`}>
      <h1 className="text-2xl font-bold uppercase text-center">
        curriculum vitae
      </h1>
      <div className="h-1 rounded-full w-24 bg-blue-500 mx-auto mb-4"></div>
      <section>
        <h2 className="text-lg font-bold uppercase">
          Experience
        </h2>
        <ul>
          {experiences.map((exp) => {
            return <li key={exp.id}>
              <Experience 
                date = {exp.date}
                jobTitle={exp.jobTitle}
                company={exp.company}
                description={exp.description}
              />
            </li>
          })}
        </ul>
        <h2 className="text-lg font-bold uppercase mt-4">
          education
        </h2>
        <ul>
          {educations.map((edu) => {
            return <li key={edu.id}>
              <Education 
                date= {edu.date}
                degree={edu.degree}
                university={edu.university}
              />
            </li>
          })}
        </ul>
        <h2 className="text-lg font-bold uppercase mt-4">
          Computure skills
        </h2>
        <ComputerSkills />
        <h2 className="text-lg font-bold uppercase mt-4">
          Languages
        </h2>
        <Languages />
      </section>
    </div>
  )
}

export default Cv;