import AdView2 from './AdView2';
const AdPreview2 = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      {/* <Image src={Mobile} className='m-auto mt-12 h-[500px] w-auto' /> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 pl-2">
        <AdView2 />
      </div>
    </div>
  );
};

export default AdPreview2;
