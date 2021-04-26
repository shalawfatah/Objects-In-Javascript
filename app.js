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

// To create a new object which inherits the values of the current object
const barisa = Object.create(job)
barisa.position = 'manager'
barisa.showDetails()

// To merge two objects
const person = {
    name: 'Ahmed',
    age: 32
}
const employment = {
    job: 'Manager',
    company: 'Some Company'
}
const ahmed = Object.assign(person, employment)
console.log(ahmed)

// If we allow modifying current properties of an Obj, but prevent adding new ones, we use Seal
const sealed = Object.seal(person)