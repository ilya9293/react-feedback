import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ options, total, positivePercentage }) {
  const { good, neutral, bad } = options;
  return (
    <ul className={s.list}>
      <li className={s.list__item}>
        Good: <span className={s.list__amount}>{good}</span>
      </li>
      <li className={s.list__item}>
        Neutral: <span className={s.list__amount}>{neutral}</span>
      </li>
      <li className={s.list__item}>
        Bad: <span className={s.list__amount}>{bad}</span>
      </li>
      <li className={s.list__item}>
        Total: <span className={s.list__amount}>{total}</span>
      </li>
      <li className={s.list__item}>
        Positive Feedback:{' '}
        <span className={s.list__amount}>
          {positivePercentage ? positivePercentage + '%' : 0}
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
