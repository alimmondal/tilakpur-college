import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/Fa';
import { BiBookReader } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={navbar ? 'navbars active' : 'navbars'}>
      <div className="navbars-container">
        <div className="flex items-center justify-evenly w-full md:max-w-7xl h-full mx-20 text-white">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <BiBookReader className="text-white text-4xl" />
            <h1 className="text-white text-2xl">Tdc</h1>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Button className="text-white" variant="link" asChild>
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </Button>
              </li>

              <li className="nav-item">
                <Button className="text-white" variant="link" asChild>
                  <Link to="/teacher-list" onClick={closeMobileMenu}>
                    Our Teachers' List
                  </Link>
                </Button>
              </li>
              <li className="nav-item">
                <Button className="text-white" variant="link" asChild>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </Button>
              </li>
              <li className="nav-item">
                <Button className="text-white" variant="link" asChild>
                  <Link to="/about" onClick={closeMobileMenu}>
                    About Us
                  </Link>
                </Button>
              </li>

              <li className="nav-item ml-5 ">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    Routine
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black text-white">
                    <DropdownMenuSeparator />
                    <Link to="/hsc" onClick={closeMobileMenu}>
                      <DropdownMenuItem className="cursor-pointer">
                        Degree Routine
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/hsc" onClick={closeMobileMenu}>
                      <DropdownMenuItem className="cursor-pointer">
                        HSC Routine
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/hsc" onClick={closeMobileMenu}>
                      <DropdownMenuItem className="cursor-pointer">
                        Exam Routine
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="nav-item ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    <Link to="/login" onClick={closeMobileMenu}>
                      <DropdownMenuItem className="cursor-pointer">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/signup" onClick={closeMobileMenu}>
                      <DropdownMenuItem className="cursor-pointer">
                        Sign Up
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/hsc" onClick={closeMobileMenu}>
                      <DropdownMenuItem className="cursor-pointer">
                        Logout
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
