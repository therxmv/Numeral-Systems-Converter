for(let i = 2; i <= 9; i++){
    converter(31, i);
}

function converter(number, system){
    let num = [],
        temp = number;

    while(temp / system > 0){
        num.unshift(temp % system);
        temp = Math.floor(temp / system);
    }

    console.log(`${system}: ${num.join('')}`);
}