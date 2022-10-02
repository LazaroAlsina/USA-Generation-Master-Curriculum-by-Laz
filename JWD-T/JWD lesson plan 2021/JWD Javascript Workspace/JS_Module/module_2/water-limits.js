// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

const converters = require('./converters');

const freezingPointC = 0;
const boilingPointC = 100;

// const freezingPointF = celsiusToFahrenheit(freezingPointC);
// const boilingPointF = celsiusToFahrenheit(boilingPointC);

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);



// console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
// console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

//hidding the solution
// module.exports.freezingPf = freezingPointF;
// module.exports.boillingPf = boilingPointF;