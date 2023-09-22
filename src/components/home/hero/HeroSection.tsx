import video from '@/videos/video1.mp4';
import { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <div className="heroContainer mt-14">
        <div className="heroBg ">
          <video className="videoBg" src={video} autoPlay loop muted />
        </div>
        <div className="heroContent ">
          <p>
            <i style={{ color: '' }} className="fa fa-book-reader heroIcon"></i>
          </p>
          {/* <h1>
            স্বাগতম <br /> তিলকপুর মহাবিদ্যালয়
          </h1> */}
          <h1>
            Welcome to <br /> Tilakpur Degree College
          </h1>
          <p>we aim at creating real talents</p>
          <div className="heroBtnWrapper mt-10">
            <Link to="/contact">
              <button
                className="mainBtn "
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                <span>Contact us</span>{' '}
                {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
              </button>
            </Link>
          </div>
        </div>
        <h1 style={{ color: 'white' }}>this is info</h1>
      </div>
    </div>
  );
};

export default HeroSection;
