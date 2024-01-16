import { Link } from "react-router-dom";

const Button = ({ name, toPage, width, className = "" }) => {
  return (
    <button
      className={`w-${width} elementor-size-sm rounded-md bg-yellow-400 text-white ${className} w-full elementor-size-sm rounded-md px-8 py-2 font-semibold 2xl:text-2xl`}
    >
      <Link href={`/${toPage}`}>{name}</Link>
    </button>
  );
};

export default Button;
