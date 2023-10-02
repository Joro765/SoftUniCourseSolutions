function area(x, y) {

    return Math.abs(this.x * this.y);

};

function vol(x, y, z) {

    return Math.abs(this.x * this.y * this.z);

};



function solve(area, vol, input) {
    let arrayObjects = JSON.parse(input);
    let output = [];

    arrayObjects.forEach(obj => {
        let areaResult = area.apply(obj);
        let volResult = vol.apply(obj);

        let resObj = {
            area: areaResult,
            volume: volResult
        }

        output.push(resObj);

    });
    return output
}




solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)
