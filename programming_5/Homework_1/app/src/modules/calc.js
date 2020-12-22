// we are importing both of the calculator classes
import CalcOne from "./calc-one";
import CalcTwo from "./calc-two";

// there will be one instance for both of tham
let calcOne = new CalcOne();
let calcTwo = new CalcTwo();

// we are exporting the objects
// when you import from here, there will be only
// one of tham created, regardless how many 
// times you import these objects
export {calcOne, calcTwo};