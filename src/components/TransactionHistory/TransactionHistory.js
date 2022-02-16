import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  const transactions = items.map((e) => (
    <tr key={e.id}>
      <td>{e.type}</td>
      <td>{e.amount}</td>
      <td>{e.currency}</td>
    </tr>
  ));

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactions}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
