type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const todos: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

function ShowList() {
  //   const todosList = [];

  //   for (const todo of todos) {
  //     todosList.push(<li key={todo.id}>{todo.title}</li>);
  //   }

  // const todosList = todos.map((todo:Todo) => <li key={todo.id}>{todo.title}</li>)

  return (
    <>
      <h2>ShowList</h2>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>

      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ShowList;
