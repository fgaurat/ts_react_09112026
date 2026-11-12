import { Rectangle } from "./rectangle.js";

export class Carre extends Rectangle {
  #cote: number;

  constructor(cote: number) {
    super(cote, cote);
    this.#cote = cote
  }

  get cote() {
    return this.#cote;
  }

  set cote(cote: number) {
    this.#cote = cote;
    this.longueur = cote;
    this.largeur = cote;

  }
}
