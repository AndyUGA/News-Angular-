import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name : 'RemoveLastHyphen'})
export class RemoveLastHyphen implements PipeTransform 
{
    transform(value: string) {
        let lastHyphenPosition = value.lastIndexOf("-");
        let modifiedTitle = value.substring(0,lastHyphenPosition);
        
        return modifiedTitle;
    }
}