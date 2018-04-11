import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        MatTooltipModule
    ],
    exports: [
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        MatTooltipModule
    ]
})
export class MaterialModule {
}
