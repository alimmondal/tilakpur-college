import teacher4 from '../../../assets/image/image4.png';
import teacher5 from '../../../assets/image/image5.jpg';
import teacher3, {
  default as teacher1,
  default as teacher6,
} from '../../../assets/image/image6.jpg';
import teacher2 from '../../../assets/image/principal.png';
import './Teachers.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Teachers = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <div className="boddy mt-32">
      <div className="container  pl-0 pr-0 carousel">
        <h1 className="text-white text-center font-bold py-3"> Our Teachers</h1>
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher2} alt="" className="img-fluid" />
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
                  John Doe <span className="job-title">UI developer</span>{' '}
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
                  John Doe <span className="job-title">UI developer</span>{' '}
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
                  John Doe <span className="job-title">UI developer</span>{' '}
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
                <img src={teacher6} alt="" />
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

export default Teachers;
