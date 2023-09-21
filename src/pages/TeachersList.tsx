import t2 from '../assets/image/t2.jpg';
import t3 from '../assets/image/t3.jpg';
import t4 from '../assets/image/t4.jpg';
import t1 from '../assets/image/tl1.jpg';
const TeachersList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '150vh',
      }}
      className=" "
    >
      <div className=" ">
        <h1 className="text-center text-5xl mt-60">Teachers' List</h1>
        {/* <h1 className="text-center text-1xl ">HSC</h1> */}
        <img src={t1} alt="" className="px-28 py-5" />
        <img src={t3} alt="" className="px-28 py-5" />
        <img src={t4} alt="" className="px-28" />
        <img src={t2} alt="" className="px-28 py-5" />
      </div>
    </div>
  );
};

export default TeachersList;
