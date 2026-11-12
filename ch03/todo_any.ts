// TP 3.4 : ce fichier compile... parce que tout est en `any`.
// Objectif : supprimer TOUS les `any`, puis corriger les erreurs que le compilateur révèle.
// Exécution : node ch03/todos_any.ts   Vérification : npx tsc -p ch03

// type Completed = Boolean | "false" | "true";

// type Priorite = "haute" | "normale" | "basse";
type Priorite = "basse" | "normale" | "haute";

type Todo = {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean | "false" | "true";
};

type TodoPlanifie = Todo & {
  priorite: Priorite;
  echeance?: String;
};

type TodoPlanifies = TodoPlanifie[];

type TodoList = {
  readonly id: Number;
  nom: String;
  userId: Number;
  todos: TodoPlanifies;
};

const formation: TodoList = {
  id: 1,
  nom: "Préparer la formation",
  userId: 1,
  todos: [
    {
      userId: 1,
      id: 1,
      title: "Réserver la salle",
      completed: true,
      priorite: "haute",
      echeance: "2026-11-02",
    },
    {
      userId: 1,
      id: 2,
      title: "Relire le support",
      completed: "false",
      priorite: "haute",
      echeance: "2026-11-06",
    },
    {
      userId: 1,
      id: 3,
      title: "Préparer la démo",
      completed: false,
      priorite: "normale",
    },
    {
      userId: 1,
      id: 4,
      title: "Envoyer les invitations",
      completed: false,
      priorite: "basse",
      echeance: "2026-11-04",
    },
  ],
};

function trouver(id: Number): TodoPlanifie | undefined {
  return formation.todos.find((t: any) => t.id === id);
}

function compterTermines(): Number {
  return formation.todos.filter((t: any) => t.completed).length;
}

function urgents(): TodoPlanifies | undefined {
  return formation.todos.filter(
    (t: any) => t.priorite === "Haute" && !t.completed,
  );
}

function terminer(id: Number): void {
  const todo = trouver(id);
  if (!todo) throw new Error("Pas de Todo !");
  todo.completed = true;
}

function ajouter(title: String): TodoPlanifie {
  const todo: TodoPlanifie = {
    userId: formation.userId,
    id: formation.todos.length + 1,
    title,
    completed: false,
    priorite: "normale",
  };
  formation.todos.push(todo);
  return todo;
}

function formaterEcheance(todo: any): any {
  const [, mois, jour] = todo.echeance.split("-");
  return `${todo.title} : ${jour}/${mois}`;
}

console.log("Terminés :", compterTermines(), "sur", formation.todos.length);
console.log(
  "Urgents :",
  urgents()?.map((t: any) => t.title),
);
terminer(3);
terminer(99);
ajouter("Imprimer les feuilles d'émargement");
console.log("Échéances :", formation.todos.map(formaterEcheance));
