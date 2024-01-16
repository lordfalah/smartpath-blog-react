import { links } from "./NavbarRoutes";
import DropdownLink from "./DropDownClick";
import Button from "../Button";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function NavLinksMobile(user) {
  const { pathname } = useLocation();

  useEffect(() => {
    // localStorage.setItem("lastVisitedRoute", pathname);
    // jika pathname login atau register maka tidak usah disimpan
    if (pathname !== "/login" && pathname !== "/register") {
      localStorage.setItem("lastVisitedRoute", pathname);
    }
  }, [pathname]);
  return (
    <div className="shadow-md absolute top-[75px] bg-white w-full px-3 py-10">
      <ul className="w-full flex flex-col gap-5 pl-2">
        {links.map((link, index) => {
          return (
            <li key={index} className="flex items-center justify-between">
              <DropdownLink
                to={link.to}
                title={link.title}
                key={index}
                subTitle={link.subTitle}
              />
            </li>
          );
        })}
        {user.id ? (
          <Button name="Dashboard" toPage="dashboard" width="full" />
        ) : (
          <Button name="Login" toPage="login" width="full" />
        )}
      </ul>
    </div>
  );
}
