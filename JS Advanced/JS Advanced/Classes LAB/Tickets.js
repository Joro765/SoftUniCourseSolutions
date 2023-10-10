function ticketDB(data, sortParam) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];


    for (const line of data) {
        let [destination, price, status] = line.split("|");
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    let sortedArray;

    if (sortParam === "price") {
        sortedArray = tickets.sort((a, b) => a[sortParam] - b[sortParam]);
    } else {
        sortedArray = tickets.sort((a, b) => a[sortParam].localeCompare(b[sortParam]));
    }


    return sortedArray;

}


ticketDB(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination')