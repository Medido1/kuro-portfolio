import { useEffect } from 'react';
import {experiences, educations} from '../data';
import Experience from './Experience';
import Education from './Education';

function Cv() {

  return (
    <div className="bg-gray-200 rounded-md shadow-md p-4">
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
      </section>
    </div>
  )
}

export default Cv;