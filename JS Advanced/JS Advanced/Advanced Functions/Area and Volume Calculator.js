function area(x, y) {

    return Math.abs(this.x * this.y);

};

function vol(x, y, z) {

    return Math.abs(this.x * this.y * this.z);

};








solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)
