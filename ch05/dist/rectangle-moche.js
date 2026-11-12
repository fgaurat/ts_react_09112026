export class Rectangle {
    #longueur;
    #largeur;
    constructor(longueur, largeur) {
        this.#longueur = longueur;
        this.#largeur = largeur;
    }
    setLongueur(longueur) {
        this.#longueur = longueur;
    }
    getLongueur() {
        return this.#longueur;
    }
    setLargeur(largeur) {
        if (largeur <= 0) {
            throw Error("erreur largeur");
        }
        this.#largeur = largeur;
    }
    getLargeur() {
        return this.#largeur;
    }
    getSurface() {
        return this.#longueur * this.#largeur;
    }
    toString() {
        return `Rectangle ${this.getLongueur()},${this.getLargeur()} `;
    }
}
//# sourceMappingURL=rectangle-moche.js.map