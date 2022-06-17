import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <ul className={s.listButtons}>
      <li className={s.listButtons__item}>
        <button
          onClick={onLeaveFeedback}
          className={s.button}
          type="button"
          data-action="good"
        >
          Good
        </button>
      </li>
      <li className={s.listButtons__item}>
        <button
          onClick={onLeaveFeedback}
          className={s.button}
          type="button"
          data-action="neutral"
        >
          Neutral
        </button>
      </li>
      <li className={s.listButtons__item}>
        {' '}
        <button
          onClick={onLeaveFeedback}
          className={s.button}
          type="button"
          data-action="bad"
        >
          Bad
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
