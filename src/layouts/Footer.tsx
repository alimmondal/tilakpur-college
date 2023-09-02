import { BiBookReader } from 'react-icons/bi';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-20 mt-44">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center justify-center">
          {/* <img className="h-8" src={logo} alt="log" /> */}
          <BiBookReader className="text-white text-5xl" />{' '}
          <h1 className="text-white text-2xl">Tilakpur Degree College</h1>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>About Us</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; College-Net {year}</p>
      </div>
    </div>
  );
}
