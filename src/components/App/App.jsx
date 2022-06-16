import { Component } from 'react';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const calledFeedback = e.target.dataset.action;
    this.setState(prevState => {
      return { [calledFeedback]: prevState[calledFeedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div className={s.App}>
        <h1 className={s.title}>Please leave feedback</h1>

        <ul className={s.listButtons}>
          <li className={s.listButtons__item}>
            <button
              onClick={this.handleFeedback}
              className={s.button}
              type="button"
              data-action="good"
            >
              Good
            </button>
          </li>
          <li className={s.listButtons__item}>
            <button
              onClick={this.handleFeedback}
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
              onClick={this.handleFeedback}
              className={s.button}
              type="button"
              data-action="bad"
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className={s.statistics}>Statistics</h2>
        <ul className={s.list}>
          <li className={s.list__item}>
            Good: <span className={s.list__amount}>{this.state.good}</span>
          </li>
          <li className={s.list__item}>
            Neutral:{' '}
            <span className={s.list__amount}>{this.state.neutral}</span>
          </li>
          <li className={s.list__item}>
            Bad: <span className={s.list__amount}>{this.state.bad}</span>
          </li>
          <li className={s.list__item}>
            Total:{' '}
            <span className={s.list__amount}>{this.countTotalFeedback()}</span>
          </li>
          <li className={s.list__item}>
            Positive Feedback:{' '}
            <span className={s.list__amount}>
              {this.countPositiveFeedbackPercentage()}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
