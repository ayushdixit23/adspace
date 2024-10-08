// import IMG1 from '../assets/no-1.png';
// import IMG2 from '../assets/no-2.png';
// import IMG3 from '../assets/no-3.png';
// import IMG4 from '../assets/completed.png';
import { FiCheck } from 'react-icons/fi';
const Stepper = ({ step }) => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center">
        {/* <Image src={IMG1} /> */}
        {step > 1 ? (
          <div className="h-5 w-5 rounded-full flex justify-center items-center p-1 bg-green-400 text-white">
            {' '}
            <FiCheck />
          </div>
        ) : (
          <div className="h-5 w-5 rounded-full flex justify-center items-center text-white text-[12px] px-3 py-3 bg-black">
            1
          </div>
        )}

        <p
          className={`${step > 1 ? 'text-green-400' : 'text-black'} text-[15px] text-center`}
        >
          Select your type
        </p>
      </div>
      <hr className=" border-1 border-black mt-2 w-[100px] sm:w-[200px]" />
      <div className="flex flex-col items-center">
        {/* <Image src={IMG2} /> */}
        {step > 2 ? (
          <div className="h-5 w-5 rounded-full flex justify-center items-center p-1 bg-green-400 text-white">
            {' '}
            <FiCheck />
          </div>
        ) : (
          <div className="h-5 w-5 rounded-full flex justify-center items-center text-white text-[12px] px-3 py-3 bg-black">
            2
          </div>
        )}
        <p
          className={`${step > 2 ? 'text-green-400' : 'text-black'} text-[15px] text-center`}
        >
          Provide Your basic info
        </p>
      </div>
      <hr className=" border-1 border-black mt-2  w-[100px] sm:w-[200px]" />
      <div className="flex flex-col items-center">
        {/* <Image src={IMG3} /> */}
        <div className="h-5 w-5 rounded-full flex justify-center items-center text-white text-[12px] px-3 py-3 bg-black">
          3
        </div>
        <p className="text-[15px] text-center text-black">Verify your OTP</p>
      </div>
    </div>
  );
};

export default Stepper;
