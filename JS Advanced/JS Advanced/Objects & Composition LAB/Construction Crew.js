function checkWorker(worker) {

    if (worker.dizziness === false) {
        return worker;
    } else {
        let years = worker.experience;
        let kg = worker.weight;

        let waterNeeded = (years * 0.100) * kg;

        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
        return worker;
    }


}



checkWorker({
    weight: 120,

    experience: 20,

    levelOfHydrated: 200,

    dizziness: true
})