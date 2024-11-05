import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  /* State to track the currently selected navigation item */
  const [selected, setSelected] = useState("Home");

  function setSelectedBtn(e) {
    /* Get the text content of the clicked item to determine which is selected */
    const btnName = e.target.textContent;

    setSelected(btnName) /* Update the selected state */
  }

  return (
    <header
      className="mt-10 mx-auto w-[90vw] flex justify-center"
    >
      <ul
        className="flex gap-2 bg-gray-300 rounded-full
        border-2 border-gray-300 p-2 shadow-sm"
      >
        <li 
          className={`nav-item ${selected === "Home" ? "selected": ''} 
          transition ease-in-out duration-500`}
          onClick={setSelectedBtn}
        >
          <Link to="/">Home</Link>
        </li>
        <li 
          className={`nav-item ${selected === "My CV" ? "selected": ''}
          transition ease-in-out duration-500`}
          onClick={setSelectedBtn}
        >
          <Link to="cv">My CV</Link>
        </li>
        <li 
          className={`nav-item ${selected === "My Work" ? "selected": ''}
          transition ease-in-out duration-1000`}
          onClick={setSelectedBtn}
        >
          <Link to="my work">My Work</Link>
        </li>
        <li 
          className={`nav-item ${selected === "Contact" ? "selected": ''}
          transition ease-in-out duration-1000`}
          onClick={setSelectedBtn}
        >
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;