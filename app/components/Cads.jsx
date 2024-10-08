import Cads2 from './Cads2';
const Cads = () => {
  return (
    <>
      <div className="  flex justify-between mb-3 w-3/4 ss:w-full items-center gap-20">
        <div className="font-Jost text-2xl font-semibold ss:text-xl">Ads</div>
        <div className="flex items-center gap-4">
          <div>
            <button
              className="font-Jost border-solid border-2 border-gray-300
 text-xs p-2 bg-white font-light rounded-md flex gap-1.5 focus:bg-neutral-200 ss:w-full"
            >
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.875 6.375H4.125V7.625H2.875V6.375ZM11.625 3.25V12C11.625 12.6875 11.0625 13.25 10.375 13.25H1.625C0.93125 13.25 0.375 12.6875 0.375 12L0.38125 3.25C0.38125 2.5625 0.93125 2 1.625 2H2.25V0.75H3.5V2H8.5V0.75H9.75V2H10.375C11.0625 2 11.625 2.5625 11.625 3.25ZM1.625 4.5H10.375V3.25H1.625V4.5ZM10.375 12V5.75H1.625V12H10.375ZM7.875 7.625H9.125V6.375H7.875V7.625ZM5.375 7.625H6.625V6.375H5.375V7.625Z"
                  fill="#747677"
                />
              </svg>
              Jul 01, 2024 - Jul 31, 2024
            </button>
          </div>
        </div>
      </div>
      <Cads2 />
    </>
  );
};

export default Cads;
