function sayHello(methode, context) {
    console.log("Bonjour", methode);
}
class Todo {
    delete(id) {
        console.log(`delete ${id}`);
    }
}
const t = new Todo();
console.log(t);
export {};
//# sourceMappingURL=main.js.map