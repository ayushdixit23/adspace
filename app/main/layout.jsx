import Header from '../components/Header';
import Navbar from '../components/navbar';

export default function MainLayout({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col fixed">
      <div className="w-full flex h-[100vh]">
        <div className="md:w-[17%] sm:w-[23%] pn:max-sm:hidden h-screen">
          <Navbar />
        </div>
        <div className="flex pn:max-sm:w-full md:w-[83%] sm:w-[77%] flex-col h-screen">
          <div className="h-[10%] xxl:h-[6%]">
            <Header />
          </div>
          <div className="bg-[#fafafa] text-black h-[90%] xxl:h-[94%]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
