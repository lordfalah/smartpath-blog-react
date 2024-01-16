import banner from "../../assets/image/banner.jpg";

const Banner = () => {
  return (
    <section className="w-full relative after:absolute after:z-10 after:inset-0 after:bg-gradient-to-r after:from-[#0056A3] after:to-transparent h-[535px] flex items-center justify-center sm:justify-start">
      <img
        src={banner}
        alt="banner"
        className="w-full"
        style={{ objectFit: "cover" }}
      />

      <div className="container mx-auto">
        <div className="max-w-4xl px-4 sm:px-16 relative z-20 ">
          <div className="space-y-8">
            <h1 className="font-semibold text-4xl text-white md:leading-[54px]">
              Temukan dan ikuti Event menarik dari Smartpath
            </h1>
            <p className="text-lg leading-[27px] text-white">
              Banyak event mulai dari Beasiswa, Business case competition, Essay
              & Olimpiade dan Webinar. Dapatkan insights baru dari pemateri
              hebat dibidangnya untuk mempersiapkan karir kamu dimasa depan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
