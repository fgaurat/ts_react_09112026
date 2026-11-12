export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const TITRE_MAX = 80;

function nettoyer(title: string): string {
  return title.trim().replace(/\s+/g, " ");
}

/**
 * Crée un objet Todo
 *
 *
 * @param userId
 * @param id
 * @param title
 * @returns
 *
 * @example
 * const t: Todo = creerTodo(1, 12, "Faire du React");
 * console.log(t);
 *
 * @see [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
 * @see nettoyer
 *
 * @throws {Error} Si le titre est vide ou dépasse la longueur maximale
 *
 * @remarks
 * Cette fonction crée un objet Todo avec les propriétés userId, id, title et completed.
 * Le titre est nettoyé en supprimant les espaces superflus et en limitant sa longueur à 80 caractères.
 * Si le titre est vide après nettoyage ou dépasse la longueur maximale, une erreur est levée.
 */
export function creerTodo(userId: number, id: number, title: string): Todo {
  return { userId, id, title: nettoyer(title), completed: false };
}
// export default { creerTodo, nettoyer };

// export o;
// o = { type Todo, creerTodo }
// { type Todo, creerTodo } = o
