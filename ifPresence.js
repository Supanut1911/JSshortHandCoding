let x = 10
let y = null
let z = undefined
let a = "astronut"
let b = [1,2,3,4,5]
let c = ["Ant", "Bird", "Cat"]
let d = {
    message: "helloWorld"
}

let longhand = (x) => {
    if(x == null) {
        console.log('longhand: x is nothing(null)');
    } else if (x == undefined) {
        console.log('longhand: x is nothing(undefined)');
    } else {
        console.log('longhand: x is exsit');
    }
}

let shorthand = (x) => {
    if(x) {
        console.log('shorthand: x is exsit');
    } else {
        console.log('shorthand: x is nothing');
    }
}

longhand(y)
shorthand(y)