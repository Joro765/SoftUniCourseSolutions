function songs(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsNumber = data.shift();
    let printType = data.pop();

    let songsArray = [];


    for (const song of data) {
        let [typeList, name, time] = song.split("_");
        let tempSong = new Song(typeList, name, time);
        songsArray.push(tempSong);
    }



    // Да обърна внимание на тези методи
    if (printType === "all") {
        songsArray.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsArray.filter((i) => i.typeList === printType);
        filtered.forEach((i) => console.log(i.name));

    }

}


songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])