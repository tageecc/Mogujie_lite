'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ["pages/home/home", "pages/category/category", "pages/cart/cart", "pages/me/me", "pages/login/login", "pages/register/register"],
      "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "蘑菇街lite",
        "navigationBarTextStyle": "black"
      },
      "tabBar": {
        "selectedColor": "#f96969",
        "borderStyle": "white",
        "list": [{
          "pagePath": "pages/home/home",
          "text": "首页",
          "iconPath": "images/home.png",
          "selectedIconPath": "images/home_cur.png"
        }, {
          "pagePath": "pages/category/category",
          "text": "分类",
          "iconPath": "images/category.png",
          "selectedIconPath": "images/category_cur.png"
        }, {
          "pagePath": "pages/cart/cart",
          "text": "购物车",
          "iconPath": "images/cart.png",
          "selectedIconPath": "images/cart_cur.png"
        }, {
          "pagePath": "pages/me/me",
          "text": "我的",
          "iconPath": "images/me.png",
          "selectedIconPath": "images/me_cur.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFzREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQW5EZEEsTUFtRGMsR0FuREw7QUFDUEMsYUFBTyxDQUNMLGlCQURLLEVBRUwseUJBRkssRUFHTCxpQkFISyxFQUlMLGFBSkssRUFLTCxtQkFMSyxFQU1MLHlCQU5LLENBREE7QUFTUCxnQkFBVTtBQUNSLCtCQUF1QixPQURmO0FBRVIsd0NBQWdDLE1BRnhCO0FBR1Isa0NBQTBCLFNBSGxCO0FBSVIsa0NBQTBCO0FBSmxCLE9BVEg7QUFlUCxnQkFBVTtBQUNSLHlCQUFpQixTQURUO0FBRVIsdUJBQWUsT0FGUDtBQUdSLGdCQUFRLENBQ047QUFDRSxzQkFBWSxpQkFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxpQkFIZDtBQUlFLDhCQUFvQjtBQUp0QixTQURNLEVBT047QUFDRSxzQkFBWSx5QkFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxxQkFIZDtBQUlFLDhCQUFvQjtBQUp0QixTQVBNLEVBYU47QUFDRSxzQkFBWSxpQkFEZDtBQUVFLGtCQUFRLEtBRlY7QUFHRSxzQkFBWSxpQkFIZDtBQUlFLDhCQUFvQjtBQUp0QixTQWJNLEVBbUJOO0FBQ0Usc0JBQVksYUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxlQUhkO0FBSUUsOEJBQW9CO0FBSnRCLFNBbkJNO0FBSEE7QUFmSCxLQW1ESztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGWTtBQUdiOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRUtDLEMsRUFBRztBQUNQLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFyRjBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgXCJwYWdlcy9ob21lL2hvbWVcIixcbiAgICAgICAgXCJwYWdlcy9jYXRlZ29yeS9jYXRlZ29yeVwiLFxuICAgICAgICBcInBhZ2VzL2NhcnQvY2FydFwiLFxuICAgICAgICBcInBhZ2VzL21lL21lXCIsXG4gICAgICAgIFwicGFnZXMvbG9naW4vbG9naW5cIixcbiAgICAgICAgXCJwYWdlcy9yZWdpc3Rlci9yZWdpc3RlclwiXG4gICAgICBdLFxuICAgICAgXCJ3aW5kb3dcIjoge1xuICAgICAgICBcImJhY2tncm91bmRUZXh0U3R5bGVcIjogXCJsaWdodFwiLFxuICAgICAgICBcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgIFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOiBcIuiYkeiPh+ihl2xpdGVcIixcbiAgICAgICAgXCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6IFwiYmxhY2tcIlxuICAgICAgfSxcbiAgICAgIFwidGFiQmFyXCI6IHtcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2Y5Njk2OVwiLFxuICAgICAgICBcImJvcmRlclN0eWxlXCI6IFwid2hpdGVcIixcbiAgICAgICAgXCJsaXN0XCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaG9tZS9ob21lXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaG9tZS5wbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9ob21lX2N1ci5wbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5XCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLliIbnsbtcIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvY2F0ZWdvcnkucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvY2F0ZWdvcnlfY3VyLnBuZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY2FydC9jYXJ0XCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLotK3nianovaZcIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvY2FydC5wbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9jYXJ0X2N1ci5wbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21lL21lXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLmiJHnmoRcIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvbWUucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvbWVfY3VyLnBuZ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcblxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICB1c2VySW5mbzogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgfVxuXG4gICAgb25MYXVuY2goKSB7XG4gICAgICB0aGlzLnRlc3RBc3luYygpXG4gICAgfVxuXG4gICAgc2xlZXAocykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICAgIH0sIHMgKiAxMDAwKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB9XG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==