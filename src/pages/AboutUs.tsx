import about from '../assets/image/about.jpg';
const AboutUs = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        overflow: 'hidden',
      }}
      className=" "
    >
      <h1 className="text-center text-5xl mt-60">About Us</h1>
      <div style={{ width: '95%', height: '95%', overflow: 'scroll' }}>
        <img src={about} alt="" className="" />
      </div>
    </div>
  );
};

export default AboutUs;
