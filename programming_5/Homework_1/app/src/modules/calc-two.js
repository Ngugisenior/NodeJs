// we are importing the calc sibling
import {calcOne} from "./calc";

export default class CalcTwo{

    // just to show you, that the object
    // created only once
    constructor(){ 
        console.log('create calc two');
    }

    /**
     * @param {number} num 
     */
    calc(num){
        console.log('multiply');
        num *= Math.PI;
        if(num>300) return num;
        return calcOne.calc(num);
    }
}