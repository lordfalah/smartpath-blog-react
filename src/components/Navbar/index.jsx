import logo_smartpath from "../../assets/logo/logo_smartpath.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";

const Navbars = () => {
  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  const userProfile = true;
  useEffect(() => {
    // ambil user_id dari local storage
    const user_id = localStorage.getItem("user_id");

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleIsOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <nav className="sticky flex items-center justify-between left-0 top-0 w-full py-1 md:px-10 shadow-xl bg-white z-[200]">
      <div>
        <Link to="/">
          <img
            src={logo_smartpath}
            alt="logo smartpath"
            className="w-[130px] 2xl:w-[170px]"
          />
        </Link>
      </div>

      <div
        onClick={toggleIsOpen}
        className="text-3xl mr-5 cursor-pointer lg:hidden"
      >
        {open ? <IoClose size={28} /> : <IoMenu size={28} />}
      </div>

      {/* For Mobile - Clickable */}
      {open && width < 1024 && <NavLinksMobile user={userProfile} />}

      {/* For Desktop - Hoverable */}
      {width >= 1024 && <NavLinksDesktop user={userProfile} />}
    </nav>
  );
};

export default Navbars;
