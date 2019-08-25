import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name : 'Reduce'})
export class Reduce implements PipeTransform 
{
    transform(value: string) {
     

        let lastHyphenPosition = value.lastIndexOf("-");
        console.log("lastHyphenPosition is " + lastHyphenPosition);
        let modifiedTitle = value.substring(0,lastHyphenPosition);
        console.log("modifiedTitle is " + modifiedTitle);
        return modifiedTitle;
    }
}