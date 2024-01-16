import { useRouteError } from "react-router-dom";
import ServerDown from "../assets/icons/ServerDown.svg";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="w-full px-4 md:px-0">
      <img
        src={ServerDown}
        className="mx-auto my-20 w-72 sm:w-80"
        alt="not found"
        style={{
          objectFit: "contain",
        }}
      />

      <div className="space-y-4 mx-auto">
        <h3 className="text-center text-2xl text-slate-800 font-semibold">
          INTERNAL SERVER ERROR {error?.status}
        </h3>

        <p className="text-center text-lg text-slate-400 font-medium">
          {error?.data}
        </p>
      </div>
    </div>
  );
};

export default Error;
