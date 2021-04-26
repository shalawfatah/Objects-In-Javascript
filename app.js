// This is an Object
const westeros = {
    cersi: "Lannister",
    arya: "Stark",
    jon: "Snow",
    brinne: "Tarth",
    daenerys: "Targaryen",
    theon: "Greyjoy",
    margaery: "Tyrell",
    sandor: "Clegane",
    sandor: "Clegane",
    samwell: "Tarley",
    ramsay: "Bolton"
}

// TO FIND ALL THE KEYS OF AN OBJECT
let allKeys = Object.keys(westeros)
console.log(allKeys)

// TO FIND ALL THE VALUES OF AN OBJECT
let allVals = Object.values(westeros)
console.log('Values: ', allVals)

// TO FIND EACH SINGLE KEY-VALUE PAIR OF AN OBJECT
let allentries = Object.entries(westeros)
console.log(allentries)

// To create an object out of an array 
let reverseEntries = Object.fromEntries(allentries)
console.log(reverseEntries)

// To freeze an object and prevent changes to it
let objfreeze = Object.freeze(westeros)
console.log(objfreeze)

// To create a method for an object
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";
        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
}
job.showDetails()