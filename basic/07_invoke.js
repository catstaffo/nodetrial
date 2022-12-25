const num1 = 5;
const num2 = 10;

function addValues(){
    console.log('the sum is: ' + (num1 + num2));
}

addValues();

/* if we have a function inside of a module like this
then it will run even if not assigned to variable:
all that needs to be done is for app
that requires this module to be run */
