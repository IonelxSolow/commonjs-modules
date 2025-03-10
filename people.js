const firstLastName = require('./names');
const hobbysStr = require('./hobbies');

/* const hobbies = hobbysStr('Sgizzare bottoni', 'Guidare', 'Viaggiare');
console.log(hobbies); */
/* console.log(firstLastName('Vincenzo', 'Gasolio')); */

function people () {
    const person = firstLastName('Vincenzo', 'Gasolio');
    const fullName = `${person.firstName} ${person.lastName}`;

    const hobbies = hobbysStr('Sgizzare bottoni', 'Guidare', 'Viaggiare');

    return {
        fullName: fullName,
        hobbies: hobbies
    }
} 

const person = people();
console.log(person);