import { Phone, Mail, MapPin } from 'lucide-react';
import LinkedinIcon from '../assets/linkedin.png';

function Contact() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">
        Contact
      </h1>
      <div className="mt-2 bg-white text-black rounded-md shadow-md p-6
      flex flex-col items-center gap-2">
        <h2 className="text-center text-xl font-bold mb-4">
          Sara Elalia Mouloudj
        </h2>
        <div className='flex justify-between items-center w-full mb-4'>
          <Phone />
          <p>+213779951377</p>
        </div>
        <div className='flex justify-between items-center w-full mb-4'>
          <Mail />
          <p>mouloudjsaraelalia@gmail.com</p>
        </div>
        <div className='flex justify-between items-center w-full mb-4'>
          <MapPin />
          <p>Bab Dzair - Blida - Algeria</p>
        </div>
        <a 
        href="https://www.linkedin.com/in/sara-elalia-mouloudj-b5a196252/"
        target='blank'>
          <img 
            src={LinkedinIcon} 
            alt="linkedIn profile"
            className='w-6 h-auto'
          />
        </a>
      </div>
    </div>
  )
}

export default Contact;