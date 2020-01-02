// Racial info

const race = {
    human: {
        minAge: 13,
        maxAge: 57,
        minHeight: 62,
        maxHeight: 78,
        minWeight: 6,
        maxWeight: 9,
        name: 'human'
    },

    elf: {
        minAge: 18,
        maxAge: 78,
        minHeight: 74,
        maxHeight: 90,
        minWeight: 6,
        maxWeight: 9,
        name: 'elf'
    },

    halfelf: {
        minAge: 15,
        maxAge: 64,
        minHeight: 70,
        maxHeight: 82,
        minWeight: 6,
        maxWeight: 9,
        name: 'half-elf'
    },

    dwarf: {
        minAge: 20,
        maxAge: 85,
        minHeight: 50,
        maxHeight: 58,
        minWeight: 8,
        maxWeight: 10,
        name: 'dwarf'
    }
}

// Sex

const sex = {
    female: {
        subject: 'she',
        object: 'her',
        possessive_d: 'her',
        possessive_p: 'hers',
        reflexive: 'herself',
        name: 'female',
    },
    
    male: {
        subject: 'he',
        object: 'him',
        possessive_d: 'his',
        possessive_p: 'his',
        reflexive: 'himself',
        name: 'male',
    },

    andro: {
        subject: 'they',
        object: 'them',
        possessive_d: 'their',
        possessive_p: 'theirs',
        reflexive: 'themself',
        name: 'androgynous'
    }
}

// Hair

const hairColor = ['black', 'brown', 'blonde', 'red', 'grey', 'white', 'dyed']
const hairLength = ['bald', 'short', 'average', 'long']
// const hairStyle = TO-DO: none, braided, chopped, tied, etc.

// Skin

// const skinType = TO-DO: smooth, scarred, wrinkled, cracked, etc.
const skinColor = ['pale', 'light', 'mid', 'tan', 'dark', 'black', 'red', 'yellow']
// const skinBlemish = TO-DO: acne, freckles, etc.

// Face

// const faceShape = TO-DO: heart, square, round, oval, etc.
// const eyeShape = TO-DO: 

// Generic number randomizing functions
const randSimpleNum = (max) => Math.floor(Math.random() * Math.floor(max))
const randNum = (min, max) => Math.floor(Math.random() * (1 + max - min)) + min

// Pick an object's key randomly (e.g. race, sex, etc.)
const randObjKey = (obj)  => {
    const keys = Object.keys(obj)
    const i = randSimpleNum(keys.length)
    return keys[i]
}

const printObjVal = (obj) => {
    const i = randObjKey(obj)
    return obj[i]
}

// Pick an array value randomly (e.g. physical features)
const randArrVal = (arr) => {
    const i = randSimpleNum(arr.length)
    return arr[i]
}

const randSex = () => printObjVal(sex)
const randRace = () => printObjVal(race)
const randAge = () => {
    let currRace = randRace()
    return randNum(currRace.minAge, currRace.maxAge)
}

console.log('Sex: ' + randSex().name)
console.log('Race: ' + randRace().name)
console.log('Age: ' + randAge())
