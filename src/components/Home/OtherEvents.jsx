import Card from "../Card";
import { Link, useLoaderData } from "react-router-dom";
import event from "../../assets/icons/event.svg";

// Fungsi untuk mendapatkan 3 data secara acak
function getRandomData(arr, numItems) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // Mengacak array
  return shuffled.slice(0, numItems); // Mengambil numItems pertama setelah diacak
}

const OtherEvents = () => {
  const { data } = useLoaderData();
  const currentDate = new Date();

  const eventsEnd =
    data.eventServices &&
    data.eventServices.filter((event) => {
      const startDate = new Date(event.date_start);
      return startDate < currentDate;
    });

  const evendEnds = data.eventServices
    ? getRandomData(data.eventServices, 3)
    : null;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-16 space-y-10 sm:space-y-20">
        <div className="flex flex-wrap md:flex-nowrap gap-y-4 justify-between items-center gap-x-2 sm:gap-x-4">
          <h2 className="text-2xl sm:text-3xl font-semibold basis-auto lg:basis-1/4 md:order-1">
            Event lainnya
          </h2>
          <div className="border-2 border-[#FFA700] basis-full md:basis-1/2 lg:basis-full h-1 sm:h-0 order-last md:order-2" />
          <Link
            to={"/all-event"}
            className="block text-center bg-[#FFA700] py-3 px-3.5 md:px-0 lg:px-2 basis-auto md:basis-1/3 lg:basis-2/6 xl:basis-1/4 rounded-[10px] md:order-3"
          >
            <span className="font-semibold text-lg text-white">
              Lihat lebih banyak
            </span>
          </Link>
        </div>

        {/* Cards */}
        {evendEnds ? (
          <div className="flex justify-center gap-y-10 lg:gap-y-12 xl:gap-y-16 lg:justify-between gap-x-8 flex-wrap">
            {evendEnds.map(
              ({ title, description, date_start, poster, slug }, idx) => (
                <Link
                  key={idx}
                  to={{
                    pathname: `/event/${slug}`,
                  }}
                  className="cursor-pointer"
                >
                  <Card
                    image={poster || ""}
                    title={title}
                    description={description}
                    date_start={date_start}
                  />
                </Link>
              )
            )}
          </div>
        ) : (
          <div className="mx-auto">
            <img
              src={event}
              width={50}
              height={50}
              className="w-60 h-60 aspect-square mx-auto"
            />

            <h3 className="text-center">You have not comming event</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherEvents;
