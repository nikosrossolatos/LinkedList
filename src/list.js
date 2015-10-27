import {Node} from './node'

export class List{
	constructor(){
		this.head = null;
		this.tail = null;
		this._length = 0;
	}

	push(value){
		var node = new Node(value,null);
		if(!this.head){
			this.head = node;
			this.tail = this.head;
		}
		else{
			this.tail.next = node;
			this.tail = node;
		}
		this._length++;
	}
	removeNode(value){
		var node = this.head;
		var previous = null;
		while(node){
			if(node.value == value){
				!node.next? this.tail = previous : '';
				// previous ? previous.next = node.next : this.head = node.next;
				Object.assign(node,node.next);
				this._length--;
				return node;
			}
			previous = node;
			node = node.next;
		}
	}
	pop(){
		var node = this.head;
		var previous = null;
		while(node.next){
			previous = node;
			node = node.next;
		}
		this.tail = previous;
		this._length--;
		return previous.next;
	}
	shift(){
		var temp = this.head;
		this.head = this.head.next?this.head.next : null;
		this.tail = this.head;
		this._length--;
		return temp;
	}

	print(){
		var node = this.head;
		var pretty = '';
		if(!node){
			return console.log("empty list");
		}
		while(node){
			pretty+='|'+node.value+'| => '
			node = node.next;
		}
		return pretty;
	}

	removeDuplicates(){
		var node = this.head;
		var previous = null;
		var differences = {};
		while(node){
			if(differences[node.value]){
				previous ? previous.next = node.next : this.head = node.next;
				this._length--;
			}
			else{
				differences[node.value] = true;
				previous = node;
			}
			node = node.next;
		}
	}

	clear(){
		this.head = null;
		this.tail = this.head;
		this._length = 0;
	}

	get length(){
		return this._length;
	}
}