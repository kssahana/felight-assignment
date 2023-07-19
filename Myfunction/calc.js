//------- Even number----------//
export let isEven = (num) => num % 2 == 0;

//--------Prime number--------//
export let prime = (num) => num % 2 != 0;

//------- divisible of six-------//
export let divideBy6 = (num) => num / 6 == 0;

//---------divisible of two---------//
export let divideBy2 = (num) => num / 2 == 0;

//--------- odd number--------//
export let isOdd = (num1, num2) => {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 != 0)
            return i;
    }
}

//--------isDigit-------//


//------- Time--------//
export let time = (seconds) => seconds / 3600;

//------change character case -----------//
export let changeCharCase = (name) => name.toUpperCase;


