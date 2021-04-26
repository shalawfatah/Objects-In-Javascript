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

