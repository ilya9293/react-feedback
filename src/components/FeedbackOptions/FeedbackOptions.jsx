import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.listButtons}>
      {Object.keys(options).map(btn => {
        return (
          <li className={s.listButtons__item} key={btn}>
            <button
              onClick={() => onLeaveFeedback(btn)}
              className={s.button}
              type="button"
              //   data-action={btn}
            >
              {btn}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
