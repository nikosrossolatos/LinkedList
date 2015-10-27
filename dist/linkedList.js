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
		key: 'removeNode',
		value: function removeNode(value) {
			var node = this.head;
			var previous = null;
			while (node) {
				if (node.value == value) {
					!node.next ? this.tail = previous : '';
					// previous ? previous.next = node.next : this.head = node.next;
					Object.assign(node, node.next);
					this._length--;
					return node;
				}
				previous = node;
				node = node.next;
			}
		}
	}, {
		key: 'pop',
		value: function pop() {
			var node = this.head;
			var previous = null;
			while (node.next) {
				previous = node;
				node = node.next;
			}
			this.tail = previous;
			this._length--;
			return previous.next;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9OaWtvcy9EZXNrdG9wL25vZGUvbGlzdGpzL3NyYy9pbmRleC5qcyIsIkM6L1VzZXJzL05pa29zL0Rlc2t0b3Avbm9kZS9saXN0anMvc3JjL2xpc3QuanMiLCJDOi9Vc2Vycy9OaWtvcy9EZXNrdG9wL25vZGUvbGlzdGpzL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7b0JDQW1CLFFBQVE7O0FBRTNCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZ0JBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkNGTixRQUFROztJQUVkLElBQUk7QUFDTCxVQURDLElBQUksR0FDSDt3QkFERCxJQUFJOztBQUVmLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCOztjQUxXLElBQUk7O1NBT1osY0FBQyxLQUFLLEVBQUM7QUFDVixPQUFJLElBQUksR0FBRyxlQUFTLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxPQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztBQUNiLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN0QixNQUNHO0FBQ0gsUUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCO0FBQ0QsT0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ2Y7OztTQUNTLG9CQUFDLEtBQUssRUFBQztBQUNoQixPQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLE9B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QU8sQ0FBQztHQUNwQjs7O1FBM0ZXLElBQUk7Ozs7Ozs7Ozs7Ozs7O0lDRkosSUFBSSxHQUNMLFNBREMsSUFBSSxDQUNKLEtBQUssRUFBQyxJQUFJLEVBQUM7dUJBRFgsSUFBSTs7QUFFZixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge0xpc3R9IGZyb20gJy4vbGlzdCdcclxuXHJcbndpbmRvdy5saXN0ID0gbmV3IExpc3QoKTtcclxuXHJcblxyXG4iLCJpbXBvcnQge05vZGV9IGZyb20gJy4vbm9kZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0e1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHR0aGlzLmhlYWQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWlsID0gbnVsbDtcclxuXHRcdHRoaXMuX2xlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRwdXNoKHZhbHVlKXtcclxuXHRcdHZhciBub2RlID0gbmV3IE5vZGUodmFsdWUsbnVsbCk7XHJcblx0XHRpZighdGhpcy5oZWFkKXtcclxuXHRcdFx0dGhpcy5oZWFkID0gbm9kZTtcclxuXHRcdFx0dGhpcy50YWlsID0gdGhpcy5oZWFkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy50YWlsLm5leHQgPSBub2RlO1xyXG5cdFx0XHR0aGlzLnRhaWwgPSBub2RlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fbGVuZ3RoKys7XHJcblx0fVxyXG5cdHJlbW92ZU5vZGUodmFsdWUpe1xyXG5cdFx0dmFyIG5vZGUgPSB0aGlzLmhlYWQ7XHJcblx0XHR2YXIgcHJldmlvdXMgPSBudWxsO1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGlmKG5vZGUudmFsdWUgPT0gdmFsdWUpe1xyXG5cdFx0XHRcdCFub2RlLm5leHQ/IHRoaXMudGFpbCA9IHByZXZpb3VzIDogJyc7XHJcblx0XHRcdFx0Ly8gcHJldmlvdXMgPyBwcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0IDogdGhpcy5oZWFkID0gbm9kZS5uZXh0O1xyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24obm9kZSxub2RlLm5leHQpO1xyXG5cdFx0XHRcdHRoaXMuX2xlbmd0aC0tO1xyXG5cdFx0XHRcdHJldHVybiBub2RlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHByZXZpb3VzID0gbm9kZTtcclxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dDtcclxuXHRcdH1cclxuXHR9XHJcblx0cG9wKCl7XHJcblx0XHR2YXIgbm9kZSA9IHRoaXMuaGVhZDtcclxuXHRcdHZhciBwcmV2aW91cyA9IG51bGw7XHJcblx0XHR3aGlsZShub2RlLm5leHQpe1xyXG5cdFx0XHRwcmV2aW91cyA9IG5vZGU7XHJcblx0XHRcdG5vZGUgPSBub2RlLm5leHQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRhaWwgPSBwcmV2aW91cztcclxuXHRcdHRoaXMuX2xlbmd0aC0tO1xyXG5cdFx0cmV0dXJuIHByZXZpb3VzLm5leHQ7XHJcblx0fVxyXG5cdHNoaWZ0KCl7XHJcblx0XHR2YXIgdGVtcCA9IHRoaXMuaGVhZDtcclxuXHRcdHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0P3RoaXMuaGVhZC5uZXh0IDogbnVsbDtcclxuXHRcdHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcclxuXHRcdHRoaXMuX2xlbmd0aC0tO1xyXG5cdFx0cmV0dXJuIHRlbXA7XHJcblx0fVxyXG5cclxuXHRwcmludCgpe1xyXG5cdFx0dmFyIG5vZGUgPSB0aGlzLmhlYWQ7XHJcblx0XHR2YXIgcHJldHR5ID0gJyc7XHJcblx0XHRpZighbm9kZSl7XHJcblx0XHRcdHJldHVybiBjb25zb2xlLmxvZyhcImVtcHR5IGxpc3RcIik7XHJcblx0XHR9XHJcblx0XHR3aGlsZShub2RlKXtcclxuXHRcdFx0cHJldHR5Kz0nfCcrbm9kZS52YWx1ZSsnfCA9PiAnXHJcblx0XHRcdG5vZGUgPSBub2RlLm5leHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJldHR5O1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlRHVwbGljYXRlcygpe1xyXG5cdFx0dmFyIG5vZGUgPSB0aGlzLmhlYWQ7XHJcblx0XHR2YXIgcHJldmlvdXMgPSBudWxsO1xyXG5cdFx0dmFyIGRpZmZlcmVuY2VzID0ge307XHJcblx0XHR3aGlsZShub2RlKXtcclxuXHRcdFx0aWYoZGlmZmVyZW5jZXNbbm9kZS52YWx1ZV0pe1xyXG5cdFx0XHRcdHByZXZpb3VzID8gcHJldmlvdXMubmV4dCA9IG5vZGUubmV4dCA6IHRoaXMuaGVhZCA9IG5vZGUubmV4dDtcclxuXHRcdFx0XHR0aGlzLl9sZW5ndGgtLTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdGRpZmZlcmVuY2VzW25vZGUudmFsdWVdID0gdHJ1ZTtcclxuXHRcdFx0XHRwcmV2aW91cyA9IG5vZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsZWFyKCl7XHJcblx0XHR0aGlzLmhlYWQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWlsID0gdGhpcy5oZWFkO1xyXG5cdFx0dGhpcy5fbGVuZ3RoID0gMDtcclxuXHR9XHJcblxyXG5cdGdldCBsZW5ndGgoKXtcclxuXHRcdHJldHVybiB0aGlzLl9sZW5ndGg7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIE5vZGV7XHJcblx0Y29uc3RydWN0b3IodmFsdWUsbmV4dCl7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHR0aGlzLm5leHQgPSBuZXh0O1xyXG5cdH1cclxufSJdfQ==
