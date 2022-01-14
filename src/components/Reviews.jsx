import React, { useState } from "react";
import data from "../data/reviews";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className='section-revievs'>
      <div className='reviews-title'>
        <h2>Our Happy Customers</h2>
      </div>
      <div className='single-review'>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>"{text}"</p>
      </div>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Reviews;
