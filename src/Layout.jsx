import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import { Loading } from "./suspense/Loading";
import { Fragment } from "react";
import Navbars from "./components/Navbar";

function Layout() {
  const navigation = useNavigation();

  // jika query ada jangan lakukan loading
  let location_event_q = navigation.location?.search ? false : true; // optional

  return (
    <Fragment>
      {navigation.state === "loading" && location_event_q && <Loading />}

      <Navbars />
      <main>
        <Outlet />
        <Footer />
      </main>
    </Fragment>
  );
}

export default Layout;
