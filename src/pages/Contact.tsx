// import {
//   faClock,
//   faMapMarker,
//   faPhone,
// } from '@fortawesome/free-solid-svg-icons';
import ContactInfo from '@/components/ContactInfo';
import college from '../assets/image/contact.png';

type infos = {
  title: string;
  description: string;
  email?: string;
};

const infosData: infos[] = [
  {
    title: 'Visit Our Location:',
    description: 'Tilakpur Degree College, Tilakpur, Akkelpur, Joypurhat.',
  },
  {
    title: 'Contact Us Now: ',
    description: 'Principal:  +8801711-787063 ',
    email: 'Email: collegetilakpur@gmail.com',
  },
  {
    title: 'Facebook: ',
    description: 'https://www.facebook.com/colltilakpur.hasnat',
  },
];

const Contact = () => {
  return (
    <div className=" pt-28">
      <h1 className=" text-center text-3xl">Contact Us</h1>
      <div className="container h-screen flex items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-28">
        <div className="">
          {infosData.map((info: infos) => (
            <ContactInfo info={info}></ContactInfo>
          ))}
        </div>
        <div className="">
          <img src={college} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
