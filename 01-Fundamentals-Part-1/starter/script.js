// const country = 'Viet Nam';
// const continent = 'Asia';
// let population = '13';
// const isIsland = false;
// let language;
// console.log(typeof country, typeof continent, typeof population, typeof isIsland, typeof language);
// language = 'Vietnamese';
// console.log(population+1);
// let description;
// description = country + "is in " + continent + ", and its" + population + " people speak " + language;
// console.log(description);

// CODING CHALLENGE #1
// let massMark, 
//     heightMark, 
//     massJohn, 
//     heightJohn;
// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / heightJohn ** 2;
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// description =  `${country} is in ${continent}, and its ${population} people speak ${language}`;
// console.log(description);

// if (population>33) {
//     console.log(`${country}'s population is above average`);
// }
// else {
//     console.log(`${country}'s population is ${33-population} below average`);
// }

// console.log('9' - '5',
// '19' - '13' + '17',
// '19' - '13' + 17,
// '123' < 57,
// 5 + 6 + '4' + 9 - 4 - 2);

// const numNeigbors = prompt('How many neighbour countries does your country have?');
// if (numNeigbors === 1) {
//     console.log('Only 1 border');
// }
// else if (numNeigbors>1) {
//     console.log('More than 1 border');
// }
// else {
//     console.log('No borders');
// }

// CODING CHALLANGE #3
// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas =(88+91+110)/3;

// if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }
// else {
//     console.log(`${scoreDolphins>scoreKoalas?"Dolphins":"Koalas"} win the trophy`);
// }

// CODING CHALLENGE #4
// const tip = bill*((bill>50 && bill<300)?0.15:0.2);
// console.log(`he bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);

// calcTip = (bill) => (bill>=50 && bill<=300)?0.15:0.2;
// bills = [125, 555, 44];
// tips = [];
// for (let i = 0; i < 3; i++) {
//     tips.push(calcTip(bills[i]));
// }
// console.log(tips);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI= this.mass/(this.height*this.height);
        return this.BMI;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI= this.mass/(this.height*this.height);
        return this.BMI;
    },
};

john.calcBMI();
mark.calcBMI();

const higher = (mark.BMI>john.BMI)?mark:john;
const lower = (mark.BMI<john.BMI)?mark:john;
console.log(`${higher.fullName}'s BMI (${higher.BMI}) is higher than ${lower.fullName}'s BMI (${lower.BMI}`);