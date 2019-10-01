class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      minuts: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.format = this.format.bind(this);
    this.start = this.start.bind(this);
    this.step = this.step.bind(this);
    this.calculate = this.calculate.bind(this);
    this.stop = this.stop.bind(this);
  }

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
  }

  start() {
    if (!this.state.running) {
      this.state.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  calculate() {
    let miliseconds = this.state.miliseconds += 1,
      seconds = this.state.seconds,
      minutes = this. state.minutes;
    if (miliseconds >= 100) {
      seconds += 1;
      miliseconds = 0;
    }
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    }
    this.state({
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

ReactDOM.render(<Stopwatch/>, document.getElementsByClassName('stopwatch'));
