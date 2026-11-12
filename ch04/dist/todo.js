const TITRE_MAX = 80;
function nettoyer(title) {
    return title.trim().replace(/\s+/g, " ");
}
export function creerTodo(userId, id, title) {
    return { userId, id, title: nettoyer(title), completed: false };
}
//# sourceMappingURL=todo.js.map