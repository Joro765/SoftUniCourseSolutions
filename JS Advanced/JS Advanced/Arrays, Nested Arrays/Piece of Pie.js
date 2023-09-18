function solve(arr, startElement, endElement) {


    let firstIndex = arr.indexOf(startElement);
    let lastIndex = arr.indexOf(endElement);

    let resultArray = arr.slice(firstIndex, lastIndex + 1);

    return resultArray


}


solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')