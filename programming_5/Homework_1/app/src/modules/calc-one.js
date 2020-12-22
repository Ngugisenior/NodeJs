// we are importing the calc sibling
import {calcTwo} from "./calc";

export default class CalcOne{

    // just to show you, that the object
    // created only once
    constructor(){
        console.log('create calc one');
    }

    /**
     * @param {number} num 
     */
    calc(num){
        console.log('add');
        num += Math.PI;
        if(num>300) return num;
        return calcTwo.calc(num);
    }
}