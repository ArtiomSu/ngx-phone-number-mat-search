import { NgModule, ModuleWithProviders} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
//import { CountryService } from './country.service';
import { NgxPhoneNumberMatSearchComponent } from './ngx-phone-number-mat-search.component';
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: (Provider | EnvironmentProviders)[];
  }
}

@NgModule({
  declarations: [
    NgxPhoneNumberMatSearchComponent,
    OnlyNumberDirective
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
    NgxPhoneNumberMatSearchComponent
  ],
  //providers: [CountryService]
})
export class NgxPhoneNumberMatSearchModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: NgxPhoneNumberMatSearchModule,
      //providers: [CountryService]
    };
  }
}
