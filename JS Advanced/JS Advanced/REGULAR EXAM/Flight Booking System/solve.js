class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookinsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let currentFlight = this.flights.find(fl => fl.flightNumber === flightNumber);

        if (currentFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({ flightNumber: flightNumber, destination: destination, departureTime: departureTime, price: price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }

    }

    bookFlight(passengerName, flightNumber) {
        let currentFlight = this.flights.find(fl => fl.flightNumber === flightNumber);

        if (currentFlight) {
            this.bookings.push({ passengerName: passengerName, flightNumber: flightNumber });
            this.bookinsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        } else {
            return `Flight ${flightNumber} is not available for booking.`
        }
    }


    cancelBooking(passengerName, flightNumber) {
        let currentPassenger = this.bookings.find(fl => fl.passengerName === passengerName && fl.flightNumber === flightNumber);

        if (currentPassenger) {
            let indexOfPassenger = this.bookings.indexOf(currentPassenger);
            this.bookings.splice(indexOfPassenger, 1);
            this.bookinsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        } else {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
    }


    showBookings(criteria) {
        if (this.bookings.length < 1) {
            throw new Error("No bookings have been made yet.")
        }

        let buff = ``

        if (criteria === "all") {
            buff += `All bookings(${this.bookings.length}):\n`;

            for (const person of this.bookings) {
                buff += `${person.passengerName} booked for flight ${person.flightNumber}.\n`
            }
        }


        if (criteria === "cheap") {
            let arr = [];
            let cheapFlights = this.flights.find(fl => fl.price <= 100);
            if (cheapFlights) {
                for (const flight of this.flights) {
                    if (flight.price <= 100) {
                        arr.push(flight.flightNumber);
                    }
                }
                buff += `Cheap bookings:\n`
                for (const person of this.bookings) {
                    if (arr.includes(person.flightNumber)) {
                        buff += `${person.passengerName} booked for flight ${person.flightNumber}.\n`
                    }
                }
            } else {
                return `No cheap bookings found.`
            }
        }


        if (criteria === "expensive") {
            let arr = [];
            let cheapFlights = this.flights.find(fl => fl.price > 100);
            if (cheapFlights) {
                for (const flight of this.flights) {
                    if (flight.price > 100) {
                        arr.push(flight.flightNumber);
                    }
                }
                buff += `Expensive bookings:\n`
                for (const person of this.bookings) {
                    if (arr.includes(person.flightNumber)) {
                        buff += `${person.passengerName} booked for flight ${person.flightNumber}.\n`
                    }
                }
            } else {
                return `No expensive bookings found.`
            }
        }

        return buff.trim();


    }



}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
