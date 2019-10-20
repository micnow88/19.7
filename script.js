class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      times: {
        minuts: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    /*this.format = this.format.bind(this);
    this.start = this.start.bind(this);
    this.step = this.step.bind(this);
    this.calculate = this.calculate.bind(this);
    this.stop = this.stop.bind(this);*/
  }

  format() {
    var {minutes, seconds, miliseconds} = this.state;
    return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`;
  }

  start() {
    if (!this.state.running) {
      this.state.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.state.running)
      return
        this.calculate();
  }

  calculate() {
    let {miliseconds, seconds, minutes} = this.state;
      miliseconds = miliseconds += 10,
      seconds = seconds,
      minutes = minutes;
    if (miliseconds >= 1000) {
      seconds += 1;
      miliseconds = 0;
    }
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    }
    this.setState({
      minutes,
      seconds,
      miliseconds
    });
  }

  stop() {
    this.setState({running: false});
    clearInterval(this.watch);
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <p>
          {this.format({
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            miliseconds: this.state.miliseconds
          })}
        </p>
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
      result = '0' + result;
  }
  return result;
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));
