class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        } else {
            return `${participantName} has already been added to the list`;
        }
    }


    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (this.participants.hasOwnProperty(participantName) && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let counter;

        if (condition < 90) {
            counter = Math.floor(condition / 30);
            return `${participantName} could only complete ${counter} of the disciplines`
        }

        if (condition >= 90) {
            let name = participantName;
            let gender = this.participants[participantName];
            delete this.participants[participantName];
            this.listOfFinalists.push({ name, gender })
            return `Congratulations, ${participantName} finished the whole competition`
        }

    }


    rewarding(participantName) {
        let resultArray;
        resultArray = this.listOfFinalists.filter(person => person.name === participantName);
        if (resultArray.length < 1) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }


    showRecord(criteria) {
        if (this.listOfFinalists.length < 1) {
            return `There are no finalists in this competition`
        }

        let resultArray = [];


        if (criteria === "male") {
            resultArray = this.listOfFinalists.filter(person => person.gender === "male");
            let finalist;

            if (resultArray.length < 1) {
                return `There are no ${criteria}'s that finished the competition`;
            } else {
                finalist = resultArray.shift();
                return `${finalist.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }

        if (criteria === "female") {
            resultArray = this.listOfFinalists.filter(person => person.gender === "female");
            if (resultArray.length < 1) {
                return `There are no ${criteria}'s that finished the competition`;
            } else {
                finalist = resultArray.shift();
                return `${finalist.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }


        if (criteria === "all") {
            let buff = ``;
            buff += `List of all ${this.competitionName} finalists:\n`
            this.listOfFinalists.forEach(person => buff += `${person.name}\n`);
            return buff.trim();
        }





    }

}


const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"));

console.log(contest.addParticipant("Sasha", "female"));

console.log(contest.completeness("Peter", 100));

console.log(contest.completeness("Sasha", 90));

console.log(contest.rewarding("Peter"));

console.log(contest.rewarding("Sasha"));

console.log(contest.showRecord("all"))