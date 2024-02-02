import './CostListColumn.css'
import SectionTitle from './UI/SectionTitle';
import { Cost } from '../costs';
import { Friend } from '../friends';
import { useCostsAndFriends } from '../hooks/useCostsAndFriends';

const CostsListColumn = ({
  setSavedCosts
}: {
  setSavedCosts: (costs: Friend[] | Cost[]) => void;
}) => {
  const costs = useCostsAndFriends("savedCosts", [], setSavedCosts) as Cost[];

  return (
    <>
      <div className="costs_list_column">
        <SectionTitle sec_title="Listado de costes" />
        <div className="cost_list">
          <table className="cost_table">
            <thead>
              <tr>
                <th>Persona</th>
                <th colSpan={2}>Concepto</th>
                <th>Fecha</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((cost, index) => (
                <tr key={index}>
                  <td>{cost.person}</td>
                  <td colSpan={2}>{cost.concept}</td>
                  <td>
                    {cost.date
                      ? new Date(cost.date).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>{cost.amount} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CostsListColumn;
