import s from "./Transaction.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead className={s.boxName}>
        <tr className={s.name}>
          <th className={s.nameItem}>Amount</th>
          <th className={s.nameItem}>Currency</th>
          <th className={s.nameItem}>Type</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id} className={s.list}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
