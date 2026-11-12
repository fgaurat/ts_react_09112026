export class Rectangle {
  #longueur: number;
  #largeur: number;

  constructor(longueur: number, largeur: number) {
    this.#longueur = longueur;
    this.#largeur = largeur;
  }

  setLongueur(longueur: number): void {
    this.#longueur = longueur;
  }

  getLongueur(): number {
    return this.#longueur;
  }

  setLargeur(largeur: number): void {
    if (largeur<=0){
        throw Error("erreur largeur")
    }
    this.#largeur = largeur;
  }

  getLargeur(): number {
    return this.#largeur;
  }

  getSurface(): number {
    return this.#longueur * this.#largeur;
  }

  toString(): string {
    return `Rectangle ${this.getLongueur()},${this.getLargeur()} `;
  }
}
