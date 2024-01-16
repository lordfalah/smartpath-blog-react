import { useEffect, useRef } from "react";

const Dropdown = ({
  category,
  size = "w-auto",
  isOpen,
  setIsOpen,
  select,
  onClick,
}) => {
  // check jika click keluar dari content dropdown
  let dropdownContent = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownContent.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownContent]);

  return (
    <div ref={dropdownContent} className={`relative group ${size}`}>
      <button
        onClick={() => setIsOpen((open) => !open)}
        id="dropdown-button"
        className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-[#0056A3] rounded-md shadow-sm focus:outline-none"
      >
        <span className="text-lg">{select}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 fill-black ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-0.5 rounded-md shadow-lg bg-white border border-[#0056A3] p-1 space-y-1 ${size} h-fit max-h-72 overflow-auto`}
      >
        {/* Dropdown content goes here */}
        {category?.map((data, idx) => (
          <button
            onClick={() => onClick(data)}
            name={data?.name}
            key={idx}
            type="button"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-lg w-full text-left"
          >
            {data?.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
