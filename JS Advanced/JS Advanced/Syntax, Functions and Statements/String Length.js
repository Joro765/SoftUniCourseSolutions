function stringLength(a, b, c) {

    let totalLength = 0;

    totalLength += a.length + b.length + c.length;

    let averageLength = Math.floor(totalLength / 3)

    console.log(totalLength);
    console.log(averageLength);

}


stringLength('chocolate', 'ice cream', 'cake')