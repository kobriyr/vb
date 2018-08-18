import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item) {
      const query = [];
      query.push(item.author);
      query.push(item.title);
      query.push(item.key_words);
      query.push(item.sumary);
      query.push(item.summary_en);

      return JSON.stringify(query).toLowerCase().includes(args);
    });
  }

}
