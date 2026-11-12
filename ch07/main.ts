function sayHello(methode: Function, context: ClassMethodDecoratorContext) {
  console.log("Bonjour", methode);
}

class Todo {
  delete(id: number) {
    console.log(`delete ${id}`);
  }
}

const t = new Todo();

console.log(t);
