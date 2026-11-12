import type { CalcGeo } from "./calc-geo.js";

export class Cercle implements CalcGeo {
  #rayon: number;

  constructor(rayon: number) {
    this.#rayon = rayon;
  }
  get surface(): number {
    return Math.PI * this.#rayon ** 2;
  }

  get rayon() {
    return this.#rayon;
  }

  set rayon(rayon: number) {
    this.#rayon = rayon;
  }
}
