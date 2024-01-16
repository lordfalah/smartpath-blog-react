import Vector from "../../assets/icons/Vector.svg";
import Clocks from "../../assets/icons/Clocks.svg";
import moment from "moment";

const HeroEvent = ({ data }) => {
  const fileName =
    (data.poster && data.poster.substring(data.poster.indexOf("images"))) || "";

  return (
    <div className="flex gap-x-10 items-start lg:items-end w-full relative z-30 container lg:max-w-7xl mx-auto pt-10 px-4 sm:px-16 lg:px-20 lg:pt-52 md:justify-center flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 2xl:pr-20">
      <img
        src={`${import.meta.env.VITE_API_URL_LOCAL}/${fileName}`}
        alt="event"
        className="h-auto max-h-[500px] sm:max-h-max sm:h-[509px] w-[419px] lg:h-[649px] lg:w-[459px] xl:w-[519px]"
        style={{ objectFit: "contain" }}
      />

      <div className="space-y-6 sm:space-y-9 mb-0 lg:mb-20">
        <div className="w-fit text-lg border border-[#0056A34D] rounded-[10px] text-center px-6 py-1.5 bg-[#EBF2F8]">
          {data.categories.name}
        </div>

        <div className="space-y-6">
          <h2 className="font-semibold text-3xl md:text-4xl">{data.title}</h2>

          <div>
            Batas Pendaftaran
            <br />
            <div className="flex gap-x-4">
              <img
                src={Clocks}
                width={50}
                height={50}
                className="w-6 h-6 aspect-square"
                alt="date"
              />
              <p className="text-[#0056A3] font-medium text-lg">
                {moment(data.date_start).format("DD MMMM YYYY")}
              </p>
            </div>
          </div>

          <div>
            Kuota
            <div className="flex gap-x-4">
              <img
                src={Vector}
                width={50}
                height={50}
                className="w-6 h-6 aspect-square"
                alt="kouta"
              />
              <p className="text-[#0056A3] font-medium text-lg">
                {data.kuota === 0 ? "Ditutup jika kouta penuh" : data.kouta}
              </p>
            </div>
          </div>

          {/* <div className="flex gap-x-4">
            <img
              src={Location}
              width={50}
              height={50}
              className="w-6 h-6 aspect-square"
            />
            <p className="text-[#0056A3] font-medium text-lg">
              Online
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroEvent;
