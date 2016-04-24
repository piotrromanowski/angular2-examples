import { Pipe, PipeTransform } from 'angular2/core'

@Pipe({
    name: 'summary'
})
export class Summary implements PipeTransform {
    transform(value: string, args: string[]) {
        let length : number = args[0] ? Number(args[0]): 30;
        if (value && value.length >  length)
            return value.substr(0, length) + "..."
        return value;
    }
}