import { NgModule, ModuleWithProviders} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
import { CountryPipe } from './country.pipe';
import { CountryService } from './country.service';
import { NgxPhoneNumberMatSearchComponent } from './ngx-phone-number-mat-search.component';
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [
    NgxPhoneNumberMatSearchComponent,
    OnlyNumberDirective,
    CountryPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule
  ],
  exports: [
    NgxPhoneNumberMatSearchComponent,
    CountryPipe
  ],
  providers: [CountryService]
})
export class NgxPhoneNumberMatSearchModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: NgxPhoneNumberMatSearchModule,
      providers: [CountryService]
    };
  }
}
