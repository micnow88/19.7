"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

    _this.state = {
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
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "format",
    value: function format() {
      var _state = this.state,
          minutes = _state.minutes,
          seconds = _state.seconds,
          miliseconds = _state.miliseconds;

      return pad0(minutes) + ":" + pad0(seconds) + ":" + pad0(Math.floor(miliseconds));
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.state.running = true;
        this.watch = setInterval(function () {
          return _this2.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var _state2 = this.state,
          miliseconds = _state2.miliseconds,
          seconds = _state2.seconds,
          minutes = _state2.minutes;

      miliseconds = miliseconds += 10, seconds = seconds, minutes = minutes;
      if (miliseconds >= 1000) {
        seconds += 1;
        miliseconds = 0;
      }
      if (seconds == 60) {
        minutes += 1;
        seconds = 0;
      }
      this.setState({
        minutes: minutes,
        seconds: seconds,
        miliseconds: miliseconds
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.setState({ running: false });
      clearInterval(this.watch);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "button",
          { onClick: this.start },
          "START"
        ),
        React.createElement(
          "button",
          { onClick: this.stop },
          "STOP"
        ),
        React.createElement(
          "p",
          null,
          this.format({
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            miliseconds: this.state.miliseconds
          })
        )
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

function pad0(value) {
  var result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById("root"));
