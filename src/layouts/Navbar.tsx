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

export default function Navbar() {
  return (
    <nav className="w-full h-16 fixed top  z-10">
      <div className="h-full w-full bg-black">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto text-white">
          <div className="flex gap-3 items-center justify-center">
            <BiBookReader className="text-white text-5xl" />
            <h1 className="text-white text-2xl">Tdc</h1>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button className="text-white" variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button className="text-white" variant="link" asChild>
                  <Link to="/teacher-list">Our Teachers' List</Link>
                </Button>
              </li>
              <li>
                <Button className="text-white" variant="link" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </li>
              <li>
                <Button className="text-white" variant="link" asChild>
                  <Link to="/about">About Us</Link>
                </Button>
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    Routine
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <Link to="/hsc">
                      <DropdownMenuItem className="cursor-pointer">
                        Degree Routine
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/hsc">
                      <DropdownMenuItem className="cursor-pointer">
                        HSC Routine
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="cursor-pointer">
                      Exam Routine
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li className="ml-5">
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
                    <Link to="/login">
                      <DropdownMenuItem className="cursor-pointer">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/signup">
                      <DropdownMenuItem className="cursor-pointer">
                        Sign Up
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
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
