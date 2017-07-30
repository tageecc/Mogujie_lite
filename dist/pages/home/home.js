'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      imgUrls: [{
        link: '/pages/index/index',
        url: 'http://s2.mogucdn.com/mlcdn/c45406/170721_6gkdkh7gc0976i4b362a39i4c43dk_750x390.jpg_800x9999.v1c7E.70.webp'
      }, {
        link: '/pages/logs/logs',
        url: 'http://s2.mogucdn.com/mlcdn/c45406/170717_0280220d6k623b33ejd4a78889ga7_750x390.jpg_800x9999.v1c7E.70.webp'
      }, {
        link: '/pages/test/test',
        url: 'http://s11.mogucdn.com/mlcdn/c45406/170721_2g85f9dl8c37i3g45007i1lbga0lc_750x390.jpg_800x9999.v1c7E.70.webp'
      }],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      userInfo: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiaW1nVXJscyIsImxpbmsiLCJ1cmwiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxlQUFTLENBQ1A7QUFDRUMsY0FBTSxvQkFEUjtBQUVFQyxhQUFLO0FBRlAsT0FETyxFQUlKO0FBQ0RELGNBQU0sa0JBREw7QUFFREMsYUFBSztBQUZKLE9BSkksRUFPSjtBQUNERCxjQUFNLGtCQURMO0FBRURDLGFBQUs7QUFGSixPQVBJLENBREo7QUFhTEMscUJBQWUsSUFiVjtBQWNMQyxnQkFBVSxJQWRMO0FBZUxDLGdCQUFVLElBZkw7QUFnQkxDLGdCQUFVLElBaEJMO0FBaUJMQyxnQkFBVTtBQWpCTCxLOzs7Ozs2QkFvQkUsQ0FDUjs7OztFQXRCZ0MsZUFBS0MsSTs7a0JBQW5CVixLIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgaW1nVXJsczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJy9wYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL3MyLm1vZ3VjZG4uY29tL21sY2RuL2M0NTQwNi8xNzA3MjFfNmdrZGtoN2djMDk3Nmk0YjM2MmEzOWk0YzQzZGtfNzUweDM5MC5qcGdfODAweDk5OTkudjFjN0UuNzAud2VicCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxpbms6ICcvcGFnZXMvbG9ncy9sb2dzJyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vczIubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDcxN18wMjgwMjIwZDZrNjIzYjMzZWpkNGE3ODg4OWdhN183NTB4MzkwLmpwZ184MDB4OTk5OS52MWM3RS43MC53ZWJwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGluazogJy9wYWdlcy90ZXN0L3Rlc3QnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9zMTEubW9ndWNkbi5jb20vbWxjZG4vYzQ1NDA2LzE3MDcyMV8yZzg1ZjlkbDhjMzdpM2c0NTAwN2kxbGJnYTBsY183NTB4MzkwLmpwZ184MDB4OTk5OS52MWM3RS43MC53ZWJwJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIHVzZXJJbmZvOiB7fVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9O1xuXG4gIH1cbiJdfQ==