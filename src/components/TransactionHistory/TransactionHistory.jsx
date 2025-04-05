import s from "./TransactionHistory.module.css";
import clsx from "clsx";


function TransactionHistory({ items }) {
    return (
        <table className={clsx(s.tranTable)}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )
};


export default TransactionHistory;