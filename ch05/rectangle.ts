import type { CalcGeo } from "./calc-geo.js";

export class Rectangle implements CalcGeo {
  #longueur: number;
  #largeur: number;

  constructor(longueur: number = 0, largeur: number = 0) {
    this.#longueur = longueur;
    this.#largeur = largeur;
    console.log(`constructor (${this})`);
  }

  set longueur(longueur: number) {
    this.#longueur = longueur;
  }

  get longueur(): number {
    return this.#longueur;
  }

  set largeur(largeur: number) {
    if (largeur <= 0) {
      throw Error("erreur largeur");
    }
    this.#largeur = largeur;
  }

  get largeur(): number {
    return this.#largeur;
  }

  get surface(): number {
    return this.#longueur * this.#largeur;
  }

  toString(): string {
    return `Rectangle ${this.longueur},${this.largeur} `;
  }
}
