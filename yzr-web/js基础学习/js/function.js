//函数的定义方式
/**
 * 1.普通定义方式
 * function fnName(prams){fnBody}
 * 2.匿名方式
 * let fn = function(prams){fnBody}
 * 3.
 */

//作用域和函数堆栈 递归
//一个函数可以指向并调用自身。有三种方法可以达到这个目的：
// 函数名
// arguments.callee  译者注：ES5 禁止在严格模式下使用此属性
// 作用域下的一个指向该函数的变量名


//嵌套函数和闭包
// 嵌套函数例子
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

// 由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数：
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // 可以这样想：给一个函数，使它的值加 3
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

// 由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。
var pet = function(name) {          //外部函数定义了一个变量"name"
  var getName = function() {
    //内部函数可以访问 外部函数定义的"name"
    return name;
  }
  //返回这个内部函数，从而将其暴露在外部函数作用域
  return getName;
};
myPet = pet("Vivie");

myPet();                            // 返回结果 "Vivie"

