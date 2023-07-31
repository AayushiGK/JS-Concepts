const obj = { fname: "Jen", lname: "winget" };

let printName = function () {
  console.log(`${this.fname} ${this.lname}`);
};
let printDetail = function (...occupation) {
  console.log(`${this.fname} ${this.lname} is an ${occupation}`);
};

let bindPrintName = printName.bind(obj);
console.log(bindPrintName, "...end!");
bindPrintName();

// Simple custom bind method
Function.prototype.customBind = function (obj) {
  const func = this;
  return function () {
    func.apply(obj);
  };
};
let simpleBind = printName.bind(obj);
simpleBind();

// custom bind method with Arg while binding.
Function.prototype.customBind = function (obj, ...args) {
  const func = this;
  return function () {
    func.apply(obj, [...args]);
  };
};

let bindingArg = printDetail.bind(obj, "Down to Earth", "Indian");
bindingArg();

// custom bind method with Arg while calling bind.
Function.prototype.customBind = function (obj, ...args) {
  const func = this;
  return function (...param) {
    func.apply(obj, [...args, ...param]);
  };
};

let functionalArg = printDetail.bind(obj, "Down to Earth", "Indian");
functionalArg("Actress");
