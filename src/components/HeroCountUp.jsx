import CountUp from "react-countup";

function HeroCountUp() {
  return (
    <div className='hero-counter'>
      <div>
        <CountUp end={650} suffix='+' duration={1.5} />
        <h3>Project</h3>
      </div>
      <div>
        <CountUp end={500} duration={1.5} />
        <h3>Client</h3>
      </div>
      <div>
        <CountUp end={100} suffix='%' duration={1.5} />
        <h3>Success</h3>
      </div>
    </div>
  );
}

export default HeroCountUp;
