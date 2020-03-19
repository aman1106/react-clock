import React, {Component} from 'react';
import Mark from './Mark';
import Hand from './Hand';
import '../../../styles/clock.less';

let
  hourHandLength = 50,
  hourHandOppositeLength,
  hourHandWidth = 5,
  hourMarksLength = 10,
  hourMarksWidth = 3,
  minuteHandLength = 70,
  minuteHandOppositeLength,
  minuteHandWidth = 3,
  minuteMarksLength = 6,
  minuteMarksWidth = 1,
  secondHandLength = 85,
  secondHandOppositeLength,
  secondHandWidth = 1;

class AnalogClock extends Component {


  renderMinuteMarks = () => {
    const minuteMarks = [];
    for (let i = 1; i <= 60; i++) {
      const isHourMark = !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(
          <Mark
            key={`minute_${i}`}
            angle={i * 6}
            length={minuteMarksLength}
            name="minute"
            width={minuteMarksWidth}
          />,
        );
      }
    }
    return minuteMarks;
  }

 renderHourMarks = () => {
    const hourMarks = [];
    for (let i = 1; i <= 12; i++) {
      hourMarks.push(
        <Mark
          key={`hour_${i}`}
          angle={i * 30}
          length={hourMarksLength}
          name="hour"
          width={hourMarksWidth}
        />,
      );
    }
    return hourMarks;
  }

  renderClock = () => {
    return (
      <div className="react-clock__face">
        <h6 className="text-top">Made By:</h6>
        <h6 className="text-bottom" >AMAN</h6>
        {this.renderMinuteMarks()}
        {this.renderHourMarks()}
      </div>
    )
  }

  renderHourHand = () => {
    const angle = this.props.date ? (
      (this.props.date.getHours() * 30)
      + (this.props.date.getMinutes() / 2)
      + (this.props.date.getSeconds() / 600)
    ) : 0;

    return (
      <Hand
        angle={angle}
        length={hourHandLength}
        name="hour"
        oppositeLength={hourHandOppositeLength}
        width={hourHandWidth}
      />
    );
  }

  renderMinuteHand = () => {
    const angle = this.props.date ? (
      (this.props.date.getHours() * 360)
      + (this.props.date.getMinutes() * 6)
      + (this.props.date.getSeconds() / 10)
    ) : 0;

    return (
      <Hand
        angle={angle}
        length={minuteHandLength}
        name="minute"
        oppositeLength={minuteHandOppositeLength}
        width={minuteHandWidth}
      />
    );
  }

  renderSecondHand = () => {
    const angle = this.props.date ? (
      (this.props.date.getMinutes() * 360)
      + (this.props.date.getSeconds() * 6)
    ) : 0;

    return (
      <Hand
        angle={angle}
        length={secondHandLength}
        name="second"
        oppositeLength={secondHandOppositeLength}
        width={secondHandWidth}
      />
    );
  }

  render() {
    return (
      <div className="clock__analog">
        {this.renderClock()}
        {this.renderHourHand()}
        {this.renderMinuteHand()}
        {this.renderSecondHand()}
      </div>
    )
  }
}

export default AnalogClock;
