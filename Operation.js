// if a number is prime
function checkprime(num) {
    let i = 0;
    flag = true;
    if (num <= 1) {
        flag = false;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
        }
    }
    if (flag == true) {
        console.log("Prime Number " + num);
    }
    else {
        console.log("Not a Prime Number " + num);
    }
}
checkprime(28);
// prime number till 100
let e = 100;
while (e < 600) {
    checkprime(e);
    e = e + 1;
}
// fibonacci series
let b = 20;
let next = 0;
let n1 = 0;
let n2 = 1;

for (i = 0; i < b; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
// area of triangle

function areat(ba, he) {
    area = 0.5*ba*he;
    console.log("Area is " +area);
}
 areat( 20,22);
//  Reverse a number
let a=0,c=0;
function rev(um)
{
    if(um>0)
    {
        a=um%10;
        c=c*10+a;
        um=um/10;
    }
    console.log(c);
}
rev(344);