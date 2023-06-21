function dogSleep() {
    console.log("Zzzzz");
}


let dog = {
    name: "Balkan",
    age: 8,

    // Newest way to define method to a object
    bark() {
        console.log("Wof Wof");
    },


    // Arrow function to define a method to a object
    eat: () => console.log("Yum Yum"),


    // Traditional way to define a method to a object
    play: function () {
        console.log("Playing with other dog..");
    },


    // Assign another function as a method to a object. Function defines outside of the object's scope
    sleep: dogSleep

}
