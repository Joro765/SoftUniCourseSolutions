function solve() {

    const infoRef = document.getElementsByClassName("info")[0];
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const baseUrl = `http://localhost:3030/jsonstore/bus/schedule/`;
    let currentStop = "depot"
    let currentStopName;



    async function depart() {
        let response = await fetch(baseUrl + currentStop);
        let data = await response.json();
        infoRef.textContent = `Next stop ${data.name}`;
        currentStopName = data.name;
        currentStop = data.next;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoRef.textContent = `Arriving at ${currentStopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();