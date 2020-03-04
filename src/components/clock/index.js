import React, {Component} from 'react';
import DigitalClock from './DigitalClock/index';
import AnalogClock from './AnalogClock/index';
import Auxiliary from '../../util/Auxiliary';

class Clock extends Component {
  state = {
    time: '',
    clockType: 'analog',
    clockFormat: '12hr',
    loading: true,
  };

  getTime = () => {
    setInterval(() => {
      let date = new Date();
      let ampm = date.getHours() >= 12 ? 'pm' : 'am';
      let time = '';
      let hours = (("0"+(date.getHours()%12)).slice(-2));
      hours = hours !== "00" ? hours : 12;
      time = this.state.clockType === 'digital' && this.state.clockFormat === '24hr' ?
      ("0"+date.getHours()).slice(-2) + " : " + ("0"+date.getMinutes()).slice(-2) + " : " + ("0"+date.getSeconds()).slice(-2) :
      hours + " : " + ("0"+date.getMinutes()).slice(-2) + " : " + ("0"+date.getSeconds()).slice(-2)+" "+ampm;
      this.setState({...this.state, time: time, date: date, loading: false});
    }, 1000)
  }

  componentDidMount () {
    this.getTime();
  }

  onClockTypeChange = e => {
    this.setState({...this.state, clockType: e.target.value});
  }

  onClockFormatChange = e => {
    this.setState({...this.state, clockFormat: e.target.value});
  }

  render() {
    return (
      <Auxiliary>
        <div style={{top: 50, position: 'absolute'}}>
          <select className="select-css" value={this.state.clockType} onChange={this.onClockTypeChange}>
            <option value="analog">Analog Clock</option>
            <option value="digital">Digital Clock</option>
          </select>
          {this.state.clockType === 'digital' ?
            <select className="select-css" value={this.state.clockFormat} onChange={this.onClockFormatChange} >
              <option value="24hr">24 Hour Format</option>
              <option value="12hr">12 Hour Format</option>
            </select> : null
          }
        </div>
        {this.state.loading ? "Loading..." :
          this.state.clockType === 'digital' ?
          <DigitalClock time={this.state.time}/> :
          <AnalogClock date={this.state.date}/>
        }
      </Auxiliary>
    );
  }
}

export default Clock;
