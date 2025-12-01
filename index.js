/** @format */

/* 

let nameRel = 12;
let beenBan = 16;
let banBan = 25;
let meMan = 1;

if (nameRel >= banBan || beenBan <= banBan) {
  console.log("this is the end");
} else {
  console.log("find me below");
}

let myName = "salisu Zubairu";

let answer = myName.length;

console.log(answer);

let firstN = "salisu";
let firstS = 43;

let joiningM = `hello ${firstN}`;

console.log(joiningM);

let studentName = "salama";
let studentScore = 21;

let fuulDet = `Hey ${studentName}, your score is ${studentScore}`;

console.log(fuulDet);


*/

/*


const carDetail = {
  carName: `sazon`,
  carNumber: 123232,
  carColor: `red`,
  other: [`assd`, 1234, `1212`],
  brinOb: { asad: `sani`, qaza: 2323, waza: 2313 },
  carMeen: `salis`,
};

console.log(carDetail);

let carame = carDetail.carName;

console.log(carame);

let mycolor = carDetail["carColor"];

console.log(mycolor);

carDetail.vinNuber = "123asa3232";

Object.freeze(carDetail);

delete carDetail.carName;

Object.seal()


*/

/*

function salisu(firstPrice, secondPrice) {
  let myCal = firstPrice - secondPrice;
  console.log(myCal);
}

salisu(5, 2);

salisu(2, 5);

function scoreStudent(studentName, studenScore) {
  let studentReport = `hello ${studentName}, your score is ${studenScore}`;
  console.log(studentReport);
}

scoreStudent("sani", 21);

scoreStudent("auwal", 28);

function myPeople(leftPeople, rightPeople) {
  let dPeople = `hey ${leftPeople}, you are losing to ${rightPeople}`;
  return dPeople;
}

let forAhmed = myPeople("anas", "musa");
console.log(forAhmed);

function aveNumber(num1, num2, num3, num4) {
  let dAve = (num1 + num2 + num3 + num4) / 4;
  return dAve;
}

let myAnswer = aveNumber(5, 32, 43, 54);

console.log(myAnswer);


*/

let firstName = 22;
let secondName = 21;

firstName >= secondName
  ? console.log("you are doing great")
  : console.log("find a way out");

const myCar = {
  model: "casano",
  namecar: "hyaudai",
  labelCar: 123232,
};

let { model } = myCar;

console.log(model);

const truck = {
  nametruck: "my car",
  model: "DAF",
  colortruck: "block",
  milage: 5000,
  myList: ["men", "women", "alen"],
  roadworthy: function () {
    let value = 10000 - this.milage;
    let worhtResult = value > 5000 ? "this is get bad" : "this is getting good";
    return worhtResult;
  },

  myObj: {
    karin: "ale",
    karon: "aloo",
    krin: 2,
  },
};

//let finals = truck.roadworthy();
const { roadworthy } = truck;
console.log(roadworthy());

let finals1 = truck.myList;
console.log(finals1[1]);

const {
  myObj: { karon },
} = truck;

console.log(karon);

const house = {
  door: 5,
  tv: 7,
  young: "brooo",
  children: {
    sanas: 2,
    sani: 4,
    auwal: 2,
  },

  numbers: function () {
    let sum = this.tv - this.door;
    let argu = sum > 5 ? "keep going forward" : "thats enough";
    return argu;
  },
  myLin: [1, 2, 3, 4, 2],
};

// let out = house.numbers();
// console.log(out);

const { numbers } = house;
console.log(numbers());

const myFuntion = () => {
  console.log("my first arrow function");
};

myFuntion();

const textF = (lap) => {
  return `my name is ${lap}`;
};

console.log(textF("anas"));

const ifStay = (a, b) => (a > b ? `yes ${a}` : `no ${b}`);

console.log(ifStay(4, 6));

const dArray = ["ali", "alsi", "alai", "alei", "ferid", 342];
const secArray = ["sad", "fere", "was"];
const aCon = dArray.concat(secArray);
const dText = dArray.join("");
const aner = dArray.slice(1, -2);
const deman = dArray.splice(2, 3);

console.log(aCon);
console.log(aner);
console.log(deman);
console.log(dArray);
console.log(dText);

for (let x = 0; x < 3; x++) {
  let anSi = dArray[x];
  console.log(anSi);
}

/*
const sTawo = dArray.length;
const sTawo2 = house.length;

console.log(dArray);
console.log(sTawo);
console.log(sTawo2);

*/

const myNum = [2, 3, 5, 64, 6, 9, 8];
const myNum2 = [];

for (let x = 0; x < 7; x++) {
  const myOut = myNum[x] * 3;
  myNum2.push(myOut);
  console.log(myOut);
}

console.log(myNum2);

const maket = ["sal", "wal", "mole", "win"];

for (let i = 0; i < 4; i++) {
  const thOut = maket[i] + " jss3";
  console.log(thOut);
}

const forObjj = [
  {
    door: 5,
    tv: 7,
    young: "brooo",
    children: {
      sanas: 2,
      sani: 4,
      auwal: 2,
    },
  },

  {
    door: 8,
    tv: 2,
    young: "bron",
    children: {
      sanas: 2,
      sani: 4,
      auwal: 2,
    },
  },
  {
    door: 9,
    tv: 3,
    young: "brasa",
    children: {
      sanas: 2,
      sani: 4,
      auwal: 2,
    },
  },

  {
    door: 21,
    tv: 17,
    young: "vorn",
    children: {
      sanas: 2,
      sani: 4,
      auwal: 2,
    },
  },
];

/*
for (x = 0; x < 4; x++) {
  const myline = forObjj[x];
  console.log(myline.door);
}*/

forObjj.forEach((item) => {});
