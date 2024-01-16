import { useLoaderData } from "react-router-dom";
import Banner from "../components/DetailEvent/Banner";
import HeroEvent from "../components/DetailEvent/Hero";
import ContentEvent from "../components/DetailEvent/Content";
import NotFound from "../assets/icons/NotFound.svg";

const EventDetail = () => {
  const { data } = useLoaderData();
  return (
    <section className="space-y-10 lg:space-y-20">
      {Object.keys(data).length !== 0 ? (
        <>
          <Banner>
            <HeroEvent data={data} />
          </Banner>

          <ContentEvent data={data} />
        </>
      ) : (
        <div className="w-full -mb-10 px-4 md:px-0">
          <img
            width={250}
            height={250}
            src={NotFound}
            className="mx-auto my-20 w-72 sm:w-80"
            alt="not found"
            style={{
              objectFit: "contain",
            }}
          />

          <div className="space-y-4 mx-auto">
            <h3 className="text-center text-2xl text-slate-800 font-semibold">
              Not Found
            </h3>

            <p className="text-center text-lg text-slate-400 font-medium">
              Data is empty or Try adjusting your filter
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetail;
