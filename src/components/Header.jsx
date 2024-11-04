function Header() {
  return (
    <header
      className="mt-10 mx-auto w-[90vw] flex justify-center"
    >
      <ul
        className="flex gap-2 bg-gray-300 rounded-full
        border-2 border-gray-300 p-2 shadow-sm"
      >
        <li className="nav-item selected">
          <a href="">Home</a>
        </li>
        <li className="nav-item">
          <a href="">My CV</a>
        </li>
        <li className="nav-item">
          <a href="">My Work</a>
        </li>
        <li className="nav-item">
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;