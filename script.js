class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
  }

  format() {
    var {minutes, seconds, miliseconds} = this.state.times;
    return `${this.pad0(minutes)}:${this.pad0(seconds)}:${this.pad0(Math.floor(miliseconds))}`;
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
  }
    return result;
  }

  start() {
    if (!this.state.running) {
      this.state.running = true;
      this.watch = setInterval(() => this.calculate(), 100);
    }
  }

  calculate() {
    let {miliseconds, seconds, minutes} = this.state.times;
      miliseconds += 100;
    if (miliseconds >= 1000) {
      seconds ++;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes ++;
      seconds = 0;
    }
    console.log(minutes, seconds, miliseconds)
    this.setState({
      times: {
        minutes,
        seconds,
        miliseconds
      }
    });
  }

  stop() {
    this.setState({running: false});
    clearInterval(this.watch);
  }

  render() {
    return (
      <div className="container">
        <button onClick={() => this.start}>START</button>
        <button onClick={() => this.stop}>STOP</button>
        <p>
          {this.format()}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));
