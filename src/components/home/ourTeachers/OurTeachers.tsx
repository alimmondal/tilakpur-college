import teacher1 from '../../../assets/image/image1.png';
import teacher4 from '../../../assets/image/image4.png';
import teacher5 from '../../../assets/image/image5.jpg';
import teacher3 from '../../../assets/image/image6.jpg';
import teacher2 from '../../../assets/image/principal.png';
import './OurTeachers.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

type Settings = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  cssEase: string;
  className: string;
  centerMode: boolean;
};

const OurTeachers = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    className: 'center',
    centerMode: true,
    // centerPadding: "60px",
    // speed: 500,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    // focusOnSelect: true,
  };

  return (
    <div className="boddy">
      <div className="container pr-16 pl-16 carousel">
        <h1 className="text-4xl text-center font-bold py-6"> Our Teacher</h1>
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher2} alt="" className="object-cover" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/shamimarabegum.sonali/">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  Shamim ara Begum{' '}
                  <span className="job-title">Lecturer: Bangla</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher1} alt="" className="img-fluid" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  Alim <span className="job-title">Lecturer: English</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher3} alt="" className="img-fluid" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  Ershad Ali{' '}
                  <span className="job-title">Lecturer: Islamic History</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher4} alt="" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  Abu Hasnat Md Jobair{' '}
                  <span className="job-title">Principal</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher5} alt="" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher3} alt="" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurTeachers;
