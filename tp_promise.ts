interface Todo {
  id: number;
  title: String;
  completed: Boolean;
}

function getTodo(todoId: number): Promise<Todo> {
  const p = new Promise<Todo>((resolve, reject) => {
    if (todoId > 0) {
      setTimeout(() => {
        const t: Todo = {
          // id:id,
          id: todoId,
          title: `Todo id: ${todoId}`,
          completed: false,
        };

        resolve(t);
      }, 1000);
    } else {
      reject("Erreur id");
    }
  });

  return p;
}

// const pTodo = getTodo(1);

// pTodo.then((todo: Todo) => {
//   console.log(todo);
// });

// getTodo(1)
//   .then((todo: Todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo: Todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo: Todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo: Todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   });

let pTodo1 = getTodo(1);
let pTodo2 = getTodo(2);
let pTodo3 = getTodo(3);
let pTodo4 = getTodo(4);

Promise.all([pTodo1, pTodo2, pTodo3, pTodo4]).then((leResultat) => {
  console.log(leResultat);
});

async function main() {
  let todo1 = await getTodo(1);
  console.log(todo1);
  let todo2 = await getTodo(2);
  console.log(todo2);
  let todo3 = await getTodo(3);
  console.log(todo3);
  let todo4 = await getTodo(4);
  console.log(todo4);
  let leResultat = await Promise.all([pTodo1, pTodo2, pTodo3, pTodo4]);
  console.log(leResultat);
  let r = await somme(1, 2);
  console.log(r);
  
}

main();

function somme(a: number, b: number) {
  return Promise.resolve(a + b);
}
