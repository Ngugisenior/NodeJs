// import from a module, that exports multiple elements
// we are importing "calcOne" object as "calc"
import {calcOne as calc} from "./modules/calc";

// start the calculation
console.log(calc.calc(1));