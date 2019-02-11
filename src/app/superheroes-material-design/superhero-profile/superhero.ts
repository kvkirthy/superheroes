const superheroes = [
    {
        name: "batman",
        creators: ["Bob Kane", "Bill Finger"],
        firstAppearance: "Year 1939",
        livesIn: "Gotham City",

    },
    {
        name: "Chhota Bheem",
        creators: [	
            "Raj Viswanadha",
            "Arun Shendurnikar",
            "Nidhi Anand"],
        firstAppearance: "Year 2008",
        livesIn: "India",
    },
    
];

export default superheroes;

function filterSuperhero(name: string){
    return superheroes.filter( x => x.name === name);
}

export function getSuperheroLocation(name: string): string{
    return filterSuperhero(name).livesIn;
}

export function getSuperheroCreators(name: string): string{
    return filterSuperhero(name).creators;
}