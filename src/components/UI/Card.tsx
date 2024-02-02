import './Card.css'

const Card = ({ name, balance }: {name: string, balance:number}) => {
  const card_class = balance <= 0 ? "positive_bg" : "negative_bg";

  return (
    <>
      <div className={`card ${card_class}`}>
        <p className="name">{name}</p>
        <p className="balance">{balance} €</p>
      </div>
    </>
  );
};

export default Card
