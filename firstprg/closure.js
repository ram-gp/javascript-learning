var a=10;  
function func1(){
	a = a+1;
	console.log(a);

}
function func2(){
	a = a+1;
	console.log(a);
}
function func3(){
	var a = 88;
	a = a+1;
	console.log(a);
}


console.log(a); // 10
func1(); // 11
console.log(a); //11
func2(); //12
console.log(a); //12
func3() // 89
func1(); //13
func1();//14

//
/* Lexical Scoping */
function init() {
  var a = 99; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
  	a = a+1;
    console.log(a); // use variable declared in the parent function    
  }
  displayName();    
}
init();

init();
/*init() creates a local variable called name and a function called displayName(). 
e displayName() function is an inner function that is defined inside init() 
and is only available within the body of the  init() function. 
The displayName() function has no local variables of its own. 
However, because inner functions have access to the variables of outer functions, 
displayName() can access the variable name declared in the parent function, init(). 
However, the same local variables in displayName() will be used if they exist.*/

/* Closure */

function makeFunc(b) {
  function displayName() {
    console.log(b);
  }
  return displayName;
}
var myFunc = makeFunc(89);
myFunc();
var myFunc2 = makeFunc(98);
myFunc2();

function makeFuncNew() {
  function displayName(c) {
    console.log(c);
  }
  return displayName;
}

var myFunc3 = makeFuncNew();
myFunc3(8);
myFunc3(78);


