// HelloWorld => UpperCamelCase, PasCalCase
// helloWorld => camelCase
// hello_world => snake_case
// hello-world => kebab-case
//background-color => backgroundColor
import { Rectangle } from "./rectangle.js";
const r = new Rectangle(10, 20);
console.log(r);
console.log(r.longueur);
r.longueur = 22;
console.log(r.longueur); // 10
r.longueur = 12;
console.log(r.longueur); // 12
console.log(r.surface); // 12
// console.log(`Rectangle ${r.longueur},${r.getLargeur()} `);
console.log(`${r}`);
console.log(String(r));
//# sourceMappingURL=main.js.map