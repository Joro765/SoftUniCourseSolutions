function searchList(x) {

    let list = {
        "a": "Ankara",
        "b": "Berlin",
        "c": "Chicago",
        "d": "Dortmund"
    }

    if (list.hasOwnProperty(x)) {
        return list[x];
    } else {
        return "No match!";
    }
}


console.log(searchList("d"));