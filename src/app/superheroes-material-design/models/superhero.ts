export class Superhero {
    name: string;
    email: string;
    details: string;
    country: string;
    specialPowers: Array<string> = [];
    favFood: Array<string> = [];
    cardImage: string;
}

export class Superhero2 extends Superhero{
    id: number;
}
