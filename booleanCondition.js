
let noobfunc = (value_1, value_2) => {
    let result
    if(value_1 == true && value_2 == true) {
        result = true
    } else if (value_1 == true && value_2 == false) {
        result = false
    } else if (value_1 == false && value_2 == true) {
        result = false
    } else if (value_1 == false && value_2 == false) {
        result = true
    }

    // if(result == true) {
    //     result = true
    // } else if (result == false) {
    //     result = false
    // }
    return result
}


let kingfunc = (value_1, value_2) => {
    return value_1 == value_2
}

console.log('noobfunc', noobfunc(true, false));

console.log('kingfunc', kingfunc(true, false));




