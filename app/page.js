import SignInInfo from './components/SignInInfo';
import SignIn from './components/SignIn';

export default function Home() {
  return (
    <div className=" bg-[#F8F9FA] px-4 pp:px-[10%] min-h-screen m-auto  flex justify-center sm:max-md:px-4 items-center gap-4 sm:flex-row flex-col sm:gap-8">
      <div className="w-full ">
        <SignInInfo />
      </div>
      <div className="w-full">
        <SignIn />
      </div>
    </div>
  );
}
