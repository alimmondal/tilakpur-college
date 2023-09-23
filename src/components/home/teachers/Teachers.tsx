import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Luki from '../../../assets/image/Luki.jpg';
import math from '../../../assets/image/bella.jpg';
import faruk from '../../../assets/image/faruk.jpg';
import fezu from '../../../assets/image/fozu.jpg';
import habiba from '../../../assets/image/habiba.jpg';
import English from '../../../assets/image/image1.png';
import Likhon from '../../../assets/image/image5.jpg';
import Ershad from '../../../assets/image/image6.jpg';
import jillur from '../../../assets/image/jillur.jpg';
import library from '../../../assets/image/library.jpg';
import mehedi from '../../../assets/image/mehedi.jpeg';
import milon from '../../../assets/image/milon.jpg';
import mostafij from '../../../assets/image/mostafijur.jpg';
import munnu from '../../../assets/image/munnu.jpg';
import nijam from '../../../assets/image/nijam.jpg';
import principal from '../../../assets/image/principal.jpg';
import provat from '../../../assets/image/provat.jpg';
import ruhulla from '../../../assets/image/ruhulla.jpg';
import sobuj from '../../../assets/image/sobuj.jpg';
import chemistry from '../../../assets/image/sohel.jpg';
import bangla from '../../../assets/image/sonali.jpg';
import {
  default as bikash,
  default as tahomin,
} from '../../../assets/image/tahomin.gif';

import './Teachers.scss';

// import Slider from 'react-slick';
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
          {/* Ismic History */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={Ershad} alt="" className="object-cover" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />
                    {/* <i className="fab fa-twitter"></i>{' '} */}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Ershad Hossain{' '}
                  <span className="job-title">Lecturer: Bangla</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* English */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={English} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Alim <span className="job-title">Lecturer: English</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Social Science*/}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={Luki} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Suraya Sultana{' '}
                  <span className="job-title">Lecturer: Social Science</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Geography */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={mehedi} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Md Mehedi{' '}
                  <span className="job-title">Lecturer: Geography</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* history */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={mostafij} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Mostafizur Rahman{' '}
                  <span className="job-title">Lecturer: General History</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Logic */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={tahomin} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Suraya Sultana{' '}
                  <span className="job-title">Lecturer: Social Science</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* ict */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={nijam} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Nizamul Islam <span className="job-title">Lecturer: ICT</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Munnu */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={munnu} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Nizamul Islam{' '}
                  <span className="job-title">Lecturer: Political Science</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Political Science */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={provat} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Provat Kumar{' '}
                  <span className="job-title">Lecturer: Political Science</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Milon */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={milon} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Milon Hossain <span className="job-title">Demonstrator</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Fezu */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={fezu} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Fajlu <span className="job-title">Demonstrator</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* library */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={library} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Md. Belal <span className="job-title">Liberian</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* chemistry */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={chemistry} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Shohel Rana{' '}
                  <span className="job-title">Lecturer: Chemistry</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Physics */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={jillur} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Zillur Rahaman{' '}
                  <span className="job-title">Lecturer: Physics</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Islamic Studies */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={ruhulla} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Abul Bashar Md Ruhullah{' '}
                  <span className="job-title">Lecturer: Islamic Studies</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          {/* psychology */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={faruk} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Omar Faruk{' '}
                  <span className="job-title">Lecturer: Psychology</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* bangla */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={bangla} alt="" className="img-fluid" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Shamim Ara Begum{' '}
                  <span className="job-title">Lecturer: Bengali</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* principal */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={principal} alt="" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Abu Hasnat Md Jobair{' '}
                  <span className="job-title">Principal</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Math */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={math} alt="" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Md Belal Hossain{' '}
                  <span className="job-title">Lecturer: Mathematics</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Accounting */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={bikash} alt="" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Bikash <span className="job-title">Lecturer: Accounting</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* management */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={Likhon} alt="" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Nur Alom Siddiqi{' '}
                  <span className="job-title">Lecturer: Management </span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* Sobuj */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={sobuj} alt="" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Shahanur Rahman Shabuz{' '}
                  <span className="job-title">Marketing</span>{' '}
                </h2>
              </div>
            </div>
          </div>

          {/* ecomonics */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <Link to="/teacher-list">
                  <img src={habiba} alt="" />
                </Link>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <AiFillFacebook className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram className="fab text-5xl" />{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle className="fab text-5xl" />{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  Umme Habiba Mushfika{' '}
                  <span className="job-title">Economics</span>{' '}
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
