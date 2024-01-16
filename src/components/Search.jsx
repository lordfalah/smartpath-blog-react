import React from "react";
import Label from "./Input/Label";
import Input from "./Input/Input";

const Search = ({ icon, ...props }) => {
  return (
    <div className="flex justify-between items-center gap-x-6 w-full sm:w-auto">
      <Label htmlFor="search" className="w-full lg:w-[409px]">
        <Input
          {...props}
          className="px-6 py-2.5 rounded-full border-[3px] border-[#0056A3] focus:border-[#0057a3cf] focus:outline-none"
          name="search"
          placeholder="Cari materi . . ."
          type="text"
        />
      </Label>

      {icon}
    </div>
  );
};

export default Search;
