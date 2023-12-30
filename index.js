// Destructure inside function arguments

const obj = {
  name: "Sanjay",
  dob: "2023-12-30",
  role: "Developer",
  company: "Guvi",
};

// destructure only the name & role
// with new vars name, role

// const { name, role } = obj;

// console.log(name);
// console.log(role);

//                       LHS
// const displayInfo = (person) => {
//   console.log("Name:", person.obj);
//   console.log("Role:", person.role);
// };
// //                       LHS
// const displayInfo = ({ name, role }) => {
//   console.log("Name:", name);
//   console.log("Role:", role);
// };

// //          RHS
// displayInfo(obj);

// Spreading

const obj = {
  name: "Sanjay",
  dob: "2023-12-30",
  role: "Developer",
  company: "Guvi",
};

// const personObj = obj;
// personObj["age"] = 40;

var personObj = { ...obj, age: 40 };

// console.log(personObj);

// Rest Operator
const { role, ...otherVals } = personObj;

console.log(otherVals);

// lexical scoping
// accesing parent scope object from local scope

const func = () => {
  console.log(this.personObj);
};

function funcTwo() {
  var x = "9999";

  const funcInside = () => {
    console.log(this.x);
  };

  funcInside();
}
