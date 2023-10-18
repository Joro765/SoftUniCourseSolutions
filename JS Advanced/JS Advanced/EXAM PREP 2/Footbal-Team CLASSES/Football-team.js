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

    }

}









let fTeam = new footballTeam("Barcelona", "Spain");

console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Kylian Mbappé/23/190"]));

console.log(fTeam);