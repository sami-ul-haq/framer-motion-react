import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-400">
        <ul className="flex justify-evenly items-center">
            <li className="font-bold py-2 px-4 hover:bg-cyan-950 hover:text-white"><Link to={"/"}>Home</Link></li>
            <li className="font-bold py-2 px-4 hover:bg-cyan-950 hover:text-white"><Link to={"/about"}>About</Link></li>
            <li className="font-bold py-2 px-4 hover:bg-cyan-950 hover:text-white"><Link to={"/services"}>Services</Link></li>
            <li className="font-bold py-2 px-4 hover:bg-cyan-950 hover:text-white"><Link to={"/contact"}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;