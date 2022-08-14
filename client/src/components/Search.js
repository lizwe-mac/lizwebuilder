import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center mr-auto">
      <input
        className="border-2 w-[500px] h-10 rounded-full pl-5 border-orange-500 focus:border-orange-800"
        type="text"
        name="search"
        placeholder="Search here..."
      />
    </div>
  );
};

export default Search;
