import "../css/spinner.css";

export const Loading = () => {
  return (
    <>
      <div className="fixed transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg text-left h-full transition-all">
            <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <svg className="spinner " viewBox="0 0 50 50">
                <circle
                  className="path"
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="orange"
                  strokeWidth="5"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-white opacity-50 z-[999]"></div>
    </>
  );
};
