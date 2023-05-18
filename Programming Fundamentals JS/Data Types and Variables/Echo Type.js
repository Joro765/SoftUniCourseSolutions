function echoType(param) {

    if (typeof (param) === "number" || typeof (param) === "string") {
        console.log(typeof (param));
        console.log(param);
    } else {
        console.log(typeof (param));
        console.log("Parameter is not suitable for printing");
    }

}

echoType(18)