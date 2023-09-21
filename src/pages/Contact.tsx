// import {
//   faClock,
//   faMapMarker,
//   faPhone,
// } from '@fortawesome/free-solid-svg-icons';

import ContactInfo from '@/components/ContactInfo';

type infos = {
  title: string;
  description: string;
  background: string;
  email?: string;
};

const infosData: infos[] = [
  {
    title: 'Visit Our Location',
    description: 'Tilakpur Degree College, Tilakpur, Akkelpur, Joypurhat.',
    // icon: faMapMarker,
    background: 'primary',
  },
  {
    title: 'Contact Us Now',
    description: 'Principal:  +8801711-787063 ',
    email: 'Email: collegetilakpur@gmail.com',
    // icon: faPhone,
    background: 'dark',
  },
  {
    title: 'Opening Hour',
    description: 'We are opening 7 days',
    // icon: faClock,
    background: 'primary',
  },
];

const Contact = () => {
  return (
    <div className="container h-screen flex-cols-2 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="">
        {infosData.map((info: infos) => (
          <ContactInfo info={info}></ContactInfo>
        ))}
      </div>
    </div>
  );
};

export default Contact;
