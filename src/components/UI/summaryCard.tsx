

const SummaryCard = (
{debtorName,
creditorName,
debt}:
{debtorName: string
creditorName: string
debt: number})  => {


  return (
    <>
      <p>{debtorName}</p>
      <span>--</span>
      <p>{creditorName}</p>
      <span>=</span>
      <p>{debt}</p>
    </>
  );
}

export default SummaryCard
