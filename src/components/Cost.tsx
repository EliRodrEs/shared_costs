import './Cost.css'

const Cost = ({
  person,
  concept,
  date,
  amount,
  is_header,
}: {
  person: string;
  concept: string;
  date: string;
  amount: number;
  is_header:boolean
}) => {
  const header_class = is_header ? 'tbl_head' : 'tbl_body'
  return (
    <>
      <div className={`cost ${header_class}`}>
        <p className="person">{person}</p>
        <p className="concept">{concept}</p>
        <p className="date">{date}</p>
        <p className="amount">{amount}</p>
      </div>
    </>
  );
};

 export default Cost
