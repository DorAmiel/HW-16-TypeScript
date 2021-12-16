//EX1
var person = [{
        firstName: "Moshe",
        lastName: "Cohen",
        age: 28,
        adress: "Beit Hakerem 13"
    }, {
        firstName: "David",
        lastName: "Levi",
        age: 44,
        adress: "Beit Hanatziv 13"
    }];
console.log(person);
//EX1
//EX2
var setRandomNumbers = function (min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
};
var setArray = function (size) {
    var newArray = [];
    for (var i = 0; i < size; i++) {
        newArray.push(setRandomNumbers(100, 200));
    }
    return newArray;
};
var showArray = function () {
    var size = +prompt("Enter Array Size:");
    console.log(setArray(size));
};
//EX2
//EX3
var Colors;
(function (Colors) {
    Colors[Colors["Blue"] = 0] = "Blue";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Black"] = 2] = "Black";
    Colors[Colors["Yellow"] = 3] = "Yellow";
    Colors[Colors["White"] = 4] = "White";
})(Colors || (Colors = {}));
var runPropmt = function () {
    printColorItem(Colors.Red);
};
var printColorItem = function (x) {
    console.log(x);
    switch (x) {
        case 0:
            alert("Sky");
            break;
        case 1:
            alert("Apple");
            break;
        case 2:
            alert("Board");
            break;
        case 3:
            alert("Banana");
            break;
        case 4:
            alert("Snow");
            break;
    }
};
//EX3
