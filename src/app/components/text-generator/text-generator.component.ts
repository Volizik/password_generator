import {Component, OnInit} from '@angular/core';
import {TextService} from '../../text.service';

@Component({
    selector: 'app-text-generator',
    templateUrl: './text-generator.component.html',
    styleUrls: ['./text-generator.component.sass']
})
export class TextGeneratorComponent implements OnInit {
    upperCase = false;
    textLength: number;
    textLengthInput;
    text = '';


    constructor( private textService: TextService) {
    }

    ngOnInit() {
    }

    calculateTextLength(textLength) {
        const arr = [];
        const fullText = this.textService.getText().split(' ');
        let _i = 0;
        for (let i = 0; i < textLength; i++) {
            if (_i < fullText.length) {
                arr.push(fullText[_i]);
                _i++;
            } else {
                _i = 0;
            }
        }
        this.text = arr.join(' ');
    }

    showText() {
        this.calculateTextLength(this.textLength);
    }


}
