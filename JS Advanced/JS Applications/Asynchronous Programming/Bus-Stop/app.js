async function getInfo() {
    const stopIdRef = document.getElementById("stopId");

    const stopNameRef = document.getElementById("stopName");
    const ulRef = document.getElementById("buses");

    if (stopIdRef == "" || stopIdRef.value.includes(" ")) {
        stopNameRef.textContent = "Error";
        ulRef.textContent = "";
        stopIdRef.value = "";
    }

    // Ако инпутът е коректен взимаме линка на еднпойнта.
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdRef.value}`;
    stopIdRef.textContent = "";


    // TRY CATCH блок се ползва за AWAIT 
    try {
        const response = await fetch(url);  // респонс
        const data = await response.json(); // боди

        let stopName = data.name;

        stopNameRef.textContent = stopName;
        for (let [bus, time] of Object.entries(data.buses)) {
            let li = document.createElement("li");
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            ulRef.appendChild(li);
        }

        stopIdRef.value = "";
    }
    catch {
        stopNameRef.textContent = "Error";
        ulRef.textContent = "";
        stopIdRef.value = "";
    }

}


