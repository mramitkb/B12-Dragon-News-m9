import React, { use } from "react";
import { NavLink } from "react-router";

const fetchCategories = fetch("/categories.json").then((res) => res.json());

const LeftSide = () => {
  const categories = use(fetchCategories);
  return (
    <div>
      <h1 className="font-bold ml-5 text-xl">All Category</h1>

      {/* Categories */}
      <div className="space-y-3 grid grid-cols-1 text-justify mt-6">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={({isActive}) => `font-medium text-accent p-2 rounded-sm hover:bg-base-200 pl-20 ${isActive ? "bg-base-300 text-black" : ""}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
