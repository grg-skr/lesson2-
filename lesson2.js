//დავალება 1
//  შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი 
// რიცხვების ჯამს: 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;


function sumNumbers (...args) {
    let sum = 0;

    for(let i of args){
        if (i>0){
            sum += i;
        }
    }

    console.log(sum)
}

sumNumbers (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)



//დავალება 2
//ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9


function sumAllNumbers(...argsnumbers) {
    let numberSum = 0;

    for (let x of argsnumbers) {
        numberSum += x;
    }
    return numberSum;
}

let result = sumAllNumbers (10, 50, 6, 7, 8, 11, 6, 3, 9)

console.log(result)


//დავალება3
// შექმენით ფუნქცია სახელად printname რომელსაც პარამეტრად გადაეცემა ობიექტი. ობიექტს ექნება შემდეგი ფორმა
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და 
//false თუ isloggedin ფროფერთი არის false;
  


function printname() {

    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: 'true',
        //isloggedin: 'false'
        }

        if (user.isloggedin == 'true') {
            return (user.firstname  +user.lastname);
        }
        else{
            return 'false';
        }
    
}

let result2 = printname();
console.log(result2);



//დავალება 4
//შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

  
let array = [50, 120, 400, 500, 800, 888, 900, 992, 998,1200];

array.forEach(y => {
    if(y > 1000){
        console.log(y)
    }    
});


//აქ კითხვა არ დაგავიწყდეს . შეიძლება თუ არა რაიმე კოდი უნიკალურად დაიწეროს, იფში კონკრეტული ციფრის დაწერა რომ არ მომიწიოს 