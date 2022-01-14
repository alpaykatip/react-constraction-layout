import cards from "../data/chooseUs";
import Card from "./shared/Card";

function ChooseUsCards() {
  return (
    <div>
      <h2 className='cards-header'>Why Choose Our Company ?</h2>
      <div className='choose-us'>
        {cards.map((card) => {
          const { id, header, desc, img } = card;
          return (
            <Card className='card' key={id}>
              <h4>{header}</h4>
              <p>{desc}</p>
              <i>{img}</i>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseUsCards;
