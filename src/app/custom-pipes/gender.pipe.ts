import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'genderPipe'
})

export class GenderPipe implements PipeTransform {
    transform(value: any, gender: string): string {
        if (gender.toLowerCase() == "male")
            return "Mr." + value;
        else
            return "Miss." + value;
    }
}