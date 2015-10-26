(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _list = require('./list');

window.list = new _list.List();

},{"./list":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _node = require('./node');

var List = (function () {
	function List() {
		_classCallCheck(this, List);

		this.head = null;
		this.tail = null;
		this._length = 0;
	}

	_createClass(List, [{
		key: 'push',
		value: function push(value) {
			var node = new _node.Node(value, null);
			if (!this.head) {
				this.head = node;
				this.tail = this.head;
			} else {
				this.tail.next = node;
				this.tail = node;
			}
			this._length++;
		}
	}, {
		key: 'pop',
		value: function pop(value, previous) {
			var node = this.head;
			var previous;
			while (node) {
				if (node.value == value) {
					previous ? previous.next = node.next : this.head = node.next;
					return node;
				}
				previous = node;
				node = node.next;
			}
		}
	}, {
		key: 'shift',
		value: function shift() {
			var temp = this.head;
			this.head = this.head.next ? this.head.next : null;
			this.tail = this.head;
			this._length--;
			return temp;
		}
	}, {
		key: 'print',
		value: function print() {
			var node = this.head;
			var pretty = '';
			if (!node) {
				return console.log("empty list");
			}
			while (node) {
				pretty += '|' + node.value + '| => ';
				node = node.next;
			}
			return pretty;
		}
	}, {
		key: 'removeDuplicates',
		value: function removeDuplicates() {
			var node = this.head;
			var previous = null;
			var differences = {};
			while (node) {
				if (differences[node.value]) {
					previous ? previous.next = node.next : this.head = node.next;
					this._length--;
				} else {
					differences[node.value] = true;
					previous = node;
				}
				node = node.next;
			}
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.head = null;
			this.tail = this.head;
			this._length = 0;
		}
	}, {
		key: 'length',
		get: function get() {
			return this._length;
		}
	}]);

	return List;
})();

exports.List = List;

},{"./node":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value, next) {
	_classCallCheck(this, Node);

	this.value = value;
	this.next = next;
};

