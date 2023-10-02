// Function to calculate area
function area(x, y) {

    return Math.abs(this.x * this.y);

};


// Function to calculate volume
function vol(x, y, z) {

    return Math.abs(this.x * this.y * this.z);

};



// My Function, which accepts both area and vol functions and a json of objects
function solve(area, vol, string) {
    // Parse JSON
    let parsedJson = JSON.parse(string);

    let resultArr = [];

    // For every obj calculate area and vol and push result obj in Array
    for (const obj of parsedJson) {
        let calculatedArea = area.call(obj);
        let calculatedVol = vol.call(obj);

        resultArr.push({ area: calculatedArea, volume: calculatedVol });
    }
    return resultArr;
}





solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)
