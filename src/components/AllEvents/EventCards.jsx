import { useState } from "react";
import Dropdown from "../Button/Dropdown";
import Card from "../Card";
import { Link, useLoaderData } from "react-router-dom";
import Search from "../../assets/icons/Search.svg";

const EventCards = () => {
  const { events, categorys } = useLoaderData();
  const [category, setCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("All Category");

  // fitur search dan filter
  function searchAndFilter(keyword, category) {
    let filteredEvents =
      events && events?.eventServices ? [...events?.eventServices] : [];

    if (keyword) {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (category) {
      if (category === "default") {
        return filteredEvents;
      } else {
        filteredEvents = filteredEvents.filter(
          (event) => event?.category_id === category
        );
      }
    }

    return filteredEvents;
  }

  const results = searchAndFilter("", category);

  const onSelected = (data) => {
    setCategory(data?.id);
    setSelect(data?.name);
    setIsOpen(false);
  };

  return (
    <section>
      <div className="container px-4 sm:px-16 mx-auto">
        <div className="w-full flex gap-x-4 gap-y-3 sm:gap-y-0 justify-start sm:justify-center md:justify-end items-center my-10 md:my-20 flex-wrap">
          <p className="text-lg">Sesuaikan berdasarkan :</p>

          <Dropdown
            title={"All Category"}
            category={[
              ...categorys,
              {
                id: "default",
                name: "All Category",
                type: "default",
                createdAt: "default",
                updatedAt: "default",
              },
            ]}
            values={events?.eventServices}
            size="w-[277px]"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClick={onSelected}
            select={select}
          />
        </div>
        {/* Cards */}
        <div className="flex justify-center gap-y-10 lg:gap-y-12 xl:gap-y-16 lg:justify-between gap-x-8 flex-wrap">
          {results && results.length > 0 ? (
            results?.map(
              ({ title, description, date_start, poster, slug }, idx) => (
                <Link
                  key={idx}
                  to={{
                    pathname: `/event/${slug}`,
                  }}
                  className="cursor-pointer"
                >
                  <Card
                    key={idx}
                    image={poster || ""}
                    title={title}
                    description={description}
                    date_start={date_start}
                  />
                </Link>
              )
            )
          ) : (
            <div className="w-full -mb-10 px-4 md:px-0">
              <img
                src={Search}
                className="mx-auto my-20 w-72 sm:w-80"
                alt="not found"
                style={{
                  objectFit: "contain",
                }}
              />

              <div className="space-y-4 mx-auto">
                <h3 className="text-center text-2xl text-slate-800 font-semibold">
                  No matching search results
                </h3>

                <p className="text-center text-lg text-slate-400 font-medium">
                  Try again using more general search terms
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCards;
