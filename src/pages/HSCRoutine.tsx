import routine from '../assets/image/routine.jpg';
const HSCRoutine = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150vh',
      }}
      className=" "
    >
      <div className=" ">
        <h1 className="text-center text-5xl mt-60">Class Routine</h1>
        <h1 className="text-center text-1xl ">HSC</h1>
        <img src={routine} alt="" className="mt-10" />
      </div>
    </div>
  );
};

export default HSCRoutine;
