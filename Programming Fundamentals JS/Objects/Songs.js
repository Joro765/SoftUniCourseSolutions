function printSongs(data) {

    let songsCount = data.shift(); // Взимам си броя на песните
    let printType = data.pop(); // Взимам си типа за принтиране
    let songs = []; // Правя си масив

    // Клас за песен
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    // Въртя през всички песни от масива
    for (let i = 0; i < songsCount; i++) {
        let [type, name, time] = data[i].split("_"); // За всяка итерация си сплитвам стринга на масив и асайнвам на променливи
        let song = new Song(type, name, time); // Създавам нова инстанция на класа и задавам параметри
        songs.push(song); // Добавям в масива песента
    }


    // Принтирам на база на типа за принтиране
    if (printType === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === printType);
        filtered.forEach((i) => console.log(i.name));
    }

}



printSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);