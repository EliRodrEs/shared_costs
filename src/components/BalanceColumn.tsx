import Card from "./UI/Card"
import './BalanceColumn.css'
import SectionTitle from "./UI/SectionTitle"

const BalanceColumn = () => {
  return (
    <>
      <div className="balance_column">
        <SectionTitle sec_title="Balances" />
        <div className="balance_column_holder">
          <Card name="Shadowheart" balance={12.27} />
          <Card name="Lae'zel" balance={-22.7} />
          <Card name="Karlach" balance={11.0} />
        </div>
      </div>
    </>
  );
 }

export default BalanceColumn
