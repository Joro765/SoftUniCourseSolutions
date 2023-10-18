class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }


    // МНОГО ВАЖНО ЗА ТЪРСЕНЕ В МАСИВ ОТ ОБЕКТИ
    newAdditions(playersArray) {
        for (const player of playersArray) {
            let [name, age, playerValue] = player.split("/");
            age = Number(age);
            playerValue = Number(playerValue)

            // с FIND проверяваме дали има такъв обект в масива. Това ще върне обекта или ще върне undefiend ако го няма
            let currentPlayer = this.invitedPlayers.find(pl => pl.name === name); // Ако има играч с такова име в масива от обекти да го взема

            // Ако има такъв играч манипулираме стойностите му
            if (currentPlayer) {
                if (currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue;
                }
                // ако няма такъв играч го добавяме 
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }

        }

        let buff = `You successfully invite `;
        let arr = [];

        for (const player of this.invitedPlayers) {
            arr.push(player.name);
        }

        return buff += `${arr.join(", ")}.`
    }

    // Проверяваме играчите по цена
    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split("/");

        let currentPlayer = this.invitedPlayers.find(pl => pl.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (currentPlayer.playerValue > offer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - offer} million more are needed to sign the contract!`)
        }

        if (currentPlayer.playerValue <= offer) {
            currentPlayer.playerValue = "Bought";
        }

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    }


    // Проверяваме играчите по години
    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(pl => pl.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (currentPlayer.age >= age) {
            return `${name} is above age limit!`
        }

        if (currentPlayer.age < age) {
            if ((age - currentPlayer.age) > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a contract for ${age - currentPlayer.age} years with ${this.clubName} in ${this.country}!`
            }
        }
    }

    // Принтираме всички обекти от масива чрез буфер
    transferWindowResult() {
        let buff = `Players list:\n`

        for (const player of this.invitedPlayers) {
            buff += `Player ${player.name}-${player.playerValue}\n`

        }
        // Тримваме последното място или нов ред от буфера
        return buff.trim()
    }

}



let fTeam = new footballTeam("Barcelona", "Spain");

console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",

    "Pau Torres/25/52"]));

console.log(fTeam.signContract("Kylian Mbappé/240"));

console.log(fTeam.ageLimit("Kylian Mbappé", 30));

console.log(fTeam.transferWindowResult());