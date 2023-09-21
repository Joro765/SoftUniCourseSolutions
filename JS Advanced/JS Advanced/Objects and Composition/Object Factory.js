function solve(library, orders) {

    let result = [];

    for (let { template, parts } of orders) {
        let order = Object.assign({}, template);

        for (let part of parts) {
            let func = library[part];
            order[part] = func;
        }

        result.push(order)
    }
    return result;
}


solve()