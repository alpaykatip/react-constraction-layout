import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <header className='single-question'>
        <h3>{title}</h3>
        <button
          className='btn-accordion'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <FiMinusCircle /> : <FiPlusCircle />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Question;
