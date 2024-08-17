import React from "react";
import "../components/filter_area.css";

const FilterArea = () => {
  return (
    <div>
      <section className="filter_area">
        <h1 id="heading">
          Restaurants with online food delivery in Tricity
        </h1>
        <span className="filters">
          <div className="filter">
            <p>
              Filter<i className="fa-solid fa-arrow-right-arrow-left"></i>
            </p>
          </div>
          <div className="filter">
            <p>
              Sort<i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
          <div className="filter">
            <p>Ratings 4.0+</p>
          </div>
          <div className="filter">
            <p>Pure Veg</p>
          </div>
          <div className="filter">
            <p>Offers</p>
          </div>
          <div className="filter">
            <p>Rs. 300-Rs. 600</p>
          </div>
          <div className="filter">
            <p>Less than Rs. 300</p>
          </div>
        </span>
      </section>
    </div>
  );
};

export default FilterArea;
