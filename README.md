# LinkedList
A simple linked list structure written in ES6.

##Class methods
```
push(data)
pop()
shift()
clear()
removeDuplicates()
print()
```

##Class properties
head
tail
length

##Example

```
import {List} from './path/linkedList'
 
var list = new List()
 
for (var i = 0; i < 1000; i++) {
  list.push(i)
}
 
console.log(list.head)
console.log(list.tail)

console.log(list.pop());

list.push(5);
list.push(7);

list.removeDuplicates();

list.print(); //check your console

while (list.length) {
  console.log(list.shift())
}
```

###Testing

```
npm install
```

```
npm test
```

##Licence
MIT
