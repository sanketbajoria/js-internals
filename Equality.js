// ===/== Strict equality vs equality

//Rule for equality (x == y)
// if x & y is null/undefined, then true
null == undefined //true

// if x is null/undefined and y is any other value than x... then false (except null == undefined scenario)
null == '' //false
null == 0 //false
null == false //false
undefined == '' //false
undefined == 0 //false
undefined == false //false


// if x or/and y is NaN, then it's always false
null == NaN //false
NaN == NaN //false
'' == NaN //false
0 == NaN //false
undefined == NaN //false
false == NaN //false

// if both are object then, check reference
var a = {x:1}
var b = {x:1}
var c = new String('1');
var d = new String('1');
a == b //false
a == a //true
c == d //false

// if one is primitive and other any other value, then both are converted to primitive then, numeric, then compare
0 == false //true, since Number(0) == Number(false) ---> 0 == 0
0 == '0' //true, since Number(0) == Number('0') ---> 0 == 0
0 == '' //true, since Number(0) == Number('') ---> 0 == 0
1 == true //true
1 == '1' //true
true == 'true' //false, since Number(true) == Number('true') ---> 1 == NaN
false == 'false' //false
new String('1') == 1 //true, first toprimitive then numeric
({x:1}) == 1 //false



//Rule for strict Equality
//Check type/reference and then compare value
null === undefined //false
null === null //true
0 === '0' //false
0 === 0 //true
