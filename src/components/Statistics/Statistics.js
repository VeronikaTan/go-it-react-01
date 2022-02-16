import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  const statisticsListItems = stats.map((e) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (
      <li
        key={e.id}
        className={s.item}
        style={{
          backgroundColor: randomColor,
        }}
      >
        <span className={s.label}>{e.label}</span>
        <span className={s.percentage}>{`${e.percentage}%`}</span>
      </li>
    );
  });

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>{statisticsListItems}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
