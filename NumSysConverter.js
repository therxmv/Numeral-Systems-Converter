function converter(number, system){
    let num = [],
        temp = number,
        result = {};

    while(temp / system > 0){
        num.unshift(temp % system);
        temp = Math.floor(temp / system);
    }

    result[system] = num.join('');
    return result;
}