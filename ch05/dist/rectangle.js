export class Rectangle {
    #longueur;
    #largeur;
    constructor(longueur, largeur) {
        this.#longueur = longueur;
        this.#largeur = largeur;
        console.log(`constructor (${this})`);
    }
    set longueur(longueur) {
        this.#longueur = longueur;
    }
    get longueur() {
        return this.#longueur;
    }
    set largeur(largeur) {
        if (largeur <= 0) {
            throw Error("erreur largeur");
        }
        this.#largeur = largeur;
    }
    get largeur() {
        return this.#largeur;
    }
    get surface() {
        return this.#longueur * this.#largeur;
    }
    toString() {
        return `Rectangle ${this.longueur},${this.largeur} `;
    }
}
//# sourceMappingURL=rectangle.js.map