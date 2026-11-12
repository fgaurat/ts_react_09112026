function getTodo(todoId) {
  const t = {
    // id:id,
    id: todoId,
    title: `Todo id: ${todoId}`,
    completed: false,
  };

  return t;
}

const todo = getTodo(1);
console.log(todo); // {title:"",...}

const a = [10, 20, 30, 40];
a.push(50);

console.log(a);

const [b, c, ...d] = a; //[10, 20, 30, 40, 50];

console.log(b, c, d);

console.log(a);
// console.log([10, 20, 30, 40, 50]);

console.log(...a);
// console.log(10, 20, 30, 40, 50);

// f(1)
// f(1,2)
// f(1,2,3)

// function f(...p){

// }

const o = { name: "GAURAT", firstName: "Fred", job: "dev", age: 22 };

const { firstName, name, ...leReste } = o;

console.log(leReste);

const o2 = {...o,age:50}