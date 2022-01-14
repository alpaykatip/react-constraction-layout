import React, { useState } from "react";
import data from "../data/faq";
import SingleQuestion from "./Question";
import faqimage from "./shared/faqs.png";

function FaqAccordion() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <h3 className='accordion-title'>For your FAQ's</h3>
      <div className='accordion-container'>
        <img className='accordion-image' src={faqimage} alt='image' />
        <div>
          <div>
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqAccordion;