exports.Node = Node;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9OaWtvcy9EZXNrdG9wL25vZGUvdHJlZWpzL3NyYy9pbmRleC5qcyIsIkM6L1VzZXJzL05pa29zL0Rlc2t0b3Avbm9kZS90cmVlanMvc3JjL2xpc3QuanMiLCJDOi9Vc2Vycy9OaWtvcy9EZXNrdG9wL25vZGUvdHJlZWpzL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7b0JDQW1CLFFBQVE7O0FBRTNCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZ0JBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkNGTixRQUFROztJQUVkLElBQUk7QUFDTCxVQURDLElBQUksR0FDSDt3QkFERCxJQUFJOztBQUVmLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCOztjQUxXLElBQUk7O1NBT1osY0FBQyxLQUFLLEVBQUM7QUFDVixPQUFJLElBQUksR0FBRyxlQUFTLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxPQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztBQUNiLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN0QixNQUNHO0FBQ0gsUUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCO0FBQ0QsT0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ2Y7OztTQUVFLGFBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQztBQUNsQixPQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLE9BQUksUUFBUSxDQUFDO0FBQ2IsVUFBTSxJQUFJLEVBQUM7QUFDVixRQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFDO0FBQ3RCLGFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzdELFlBQU8sSUFBSSxDQUFDO0tBQ1o7QUFDRCxZQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFFBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pCO0dBQ0Q7OztTQUNJLGlCQUFFO0FBQ04sT0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixPQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqRCxPQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDdEIsT0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2YsVUFBTyxJQUFJLENBQUM7R0FDWjs7O1NBRUksaUJBQUU7QUFDTixPQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLE9BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixPQUFHLENBQUMsSUFBSSxFQUFDO0FBQ1IsV0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDO0FBQ0QsVUFBTSxJQUFJLEVBQUM7QUFDVixVQUFNLElBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsT0FBTyxDQUFBO0FBQzlCLFFBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pCO0FBQ0QsVUFBTyxNQUFNLENBQUM7R0FDZDs7O1NBRWUsNEJBQUU7QUFDakIsT0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixPQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEIsT0FBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLFVBQU0sSUFBSSxFQUFDO0FBQ1YsUUFBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO0FBQzFCLGFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzdELFNBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNmLE1BQ0c7QUFDSCxnQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDL0IsYUFBUSxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUNELFFBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pCO0dBQ0Q7OztTQUVJLGlCQUFFO0FBQ04sT0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsT0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3RCLE9BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0dBQ2pCOzs7T0FFUyxlQUFFO0FBQ1gsVUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0dBQ3BCOzs7UUE5RVcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7SUNGSixJQUFJLEdBQ0wsU0FEQyxJQUFJLENBQ0osS0FBSyxFQUFDLElBQUksRUFBQzt1QkFEWCxJQUFJOztBQUVmLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2pCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7TGlzdH0gZnJvbSAnLi9saXN0J1xyXG5cclxud2luZG93Lmxpc3QgPSBuZXcgTGlzdCgpO1xyXG5cclxuXHJcbiIsImltcG9ydCB7Tm9kZX0gZnJvbSAnLi9ub2RlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3R7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHRoaXMuaGVhZCA9IG51bGw7XHJcblx0XHR0aGlzLnRhaWwgPSBudWxsO1xyXG5cdFx0dGhpcy5fbGVuZ3RoID0gMDtcclxuXHR9XHJcblxyXG5cdHB1c2godmFsdWUpe1xyXG5cdFx0dmFyIG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSxudWxsKTtcclxuXHRcdGlmKCF0aGlzLmhlYWQpe1xyXG5cdFx0XHR0aGlzLmhlYWQgPSBub2RlO1xyXG5cdFx0XHR0aGlzLnRhaWwgPSB0aGlzLmhlYWQ7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0aGlzLnRhaWwubmV4dCA9IG5vZGU7XHJcblx0XHRcdHRoaXMudGFpbCA9IG5vZGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9sZW5ndGgrKztcclxuXHR9XHJcblxyXG5cdHBvcCh2YWx1ZSxwcmV2aW91cyl7XHJcblx0XHR2YXIgbm9kZSA9IHRoaXMuaGVhZDtcclxuXHRcdHZhciBwcmV2aW91cztcclxuXHRcdHdoaWxlKG5vZGUpe1xyXG5cdFx0XHRpZihub2RlLnZhbHVlID09IHZhbHVlKXtcclxuXHRcdFx0XHRwcmV2aW91cyA/IHByZXZpb3VzLm5leHQgPSBub2RlLm5leHQgOiB0aGlzLmhlYWQgPSBub2RlLm5leHQ7XHJcblx0XHRcdFx0cmV0dXJuIG5vZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJldmlvdXMgPSBub2RlO1xyXG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzaGlmdCgpe1xyXG5cdFx0dmFyIHRlbXAgPSB0aGlzLmhlYWQ7XHJcblx0XHR0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dD90aGlzLmhlYWQubmV4dCA6IG51bGw7XHJcblx0XHR0aGlzLnRhaWwgPSB0aGlzLmhlYWQ7XHJcblx0XHR0aGlzLl9sZW5ndGgtLTtcclxuXHRcdHJldHVybiB0ZW1wO1xyXG5cdH1cclxuXHJcblx0cHJpbnQoKXtcclxuXHRcdHZhciBub2RlID0gdGhpcy5oZWFkO1xyXG5cdFx0dmFyIHByZXR0eSA9ICcnO1xyXG5cdFx0aWYoIW5vZGUpe1xyXG5cdFx0XHRyZXR1cm4gY29uc29sZS5sb2coXCJlbXB0eSBsaXN0XCIpO1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdHByZXR0eSs9J3wnK25vZGUudmFsdWUrJ3wgPT4gJ1xyXG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByZXR0eTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUR1cGxpY2F0ZXMoKXtcclxuXHRcdHZhciBub2RlID0gdGhpcy5oZWFkO1xyXG5cdFx0dmFyIHByZXZpb3VzID0gbnVsbDtcclxuXHRcdHZhciBkaWZmZXJlbmNlcyA9IHt9O1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGlmKGRpZmZlcmVuY2VzW25vZGUudmFsdWVdKXtcclxuXHRcdFx0XHRwcmV2aW91cyA/IHByZXZpb3VzLm5leHQgPSBub2RlLm5leHQgOiB0aGlzLmhlYWQgPSBub2RlLm5leHQ7XHJcblx0XHRcdFx0dGhpcy5fbGVuZ3RoLS07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRkaWZmZXJlbmNlc1tub2RlLnZhbHVlXSA9IHRydWU7XHJcblx0XHRcdFx0cHJldmlvdXMgPSBub2RlO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5vZGUgPSBub2RlLm5leHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbGVhcigpe1xyXG5cdFx0dGhpcy5oZWFkID0gbnVsbDtcclxuXHRcdHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcclxuXHRcdHRoaXMuX2xlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRnZXQgbGVuZ3RoKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fbGVuZ3RoO1xyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBOb2Rle1xyXG5cdGNvbnN0cnVjdG9yKHZhbHVlLG5leHQpe1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5uZXh0ID0gbmV4dDtcclxuXHR9XHJcbn0iXX0=
