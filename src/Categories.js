import React from "react";
import "./index.css";

const Categories = ({ categories, categoriesItems }) => {
  // categories
  return (
    <>
      <div
        className="btn-container"
        style={{ display: "inline-grid", justifyItems: "start" }}
      >
        {categories.map((category, index) => {
          // categories
          return (
            <button
              type="button"
              className="filterbutton"
              key={index}
              onClick={() => categoriesItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
