import { BiBookReader } from 'react-icons/bi';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=" bg-[#242630] text-secondary p-10 sm:p-5 mt-44">
      <div className="footers w-full flex justify-between items-center p-7 sm: flex-wrap sm:p-0">
        <div className="flex justify-center items-center ">
          <BiBookReader className="text-white text-5xl" />
          <h1 className="text-white text-3xl ">TDC</h1>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Notice</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className="space-y-2">
            <li>Exam Routine</li>
            <li>HSC Class Routine</li>
            <li>Degree Class Routine</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex gap-5 hover: bg-red sm:flex-wrap mt-10 privacy">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto">&#169; Tdc-{year}</p>
      </div>
    </div>
  );
}
