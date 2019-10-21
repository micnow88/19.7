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
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "format",
    value: function format() {
      var _state$times = this.state.times,
          minutes = _state$times.minutes,
          seconds = _state$times.seconds,
          miliseconds = _state$times.miliseconds;

      return this.pad0(minutes) + ":" + this.pad0(seconds) + ":" + this.pad0(Math.floor(miliseconds));
    }
  }, {
    key: "pad0",
    value: function pad0(value) {
      var result = value.toString();
      if (result.length < 2) {
        result = '0' + result;
      }
      return result;
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.state.running = true;
        this.watch = setInterval(function () {
          return _this2.calculate();
        }, 100);
      }
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var _state$times2 = this.state.times,
          miliseconds = _state$times2.miliseconds,
          seconds = _state$times2.seconds,
          minutes = _state$times2.minutes;

      miliseconds += 100;
      if (miliseconds >= 1000) {
        seconds++;
        miliseconds = 0;
      }
      if (seconds >= 60) {
        minutes++;
        seconds = 0;
      }
      console.log(minutes, seconds, miliseconds);
      this.setState({
        times: {
          minutes: minutes,
          seconds: seconds,
          miliseconds: miliseconds
        }
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
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.start;
            } },
          "START"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.stop;
            } },
          "STOP"
        ),
        React.createElement(
          "p",
          null,
          this.format()
        )
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById("root"));
