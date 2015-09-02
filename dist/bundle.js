/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _AppHomeRoute = __webpack_require__(1);

	var _AppHomeRoute2 = _interopRequireDefault(_AppHomeRoute);

	var rootNode = document.getElementById('app');
	console.log(rootNode);

	var AppReactComponent = (function (_React$Component) {
	  _inherits(AppReactComponent, _React$Component);

	  function AppReactComponent() {
	    _classCallCheck(this, AppReactComponent);

	    _get(Object.getPrototypeOf(AppReactComponent.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(AppReactComponent, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        this.props.hello.world
	      );
	    }
	  }]);

	  return AppReactComponent;
	})(React.Component);

	var App = Relay.createContainer(AppReactComponent, {
	  fragments: {
	    hello: function hello() {
	      return (function () {
	        var GraphQL = Relay.QL.__GraphQL;
	        return new GraphQL.QueryFragment('Client', 'Hello', [new GraphQL.Field('world', null, null, null, null, null, {
	          'parentType': 'Hello'
	        }), new GraphQL.Field('id', null, null, null, null, null, {
	          'parentType': 'Hello',
	          'generated': true,
	          'requisite': true
	        })]);
	      })();
	    }
	  }
	});

	React.render(React.createElement(Relay.RootContainer, {
	  Component: App,

	  route: new _AppHomeRoute2['default'](),

	  renderLoading: function () {
	    return React.createElement(
	      'div',
	      null,
	      'Loading...'
	    );
	  },

	  renderFetched: function (data) {
	    console.log(data);
	    return React.createElement(App, data);
	  }
	}), rootNode);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _default = (function (_Relay$Route) {
	  _inherits(_default, _Relay$Route);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, null, [{
	    key: 'queries',

	    //static path = 'http://localhost:3000/graphql';
	    value: {
	      hello: function hello(Component) {
	        return (function (sub_0) {
	          var GraphQL = Relay.QL.__GraphQL;
	          return new GraphQL.Query('hello', null, [new GraphQL.Field('id', null, null, null, null, null, {
	            'parentType': 'Hello',
	            'generated': true,
	            'requisite': true
	          })], [Relay.QL.__frag(sub_0)], null, 'AppHomeRoute');
	        })(Component.getFragment('hello'));
	      }
	    },
	    enumerable: true
	  }, {
	    key: 'routeName',
	    value: 'AppHomeRoute',
	    enumerable: true
	  }]);

	  return _default;
	})(Relay.Route);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }
/******/ ]);