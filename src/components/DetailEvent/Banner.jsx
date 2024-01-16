const Banner = ({ children }) => {
  return (
    <section
      className={`w-full relative before:absolute before:inset-0 before:top-0 before:content-[''] before:h-[450px] before:bg-banner-detail before:bg-cover before:bg-top before:bg-no-repeat before:z-20`}
    >
      {children}
    </section>
  );
};

export default Banner;
