import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'titleIt'
})
export class CapitalizeIt implements PipeTransform {

    public static skipWords = ['a', 'is', 'of', 'an', 'then', 'in', 'or', 'the', 'for'];

    transform(value: string, processOrAlternateWords?: boolean | string[]): string {

        if (typeof value !== 'string') {
            return value;
        }

        value = value.toLowerCase();
        value = value.trim();

        return value.replace(/\w[^-\s]+/g, function (word, index) {

            let newWord = word[0].toUpperCase() + word.substring(1);
            const skippedWords = Array.isArray(processOrAlternateWords)
                ? processOrAlternateWords
                : CapitalizeIt.skipWords;

            if (processOrAlternateWords) {
                if (index === 0 || !skippedWords.includes(word)) {
                    newWord = word[0].toUpperCase() + word.substring(1);
                } else {
                    newWord = word;
                }
            }
            return newWord;
        });
    }

}
