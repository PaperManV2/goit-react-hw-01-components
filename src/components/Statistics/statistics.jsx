import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>
        {' '}
        {title === undefined ? `Upload stats` : `${title}`}
      </h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className={css.label}>{stats[0].label}</span>
          <span className={css.percentage}>{stats[0].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[1].label}</span>
          <span className={css.percentage}>{stats[1].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[2].label}</span>
          <span className={css.percentage}>{stats[2].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[3].label}</span>
          <span className={css.percentage}>{stats[3].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[4].label}</span>
          <span className={css.percentage}>{stats[4].percentage}</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
