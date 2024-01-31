import Card from "./UI/Card"
import './BalanceColumn.css'

const BalanceColumn = () => {
  return (
    <>
      <div className="balance_column_holder">
        <Card name="Shadowheart" balance={123} />
        <Card name="Lae'zel" balance={123} />
        <Card name="Karlach" balance={123} />
      </div>
    </>
  );
 }

export default BalanceColumn
