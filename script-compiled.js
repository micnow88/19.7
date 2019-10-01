'use strict';

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
      minuts: 0,
      seconds: 0,
      miliseconds: 0
    };
    _this.format = _this.format.bind(_this);
    _this.start = _this.start.bind(_this);
    _this.step = _this.step.bind(_this);
    _this.calculate = _this.calculate.bind(_this);
    _this.stop = _this.stop.bind(_this);
    return _this;
  }

  _createClass(Stopwatch, [{
    key: 'format',
    value: function format(times) {
      return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
    }
  }, {
    key: 'start',
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
    key: 'step',
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      var miliseconds = this.state.miliseconds += 1,
          seconds = this.state.seconds,
          minutes = this.state.minutes;
      if (miliseconds >= 100) {
        seconds += 1;
        miliseconds = 0;
      }
      if (seconds == 60) {
        minutes += 1;
        seconds = 0;
      }
      this.state({
        minutes: minutes,
        seconds: seconds,
        miliseconds: miliseconds
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.setState({ running: false });
      clearInterval(this.watch);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'button',
          { onClick: this.start },
          'START'
        ),
        React.createElement(
          'button',
          { onClick: this.stop },
          'STOP'
        ),
        React.createElement(
          'p',
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

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementsByClassName('stopwatch'));
