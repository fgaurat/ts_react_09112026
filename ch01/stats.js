// stats.js : code JavaScript de départ du TP 1.1
// À copier dans formation_ts/ch01/ avec todos.json et users.json,
// puis à transformer en stats.ts. À lancer depuis formation_ts/.
import { readFileSync } from "node:fs";
const todos = JSON.parse(readFileSync("ch01/todos.json", "utf8"));
const users = JSON.parse(readFileSync("ch01/users.json", "utf8"));
function trouverUtilisateur(id) {
  return users.find((u) => u.id === id);
}
function ajouterTodo(userId, title) {
  todos.push({
    userId: userId,
    id: todos.length + 1,
    title: title,
    completed: false,
  });
}
function afficherStats(userId) {
  const user = trouverUtilisateur(userId);
  if (!user) {
    throw new Error();
  }
  const sesTodos = todos.filter((t) => t.userId === userId);
  const termines = sesTodos.filter((t) => t.completed).length;
  const pourcentage = Math.round((termines / sesTodos.length) * 100);
  console.log(
    `${user.name} : ${termines}/${sesTodos.length} terminés (${pourcentage} %)`,
  );
}
ajouterTodo(1, "Préparer la démo");
ajouterTodo(Number("2"), "Relire le support"); // identifiant lu dans un formulaire
afficherStats(1);
afficherStats(2);
afficherStats(11); // utilisateur absent de users.json
//# sourceMappingURL=stats.js.map
