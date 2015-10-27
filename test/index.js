import test from 'tape';
import {List} from '../src/list';
import {Node} from '../src/node';

var list = new List();
test('Initialization', (t)=>{

	list.clear();

	t.ok(list instanceof List,'should be instance of List');
	t.equal(list.length,0,'should be empty');
	t.equal(list.head,null,'head should be null');
	t.equal(list.tail,null,'tail should be null');
	t.end();
})

test('Adding one node', (t)=>{

	list.clear();

	list.push(5);
	t.equal(list.length,1,'length should be 1');
	t.ok(list.head instanceof Node,'head should be instance of Node');
	t.end();
})

test('Adding multiple nodes', (t)=>{
	
	list.clear();

	list.push(5);
	list.push(5);
	list.push(5);

	t.equal(list.length,3,'length should be 3');
	t.end();
})

test('Clearing values', (t)=>{
	
	list.clear();
	
	list.push(5);
	list.push(5);
	list.push(5);
	list.clear();

	t.equal(list.length,0,'length should be 0');
	t.equal(list.head,null,'head should be null');
	t.equal(list.tail,null,'tail should be null');
	t.end();
})

test('Removing from list', (t)=>{
	
	list.clear();
	
	list.push(5);
	list.push(7);
	list.removeNode(7);

	t.equal(list.length,1,'length should substract');
	t.equal(list.head.value,5,'should remove');
	t.deepEqual(list.tail,list.head,'tail should change');
	t.end();
})

test('Pop from list', (t)=>{
	
	list.clear();
	
	list.push(5);
	list.push(7);
	var item = list.pop();

	t.equal(list.length,1,'length should substract');
	t.equal(item.value,7,'should return item removed');
	t.deepEqual(list.tail,list.head,'tail should change');
	t.end();
})

test('Removing duplicates', (t)=>{
	
	list.clear();
	
	list.push(5);
	list.push(5);
	list.push(5);

	list.removeDuplicates();

	t.equal(list.length,1,'length should substract');
	t.equal(list.head.next,null,'head.next should be null');
	t.end();
})

test('Shifting value', (t)=>{
	
	list.clear();
	
	list.push(5);
	list.push(6);
	list.push(7);

	var shifted = list.shift();

	t.ok(shifted instanceof Node,'should be a Node');
	t.equal(list.length,2,'length should substract');
	t.end();
})


test('Shifting value when list has one node', (t)=>{
	
	list.clear();
	
	list.push(5);
	list.shift();

	t.notOk(list.head,'head should null');
	t.notOk(list.tail,'tail should null');
	t.equal(list.length,0,'length should be 0');
	t.end();
})


test('Testing impossibru', (t)=>{
	
	list.clear();
	
	for (var i = 0; i < 10000; i++) {
		list.push(i);
	};

	t.equal(list.length,10000,'length should be equal');
	t.notOk(list.tail.next,'tail.next should be null');
	t.end();
});