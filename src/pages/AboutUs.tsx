import about from '../assets/image/aboutCollege.jpg';
const AboutUs = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',
        // overflow: 'hidden',
      }}
      className=" "
    >
      <h1 className="text-center text-5xl mt-28">About Us</h1>
      <div style={{ width: '95%', height: '95%' }}>
        <img src={about} alt="" className="pt-10" />
      </div>
    </div>
  );
};

export default AboutUs;
