function worldTour(data) {

    let destinations = data.shift();

    let command = data.shift();

    while (command !== "Travel") {
        let tokens = command.split(":");
        let task = tokens[0];


        switch (task) {

            case "Add Stop":
                let index = Number(tokens[1]);
                let string = tokens[2];

                if (index >= 0 && index <= destinations.length - 1) {
                    let start = destinations.substring(0, index);
                    let end = destinations.substring(index);
                    destinations = start + string + end;
                }

                console.log(destinations);

                break;


            case "Remove Stop":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);


                if ((startIndex >= 0 && startIndex <= destinations.length - 1) && (endIndex >= 0 && endIndex <= destinations.length - 1)) {
                    let first = destinations.substring(0, startIndex);
                    let second = destinations.substring(endIndex + 1);
                    destinations = first + second;
                }

                console.log(destinations);

                break;



            case "Switch":
                let oldString = tokens[1];
                let newString = tokens[2];

                while (destinations.includes(oldString)) {
                    destinations = destinations.replace(oldString, newString);
                }

                console.log(destinations);

                break;

        }

        command = data.shift();
    }


    console.log(`Ready for world tour! Planned stops: ${destinations}`);


}


worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))