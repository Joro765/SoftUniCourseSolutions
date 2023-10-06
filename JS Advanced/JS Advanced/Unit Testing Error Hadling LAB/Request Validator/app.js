function requestValidator(obj) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    let uriPattern = /^[A-Za-z0-9.]+/gm;
    let messagePattern = /^[-%:* .\/\]?[\w]+[-/]?/gm;

    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method")
    }

    if (obj.uri !== "*") {
        if (!obj.uri || !uriPattern.test(obj.uri)) {
            throw new Error("Invalid request header: Invalid URI")
        }
    }


    if (!obj.version || !validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version")
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message")
    }

    if (obj.message.length > 0) {
        if (!messagePattern.test(obj.message)) {
            throw new Error("Invalid request header: Invalid Message")
        }
    }


    return obj;


}


console.log(requestValidator({

    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',
    message: ''

}))