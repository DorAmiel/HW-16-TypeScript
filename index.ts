//EX1

var person: object= [{
    firstName: "Moshe",
    lastName: "Cohen",
    age: 28,
    adress: "Beit Hakerem 13"
},{
    firstName: "David",
    lastName: "Levi",
    age: 44,
    adress: "Beit Hanatziv 13"
}]

console.log(person)

//EX1

//EX2



const setRandomNumbers =(min, max)=>{
    return (Math.floor(Math.random() * (max - min) ) + min) 
}

const setArray = (size)=>{
let newArray = []
    for(let i = 0 ; i< size ; i++){ 
        newArray.push(setRandomNumbers(100,200))
    }
    return newArray
}

const showArray = ()=>{
    let size:number = +prompt("Enter Array Size:")   
    console.log(setArray(size))
}



//EX2

//EX3

enum Colors {Blue, Red, Black, Yellow, White}

const runPropmt =()=>{
        printColorItem(Colors.Red)
}

const printColorItem = (x:Colors)=>{
    console.log(x)
switch(x){
    case 0:
        alert("Sky")
        break;
    case 1:
        alert("Apple")
        break;
    case 2:
        alert("Board")
        break;
    case 3:
        alert("Banana")
        break;
    case 4:
        alert("Snow")
        break;
}
}

//EX3
