//import FeatureCard from "../components/FeatureCard";
//import SignIn from "../components/SignIn";
import SignIn from '../components/SignIn';
import SignInInfo from '../components/SignInInfo';

const page = () => {
  return (
    // <div className=" bg-pink-600 px-4 pp:px-[10%] min-h-screen m-auto w-screen flex justify-center sm:max-md:px-4 items-center gap-4 sm:flex-row flex-col sm:gap-8">
    <div className=" bg-white w-screen flex h-[100vh] justify-center items-center">
      <div className="bg-white h-[10%]"></div>
      <div className="w-[50%] ">
        <div className="w-[100%] flex justify-center items-center">
          <SignInInfo />
        </div>
      </div>
      <div className="w-[50%]  ">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
