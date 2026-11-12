// HelloWorld => UpperCamelCase, PasCalCase
// helloWorld => camelCase
// hello_world => snake_case
// hello-world => kebab-case
//background-color => backgroundColor

import type { CalcGeo } from "./calc-geo.js";
import { Carre } from "./carre.js";
import { Cercle } from "./cercle.js";
import { Rectangle } from "./rectangle.js";

function showSurface(theObject: CalcGeo) {
  console.log(theObject.surface);
}

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

const c = new Carre(2);
showSurface(c);
showSurface(r);
const ce = new Cercle(2);
showSurface(ce);
