import './Card.css'

const Card = ({ name, balance }: {name: string, balance:number}) => {
  return (
    <>
      <div className="card">
        <p className="name">{name}</p>
        <p className="balance">{balance}</p>
      </div>
    </>
  );
};

export default Card
