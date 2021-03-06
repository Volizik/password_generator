import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pass-generator',
    templateUrl: './pass-generator.component.html',
    styleUrls: ['./pass-generator.component.sass']
})
export class PassGeneratorComponent implements OnInit {
    passArr: Array<any> = [];
    passLength = 8;
    passAmount = 1;
    numbers = true;
    lowerCase = false;
    upperCase = false;
    symbols = false;
    numbersChars = '0123456789';
    lowerLetterChars = 'qwertyuiopasdfghjklzxcvbnm';
    upperLetterChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    symbolsChars = '!@$%^&*()_+=-\'\\|?><,.[]{}:;/';
    value = '';

    constructor() {
    }

    ngOnInit() {
    }

    randomFunc(number: number): string {
        return String(Math.floor(Math.random() * number));
    }

    showPass() {
        this.passArr = [];
        for (let i = 0; i < this.passAmount; i++) {
            this.generatePass();
        }
    }

    generatePass() {
        this.value = '';
        let passString = '';

        if (this.numbers) {
            passString += this.numbersChars;
        }
        if (this.lowerCase) {
            passString += this.lowerLetterChars;
        }
        if (this.upperCase) {
            passString += this.upperLetterChars;
        }
        if (this.symbols) {
            passString += this.symbolsChars;
        }
        const arr = passString.split('');

        for (let i = 0; i < this.passLength; i++) {
            this.value += arr[this.randomFunc(passString.length)];
        }
        this.passArr.push(this.value);
    }
}
