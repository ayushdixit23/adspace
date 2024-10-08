import Ads from './Ads';
import Chart from './Chart';
const Overview = () => {
  return (
    <>
      <div className="pl-5 ss:w-full ss:flex-col ss:mb-5 pp:mb-8 sm:flex sm:flex-row sm:justify-between sm:mb-10 md:w-3/4">
        <div className="font-Jost sm:text-2xl font-semibold ss:text-xl ss:mb-3 ">
          {' '}
          Overview
        </div>
        <div className="pp:flex sm:items-center sm:gap-4 pp:gap-20">
          <div>
            <button
              className=" font-Jost border-solid border border-gray-300
 text-xs p-2 bg-white font-light rounded-l-lg focus:bg-neutral-200 "
            >
              Last 30 days
            </button>
            <button
              className=" font-Jost border-solid border border-gray-300
      text-xs p-2 bg-white font-light focus:bg-neutral-200"
            >
              Last 7 days
            </button>
            <button
              className="font-Jost border-solid border border-gray-300
 text-xs p-2 bg-white font-light rounded-r-lg focus:bg-neutral-200"
            >
              Last 24 hours
            </button>
          </div>
          <div>
            <button
              className="font-Jost border-solid border border-gray-300
 text-xs p-2 bg-white font-light rounded-md flex gap-1.5 focus:bg-neutral-200"
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
              Custom
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:gap-4 sm:mx-3 md:ml-3 ss:w-auto ss:grid grid-cols-2 ss:gap-2 md:w-3/4">
        <div className="bg-white border-solid border-1 border-gray-300 md:w-56 p-2 rounded-md ss:w-40 pp:w-48">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 ss:text-xs">
            Amount Spent{' '}
            <div className="w-4 h-4 rounded-full bg-red-600"> </div>
          </div>
          <div className="font-Jost font-semibold ss:text-xs md:text-base">
            ₹0.00
          </div>
        </div>
        <div className="bg-white border-solid border-1 border-gray-300 md:w-56 p-2 rounded-md ss:w-40 pp:w-48">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 ss:text-xs">
            Impressions{' '}
            <div className="w-4 h-4 rounded-full bg-blue-400"> </div>
          </div>
          <div className="font-Jost font-semibold ss:text-xs md:text-base">
            0
          </div>
        </div>
        <div className="bg-white border-solid border-1 border-gray-300 md:w-56 p-2 rounded-md ss:w-40 pp:w-48">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 ss:text-xs">
            Clicks <div className="w-4 h-4 rounded-full bg-orange-400"> </div>
          </div>{' '}
          <div className="font-Jost font-semibold ss:text-xs md:text-base">
            0
          </div>
        </div>
        <div className="bg-white border-solid border-1 border-gray-300 md:w-56 p-2 rounded-md ss:w-40 pp:w-48">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 ss:text-xs">
            CPC <div className="w-4 h-4 rounded-full bg-green-600"> </div>
          </div>
          <div className="font-Jost font-semibold ss:text-xs md:text-base">
            ₹0.00
          </div>
        </div>
      </div>
      <div className=" bg-white md:w-3/4 mt-8 rounded-md sm:p-5 ss:w-auto ss:p-2">
        <div className="font-Jost flex justify-between mb-10 items-center ss:text-sm ss:mb-5 sm:text-base">
          Campaign (3)
          <button
            className="font-Jost border-solid border-2 border-gray-300
 text-xs p-2 bg-white font-light rounded-md flex gap-1.5 focus:bg-neutral-200"
          >
            <div className="flex sm:gap-10 px-1 ss:gap-4 ">
              All Campaign{' '}
              <div className="mt-1">
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_138_2802" fill="white">
                    <path d="M6.98998 8.21248L13 2.20248L11.587 0.787476L6.98998 5.38748L2.39398 0.787476L0.97998 2.20148L6.98998 8.21248Z" />
                  </mask>
                  <path
                    d="M6.98998 8.21248L-11.3963 26.5957L6.98845 44.9836L25.3748 26.5973L6.98998 8.21248ZM13 2.20248L31.3848 20.5873L49.7565 2.21547L31.3978 -16.1693L13 2.20248ZM11.587 0.787476L29.9848 -17.5843L11.594 -36.0011L-6.80379 -17.5913L11.587 0.787476ZM6.98998 5.38748L-11.4028 23.7643L6.98798 42.171L25.3808 23.7663L6.98998 5.38748ZM2.39398 0.787476L20.7868 -17.5893L2.40198 -35.9901L-15.9908 -17.5973L2.39398 0.787476ZM0.97998 2.20148L-17.4048 -16.1833L-35.788 2.19995L-17.4063 20.5847L0.97998 2.20148ZM25.3748 26.5973L31.3848 20.5873L-5.38479 -16.1823L-11.3948 -10.1723L25.3748 26.5973ZM31.3978 -16.1693L29.9848 -17.5843L-6.81079 19.1592L-5.39779 20.5742L31.3978 -16.1693ZM-6.80379 -17.5913L-11.4008 -12.9913L25.3808 23.7663L29.9778 19.1663L-6.80379 -17.5913ZM25.3828 -12.9893L20.7868 -17.5893L-15.9988 19.1643L-11.4028 23.7643L25.3828 -12.9893ZM-15.9908 -17.5973L-17.4048 -16.1833L19.3648 20.5863L20.7788 19.1723L-15.9908 -17.5973ZM-17.4063 20.5847L-11.3963 26.5957L25.3763 -10.1708L19.3663 -16.1818L-17.4063 20.5847Z"
                    fill="#747677"
                    mask="url(#path-1-inside-1_138_2802)"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 text-xs font-Jost font-light text-slate-400 ">
          <Chart />
        </div>
      </div>
      <Ads />
    </>
  );
};

export default Overview;
