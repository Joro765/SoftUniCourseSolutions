function extendClass(someclass) {
    someclass.prototype.species = "Human";
    someclass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

