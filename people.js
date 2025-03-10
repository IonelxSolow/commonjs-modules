const firstLastName = require('./names');
const hobbysStr = require('./hobbies');

function people () {
    const person = firstLastName('Vincenzo', 'Gasolio');
    const fullName = `${person.firstName} ${person.lastName}`;

    const hobbies = hobbysStr('Sgizzare bottoni', 'Guidare', 'Viaggiare');

    return {
        fullName: fullName,
        hobbies: hobbies
    }
} 

const person = person();
console.log(person);