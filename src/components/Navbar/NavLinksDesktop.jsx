import { Link, useLocation } from "react-router-dom";
// import { HiChevronDown } from "react-icons/hi";
import { useEffect } from "react";
import Button from "../Button";
import { links } from "./NavbarRoutes";
import { useState } from "react";

// import { useEffect } from "react"
// For Desktop
const LinkNavbar = ({ title, to, subTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleMouseEnter = () => {
  //   setIsOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsOpen(false);
  // };
  return (
    <div
      className="relative"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onClick={toggleDropdown}
    >
      <Link
        to={to}
        className="flex items-center gap-x-1.5 px-3 py-1 text-black-800"
      >
        {title}
        {/* {subTitle && <HiChevronDown />} */}
      </Link>
      {/* {isOpen && subTitle && (
        <div className="absolute shadow-md bg-white min-w-[400px] rounded-md">
          <ul>
            {title.map((sub, index) => (
              <Link
                key={index}
                to={sub.to}
                className="flex items-center gap-x-1.5 px-3 py-1 text-black-800 hover:text-blue"
              >
                {sub.subTitle}
              </Link>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default function NavLinks(user) {
  // const user_id = localStorage.getItem("user_id");
  const { pathname } = useLocation();
  // console.log(pathname)
  // console.log("user",user.user)
  // console.log("email",user.user.email)

  // Update lastVisitedRoute when the route changes
  useEffect(() => {
    // localStorage.setItem("lastVisitedRoute", pathname);
    // jika pathname login atau register maka tidak usah disimpan
    if (pathname !== "/login" && pathname !== "/register") {
      localStorage.setItem("lastVisitedRoute", pathname);
    }
  }, [pathname]);
  return (
    <>
      <div className="w-full 2xl:text-xl flex items-center justify-end gap-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-between">
            <ul className=" block md:flex w-full gap-8">
              {links.map((link, index) => (
                <li
                  className={`flex items-center justify-between hover:bg-gray-light rounded-md text-[1rem] 
                    ${
                      pathname === "/" && index === 0
                        ? "bg-gray-light"
                        : pathname.includes("video-course") && index === 1
                        ? "bg-gray-light"
                        : pathname.includes("live-course") && index === 2
                        ? "bg-gray-light"
                        : pathname.includes("events") && index === 3
                        ? "bg-gray-light"
                        : pathname.includes("about") && index === 4
                        ? "bg-gray-light"
                        : ""
                    }`}
                  onClick={() => window.scrollTo(0, 0)}
                  key={index}
                >
                  <LinkNavbar
                    title={link.title}
                    to={link.to}
                    subTitle={link.subTitle}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 px-2">
          <div onClick={() => window.scrollTo(0, 0)}>
            {user.user.email !== "" ? (
              <Button
                name="Dashboard"
                toPage="dashboard"
                width="full"
                hover={true}
              />
            ) : (
              <Button name="Login" toPage="login" width="full" hover={true} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
