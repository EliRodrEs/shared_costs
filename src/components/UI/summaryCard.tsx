import './summaryCard.css'

const SummaryCard = (
{debtorName,
creditorName,
debt}:
{debtorName: string
creditorName: string
debt: number})  => {


  return (
    <>
      <div className="summaryCard">
        <div className="textBox">
          <div className="textContent">
            <p className="h1">{debtorName}</p>
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <p className="h1">{creditorName}</p>
            <p>{debt}<span>€</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryCard
