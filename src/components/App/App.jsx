import { Component } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const calledFeedback = e.target.dataset.action;
    this.setState(prevState => {
      return { [calledFeedback]: prevState[calledFeedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
