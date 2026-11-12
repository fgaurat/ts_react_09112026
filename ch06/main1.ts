interface Todo {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean | "false" | "true";
}

type NewTodo = Omit<Todo, "id" | "completed">;
type OptTodo = Partial<Todo>;
type TitleOnly = Pick<Todo, "title" | "completed">;

const t: NewTodo = { title: "Le titre", userId: 1, completed: false };
const t1: Todo = { id: 12, ...t };
console.log(t);

const t2: OptTodo = { title: "Le titre" };

//id obligatoire et le rest opt
type TodoUpdate1 = Pick<Todo, "id"> & Partial<Todo>;
type TodoUpdate2 = Partial<Todo> & Pick<Todo, "id">;

const t3: TodoUpdate1 = { title: "Le titre", userId: 1, completed: false };
const t4: TodoUpdate2 = { title: "Le titre", userId: 1, completed: false };
