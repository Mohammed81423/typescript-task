function identity<T>(array:T[]):T[]{
    return array.reverse()

}
const number=[1,2,3,4,5,6,7,8,9,10]
const reverseOfArray=identity(number)
console.log(reverseOfArray)

// second question 
function union( anyValue:number|string){
    if( typeof anyValue === 'string'){
        console.log('hello i am string')
}else if(typeof anyValue ==='number'){
    console.log('hello i am a number')
}else{
    console.log('invalid input')

}
}
union ('hello')
union (2)

// third question 

// function either(array:string[],num:number[]):any{
//     return `concatenated of string and number is ${array[]+num[]}`
// }
// const valueString:string[]=['hello','world','learning','typescript']
// const valueNum:number[]=[1,2,3,4,5]
// const combineVal=either(valueString[],valueNum[])
function combineNumAndString(num: number[], str: string[]) {
    const concatenatedResult = num.reduce((result, num) => result + num, '') + str.join('');
    return concatenatedResult;
}


let num: number[] = [42, 3, 2, 4];
let str: string[] = ["is","the","answer."];
let result: string = combineNumAndString(num, str);

// console.log(result);


// fourth question 

interface person{
    name:string;
    age:number;
}
interface worker{
    job:string;
    salary:number
}
type combineResult=person & worker
const Combine:combineResult={
    name:'Mohammed',
    age:23,
    job:'developer',
    salary:50000
}
console.log(Combine.name)
console.log(Combine.age)
console.log(Combine.job)
console.log(Combine.salary)

// 5th question 
type bothDetail=person & worker  

function twoPara(bothDetail:bothDetail  ){
    console.log(`name:${bothDetail.name}`)
    console.log(`age:${bothDetail.age}`)
    console.log(`job:${bothDetail.job}`)
    console.log(`salary:${bothDetail.salary}`)
}
const personDetail:person={
    name:'khan',
    age:23
}
const workerDetail:worker={
    job:'developer',
    salary:50000
}
// console.log(twoPara({...personDetail ,...workerDetail}));

// sixth question
 
function Strick(input: string | number): any {
    if (typeof input === 'string') {
      return console.log(input.toLocaleUpperCase())
    } else {
    //   console.log('invalid string');
    return input
     
      
    }
  }
  
 Strick('hello')       // Outputs: invalid string, then undefined

//  seventh question 
function stringAndNumber(value:string|number):any{
        

    if(typeof value ==='string'){
          
        return value.length;

    }
    if(typeof value==='number'){

        return value**value;
        
    }
}
let strAndNum = stringAndNumber(3)
let strAndNum1 =stringAndNumber('This is string length')

console.log(strAndNum)

console.log(strAndNum1)

  