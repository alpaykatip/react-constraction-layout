import { FaPhone } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import HeroCountUp from "./HeroCountUp";
import { SubForm } from "./SubForm";

function Hero() {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <div className='hero-contact'>
          <div>
            <p>
              <FaPhone className='hero-icons' /> 07810 139 726
            </p>
          </div>
          <div>
            <p>
              <FaListAlt className='hero-icons' /> alpay@alpaykatip.com
            </p>
          </div>
        </div>
        <div>
          <h2>NEW INDUSTRIAL WEB LAYOUTS</h2>
        </div>
        <p className='short-desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sit
          modi facere voluptas. Blanditiis natus laboriosam qui quasi cumque
          quidem iure magnam ullam enim
        </p>
        <SubForm />
        <HeroCountUp />
      </div>
    </div>
  );
}

export default Hero;
