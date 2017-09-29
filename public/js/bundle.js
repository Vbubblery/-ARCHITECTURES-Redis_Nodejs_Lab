(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var homeActions = (function () {
  function homeActions() {
    _classCallCheck(this, homeActions);

    this.generateActions('updateCategory', 'updateName', 'updatePrice', 'updateNews', 'sendDone', 'sendFail');
  }

  _createClass(homeActions, [{
    key: 'sendToServer',
    value: function sendToServer(data) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/redis/publish',
        data: data
      }).done(function () {
        _this.actions.sendDone();
      }).fail(function (jqXhr) {
        _this.actions.sendFail(jqXhr);
      });
    }
  }]);

  return homeActions;
})();

exports['default'] = _alt2['default'].createActions(homeActions);
module.exports = exports['default'];

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsHomeActions = require('../actions/homeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var _storesHomeStores = require('../stores/homeStores');

var _storesHomeStores2 = _interopRequireDefault(_storesHomeStores);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = _storesHomeStores2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHomeStores2['default'].listen(this.onChange);
      var socket = io.connect();
      socket.on('news', function (data) {
        _actionsHomeActions2['default'].updateNews(data);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesHomeStores2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var data = {
        name: this.state.name,
        category: this.state.category,
        price: this.state.price
      };
      _actionsHomeActions2['default'].sendToServer(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'form',
          { className: 'form-horizontal' },
          _react2['default'].createElement(
            'div',
            { className: 'form-group' },
            _react2['default'].createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              'Book Name'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-10' },
              _react2['default'].createElement('input', { type: 'text', className: 'form-control', value: this.state.name, onChange: _actionsHomeActions2['default'].updateName, placeholder: 'Name' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-group' },
            _react2['default'].createElement(
              'label',
              null,
              'Category'
            ),
            _react2['default'].createElement(
              'select',
              { value: this.state.category, onChange: _actionsHomeActions2['default'].updateCategory, className: 'form-control' },
              _react2['default'].createElement(
                'option',
                null,
                'History'
              ),
              _react2['default'].createElement(
                'option',
                null,
                'Science'
              ),
              _react2['default'].createElement(
                'option',
                null,
                'Biology'
              ),
              _react2['default'].createElement(
                'option',
                null,
                'physics'
              ),
              _react2['default'].createElement(
                'option',
                null,
                'Language'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-group' },
            _react2['default'].createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              'Price'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-10' },
              _react2['default'].createElement('input', { type: 'number', value: this.state.price, onChange: _actionsHomeActions2['default'].updatePrice, className: 'form-control', placeholder: 'Price' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-group' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-offset-2 col-sm-10' },
              _react2['default'].createElement(
                'button',
                { type: 'button', onClick: this.handleSubmit.bind(this), className: 'btn btn-default' },
                'Submit'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'ul',
          { className: 'list-group' },
          _react2['default'].createElement(
            'li',
            { key: '1', className: 'list-group-item active' },
            'Client get message'
          ),
          _react2['default'].createElement(
            'li',
            { key: '2', className: 'list-group-item' },
            'Book Name: ',
            this.state.news.name
          ),
          _react2['default'].createElement(
            'li',
            { key: '3', className: 'list-group-item' },
            'Category: ',
            this.state.news.category
          ),
          _react2['default'].createElement(
            'li',
            { key: '4', className: 'list-group-item' },
            'Price: ',
            this.state.news.price
          )
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/homeActions":1,"../stores/homeStores":7,"react":"react"}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":6,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":3,"./components/Home":4,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/homeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var homeStores = (function () {
  function homeStores() {
    _classCallCheck(this, homeStores);

    this.bindActions(_actionsHomeActions2['default']);
    this.name = "";
    this.category = "History";
    this.price = 0;
    this.news = {};
  }

  _createClass(homeStores, [{
    key: 'onUpdateCategory',
    value: function onUpdateCategory(data) {
      this.category = event.target.value;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
    }
  }, {
    key: 'onUpdatePrice',
    value: function onUpdatePrice(event) {
      this.price = event.target.value;
    }
  }, {
    key: 'onUpdateNews',
    value: function onUpdateNews(data) {
      this.news = data;
      toastr.success("Subscribe Success");
    }
  }, {
    key: 'onSendDone',
    value: function onSendDone() {
      toastr.success("Publish Success");
      this.name = "";
      this.category = "History";
      this.price = 0;
    }
  }, {
    key: 'onSendFail',
    value: function onSendFail(err) {
      toastr.error("Publish failed");
    }
  }]);

  return homeStores;
})();

exports['default'] = _alt2['default'].createStore(homeStores);
module.exports = exports['default'];

},{"../actions/homeActions":1,"../alt":2}]},{},[5]);
