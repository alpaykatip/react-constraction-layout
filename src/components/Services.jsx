import React, { useState } from "react";
import data from "../data/servicesData";
import Button from "./shared/Button";

function Services() {
  const [services, setServices] = useState(data);
  const [value, setValue] = useState(0);

  const { title, desc, img, button } = services[value];
  return (
    <section className='section-services'>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {data.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)}>
                {item.category}
              </button>
            );
          })}
        </div>

        {/* job info */}
        <article className='service-info'>
          <img src={img} alt='image' className='service-image' />
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Button>{button}</Button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
