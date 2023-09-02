import principal from '../../../assets/image/image4.png';
import './Principal.css';

const Principal = () => {
  return (
    <div className="principal">
      <div className="flex flex-row pContainer ">
        <div className="pWord">
          <h3>A Word</h3>
          <h3>From Our Principal</h3>
          <p>
            ” We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it. A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which I enjoy with my whole
            heart. I am alone, and feel the charm of existence in this spot,
            which was created for the bliss of souls like mine. I am so happy,
            my dear friend, so absorbed in the exquisite sense of mere.. “ ” We
            don’t just give students an education and experiences that set them
            up for success in a career. We help them succeed in their career—to
            discover a field they’re passionate about and dare to lead it. A
            wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere.. “
          </p>
          <p className="signature">By Jobaer Shopon</p>
        </div>
        <div className="imgDiv ">
          <img src={principal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Principal;
