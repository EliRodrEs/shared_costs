import './CostListColumn.css'
import SectionTitle from './UI/SectionTitle';
import { Cost } from '../costs';
import { useMemo } from 'react';

const CostsListColumn = ({
  costs
}: {
  costs: Cost[];
}) => {
  const orderedCosts = useMemo(() => {
      return costs
        .slice()
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }, [costs]);

  return (
    <>
      <div className="costs_list_column">
        <SectionTitle sec_title="Listado de costes" />
        <div className="cost_list">
          <table
            className="cost_table"
            id="cost_table"
            data-testid="costs-table"
          >
            <thead>
              <tr>
                <th>Persona</th>
                <th colSpan={2}>Concepto</th>
                <th>Fecha</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderedCosts.map((cost, index) => (
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
