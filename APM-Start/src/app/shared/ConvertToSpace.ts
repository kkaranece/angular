import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpace',
})
export class ConvertToSpace implements PipeTransform{
    
    transform(value: string, toBeConvert: string) : string{
        return value.replace(toBeConvert,' ');
    }

}