
//დავალება პირველი


let array = [5, 25, 89, 120, 36];

array.push('javascript','python')
array.unshift('html', 'css')

console.log(array.length)

array.shift()
array.pop()

console.log(array)



//მე-2 დავალება

let array2 = ['ფორთხოხალი', 'ბანანი', 'მსხალი'];

console.log(array2.length);

array2.push('ვაშლი', 'ანანასი');
//console.log(newArray2);

array2.unshift('საზამთრო');
//console.log(newArray2);

console.log(array2.length);

array2.splice(2,0, 'მანგო');
//console.log(newArray2);


let newArray2 = array2.slice(1,6)
//console.log(newArray2);

console.log(newArray2.length);



//მე-3 დავალება

let numbers = [12, 25, 3, 6, 8, 14, 7, 23];

let newNumbers = numbers.map(function(item){
    return item / 3
})

console.log(newNumbers)

//ეს ეროუფანქშენით

let numbers2 = [12, 25, 3, 6, 8, 14, 7, 23];

let newNumbers2 = numbers2.map(item => item / 3)

console.log(newNumbers2)


//დავალება 4

let array3 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newArray3 = array3.filter(i => typeof i === "number")

console.log(newArray3)



//დავალება 5 

let languages = ['html', 'css', 'javascript', 'python','php'];

let newLanguages = languages.filter(item => item.length > 3)

console.log(newLanguages)



//დავალება 6 

let arrayArray= ['academy', 'of', 'digital', 'industries'].reduce(function(a,b){
    return a  + ' ' +  b;
},
[]
)

console.log(arrayArray)


//დავალება 7 ვერ მოვასწარი , დავწერ აუცილებლად

//დავალება 8

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let newWords = words.filter(x => x.includes('m') || x.includes('M'))

console.log(newWords);



