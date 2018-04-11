import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClipboardModule } from 'ngx-clipboard';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';
import { TextGeneratorComponent } from './components/text-generator/text-generator.component';
import {TextService} from './text.service';


@NgModule({
    declarations: [
        AppComponent,
        PassGeneratorComponent,
        TextGeneratorComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        ClipboardModule
    ],
    providers: [TextService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
