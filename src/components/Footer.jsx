import LinkedinIcon from '../assets/linkedin.png';

function Footer() {
  return (
    <footer className='bg-black flex justify-between items-center p-4'>
      <a 
        href="https://www.linkedin.com/in/sara-elalia-mouloudj-b5a196252/"
        target='blank'>
        <img 
          src={LinkedinIcon} 
          alt="linkedIn profile"
          className='w-6 h-auto'/>
      </a>
      
      <p className='text-white'>
        Bab Dzair -Blida - Algeria
      </p>
    </footer>
  )
}

export default Footer;