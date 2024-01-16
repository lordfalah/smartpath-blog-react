import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownLink = ({ title, subTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center" onClick={toggleDropdown}>
        {title}
        {subTitle && (
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
            />
          </svg>
        )}
      </div>

      {isOpen && (
        <div>
          <div className="py-1">
            {subTitle?.map((sub, index) => (
              <Link
                key={index}
                to={sub.to}
                className="text-gray block px-3 py-1 text-black-800 hover:text-blue"
              >
                {sub.subTitle}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownLink;
