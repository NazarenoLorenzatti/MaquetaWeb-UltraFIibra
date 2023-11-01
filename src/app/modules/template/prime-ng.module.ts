import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    CarouselModule,
    InfiniteScrollModule,
 ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    CarouselModule,
    InfiniteScrollModule
  ]
})
export class PrimeNgModule { }
