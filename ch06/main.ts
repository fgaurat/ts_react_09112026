import type { Todo } from "./todo.js";
import type { User } from "./user.js";

function firstElement<T>(elements: T[]): T | undefined {
  return elements[0];
}

const a = [10, 20, 30, 40];
const e = firstElement(a);
console.log(e);

const s = ["Hello", "Bonjour", "Ola"];
const e2 = firstElement(s);
console.log(e2);

function showData<T extends { id: Number }>(d: T): void {
  console.log(d.id);
}

function callToString<T extends { toString: () => String }>(d: T): void {
  console.log(d.id);
}

let todo: Todo = {
  id: 1,
  title: "La todo 1",
  completed: true,
  userId: 1,
};

let user: User = {
  id: 1,
  name: "MARTIN",
  email: "test@truc.com",
};

showData(todo);
showData(user);

let v1: number = 2;

let v2: Number = 2;

show(v2);

function show(v: number) {
  console.log(v);
}
