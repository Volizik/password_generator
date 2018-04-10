import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class MaterialModule {
}