let regex = /(?<day>[0-9]{2})-(?<month>[A-Z][a-z]{2})-(?<year>[0-9]{4})/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(?<day>[0-9]{2})-(?<month>[A-Z][a-z]{2})-(?<year>[0-9]{4})', 'gm')

let text = `12-Jun-2023 30-Aug-1943 19-Sep-2002 05-Mar-2005 `;


// EXEC  --- рънва и запазва резултата в match
let match = regex.exec(text);

// Въртим докато има мач в match
while (match) {
    console.log(match.groups.day); // Mоже да си взимаме по група и пропърти 
    // Обновяваме мача с нов рън
    match = regex.exec(text);
}