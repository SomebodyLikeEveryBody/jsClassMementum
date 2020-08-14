//basic way
function MyClass(pArgs) {
  this.construct = function () {
    this.attr1 = 42;
    this.attr2 = 42;
    this.attr3 = 42;
    this.attr4 = 42;
  };
  
  this.method1 = function () {
    doStuffs;
  };
  
  this.method1 = function () {
    doStuffs;
  };
  
  this.method1 = function () {
    doStuffs;
  };
  
  this.method1 = function () {
    doStuffs;
  };
  
  this.construct();
}

//modern way
class Myclass {
  constructor() {
    this.attr1 = 42;
    this.attr2 = 42;
    this.attr3 = 42;
    this.attr4 = 42;
  }
  
  static staticMethod() {
    //to call like MyClass.staticMethod();
  }
  
  method1() {
    //no kw function
    doStuff;
  }
  
  method2() {
    doStuff;
  }
  
  method3() {
    doStuff;
  }
  
  method4() {
    doStuff;
  }
};
