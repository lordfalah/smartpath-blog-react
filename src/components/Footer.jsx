import Logo from "../assets/logo/logo_smartpath.png";
import BNI from "../assets/partners/bni.png";
import BRI from "../assets/partners/bri.png";
import Mandiri from "../assets/partners/mandiri.png";
import PermataBank from "../assets/partners/permatabank.png";
import Spay from "../assets/partners/spay.png";
import OVO from "../assets/partners/ovo.png";
import Gopay from "../assets/partners/gopay.png";
import Alfamart from "../assets/partners/alfamart.png";
import QRIS from "../assets/partners/qris.png";
import Tiktok from "../assets/partners/tiktok.png";
import Instagram from "../assets/partners/insta.png";
import linkedin from "../assets/partners/linkedin.png";
import Youtube from "../assets/partners/yt.png";

import { Link } from "react-router-dom";

const sosmed = [
  {
    title: "Tiktok",
    src: Tiktok,
    to: "/",
  },

  {
    title: "Instagram",
    src: Instagram,
    to: "/",
  },

  {
    title: "linkedin",
    src: linkedin,
    to: "/",
  },

  {
    title: "Youtube",
    src: Youtube,
    to: "/",
  },
];

const pembayaran = [
  {
    title: "BNI",
    src: BNI,
  },
  {
    title: "BRI",
    src: BRI,
  },
  {
    title: "Alfamart",
    src: Alfamart,
  },
  {
    title: "Mandiri",
    src: Mandiri,
  },
  {
    title: "PermataBank",
    src: PermataBank,
  },
  {
    title: "Spay",
    src: Spay,
  },
  {
    title: "OVO",
    src: OVO,
  },
  {
    title: "Gopay",
    src: Gopay,
  },
  {
    title: "QRIS",
    src: QRIS,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-t-[#00000080] mt-32">
      <div className="container mx-auto py-4 mt-2 px-4 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
          <div className="col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <div className="space-y-1.5">
              <img
                src={Logo}
                alt="Logo"
                width={150}
                height={150}
                className="w-40 h-15 md:w-56 md:h-20 aspect-video"
                style={{ objectFit: "contain" }}
              />
              <p className="text-gray-600 max-w-sm md:max-w-md">
                One stop solution bimbingan sukses kuliah dan karir
              </p>
            </div>

            <div className="flex gap-x-4 sm:gap-x-6 my-6">
              {sosmed.map(({ title, src, to }, idx) => (
                <Link key={idx} to={{ pathname: to }} className="w-6 h-6">
                  <img
                    src={src}
                    alt={title}
                    width={50}
                    height={50}
                    className="w-full aspect-square"
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              ))}
            </div>

            <div className="space-y-3.5">
              <p className="text-gray-600">Metode Pembayaran</p>
              <div className="flex justify-start sm:justify-normal flex-wrap md:flex-nowrap gap-x-3 gap-y-3.5">
                {pembayaran.map(({ title, src }, idx) => (
                  <div key={idx} className="w-10 h-6 md:w-14">
                    <img
                      src={src}
                      alt={title}
                      width={50}
                      height={50}
                      className="w-full h-full aspect-[3/2]"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 mt-6">&copy; 2023 All right reserved</p>
          </div>

          <div className="md:flex md:flex-row md:col-span-2 md:gap-24 space-y-6 md:space-y-0">
            <div className="">
              <p className="font-semibold mb-4 text-base md:mx-0">SmartPath</p>
              <ul className="space-y-2 md:mx-0">
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Kerjasama
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <p className="font-semibold mb-4 text-base md:mx-0">Produk</p>
              <ul className="space-y-2 md:mx-0">
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Free Course
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Live Course
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Event
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <p className="font-semibold mb-4 text-base md:mx-0">Lainnya</p>
              <ul className="space-y-2 md:mx-0">
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
