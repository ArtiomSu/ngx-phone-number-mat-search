import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  // FormControl,
  // Validator,
  // ValidationErrors,
  // NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
//import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Country } from './country.model';
//import { CountryService } from './country.service';
import COUNTRY_PHONE_DATA from './country-codes';
//const COUNTRY_PHONE_DATA = require('./country-codes');

const PLUS = '+';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxPhoneNumberMatSearchComponent),
  multi: true
};

// const VALIDATOR = {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => NgxPhoneNumberMatSearchComponent),
//   multi: true
// };


@Component({
  selector: 'ngx-phone-number-mat-search',
  templateUrl: './ngx-phone-number-mat-search.component.html',
  styleUrls: ['./ngx-phone-number-mat-search.component.scss', './assets/css/flags2.css'],
  host: {
    '(document:click)': 'hideDropdown($event)'
  },
  // providers: [COUNTER_CONTROL_ACCESSOR, VALIDATOR]
  providers: [COUNTER_CONTROL_ACCESSOR]
})
// export class NgxPhoneNumberMatSearchComponent implements OnInit, ControlValueAccessor, Validator {
export class NgxPhoneNumberMatSearchComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder = 'Enter phone number'; // default
  @Input() maxlength = 15; // default

  @Input() defaultCountry: string = '';
  @Input() required: boolean = true;
  @Input() allowDropdown = true;
  @Input() type = 'tel';
// @ts-ignore
  @Input() allowedCountries: Country[];

  @Output() onCountryCodeChanged: EventEmitter<any> = new EventEmitter();
  @Output() phoneFocused: EventEmitter<any> = new EventEmitter();
  @Output() selectedCountryChanged: EventEmitter<any> = new EventEmitter();

  // ELEMENT REF
  phoneComponent: ElementRef;

  // CONTROL VALUE ACCESSOR FUNCTIONS
  // @ts-ignore
  onTouch: Function;
  // @ts-ignore
  onModelChange: Function;

  countries: Country[] = [];
  allCountries: Country[] = [];
  // selectedCountry: Country | null = {name: '',dialCode: '',countryCode: ''};
  selectedCountry: Country | null = {country_name: '',country_code: '',alpha2: '', alpha3: '', mobile_begin_with: [], phone_number_lengths: []};
  countryFilter: string = '';
  showDropdown = false;
  phoneNumber = '';

  value = '';

  @ViewChild('phoneNumberInput') phoneNumberInput: ElementRef | undefined;
  @ViewChild('phoneNumberSearchInput') phoneNumberSearchInput: ElementRef | undefined;

  /**
   * Util function to check if given text starts with plus sign
   * @param text
   */
  private static startsWithPlus(text: string): boolean {
    return text.startsWith(PLUS);
  }

  /**
   * Reduced the prefixes
   * @param foundPrefixes
   */
  private static reducePrefixes(foundPrefixes: Country[]) {
    const reducedPrefixes = foundPrefixes.reduce((first: Country, second: Country) =>
      // first.dialCode.length > second.dialCode.length ? first : second
      first.country_code.length > second.country_code.length ? first : second
    );
    return reducedPrefixes;
  }

  constructor(
    //private countryService: CountryService,
    phoneComponent: ElementRef
  ) {
    this.phoneComponent = phoneComponent;
  }

  ngOnInit(): void {
    if (this.allowedCountries && this.allowedCountries.length) {
      this.countries = COUNTRY_PHONE_DATA.map(country =>{
        country.alpha2 = country.alpha2.toLowerCase();
        return country;
      }) //this.countryService.getCountriesByISO(this.allowedCountries);
    } else {
      this.countries = COUNTRY_PHONE_DATA.map(country =>{
        country.alpha2 = country.alpha2.toLowerCase();
        return country;
      }) //this.countryService.getCountries();
    }
    this.orderCountriesByName();
    this.allCountries = this.countries;
  }

  /**
   * Opens the country selection dropdown
   */
  displayDropDown() {
    if (this.allowDropdown) {
      this.countries = this.allCountries;
      this.showDropdown = !this.showDropdown;
      this.countryFilter = '';
      setTimeout(()=>{
        this.phoneNumberSearchInput?.nativeElement.focus();
      },10);
    }
  }

  /**
   * Hides the country selection dropdown
   * @param event
   */
  hideDropdown(event: Event) {
    if (!this.phoneComponent.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  /**
   * Sets the selected country code to given country
   * @param event
   * @param countryCode
   */
  updateSelectedCountry(event: Event, countryCode: string) {
    event.preventDefault();
    this.updatePhoneInput(countryCode);
    this.onCountryCodeChanged.emit(countryCode);
    this.updateValue();
    // focus on phone number input field
    // @ts-ignore
    setTimeout(() => this.phoneNumberInput.nativeElement.focus());
  }

  /**
   * Updates the phone number
   * @param event
   */
  updatePhoneNumber(event: Event) {
    if (NgxPhoneNumberMatSearchComponent.startsWithPlus(this.phoneNumber)) {
      this.findPrefix(this.phoneNumber.split(PLUS)[1]);
    } else {
      this.selectedCountry = null;
      this.selectedCountryChanged.emit(this.selectedCountry);
    }

    this.updateValue();
  }

  /**
   * shows the dropdown with keyboard event
   * @param event
   */
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showDropdown) {
      this.countryFilter = `${this.countryFilter}${event.key}`;
    }
  }

  /**
   * @param prefix
   */
  private findPrefix(prefix: string) {
    // @ts-ignore
    let foundPrefixes: Country[] = this.countries.filter((country: Country) =>
      // prefix.startsWith(country.dialCode)
      prefix.startsWith(country.country_code)
    );
    if (foundPrefixes && foundPrefixes.length) {
      this.selectedCountry = NgxPhoneNumberMatSearchComponent.reducePrefixes(foundPrefixes);
      this.selectedCountryChanged.emit(this.selectedCountry);
    } else {
      this.selectedCountry = null;
      this.selectedCountryChanged.emit(this.selectedCountry);
    }
  }

  /**
   * Sort countries by name
   */
  private orderCountriesByName() {
    // @ts-ignore
    // this.countries = this.countries.sort(function (a, b) {
    //   return a['name'] > b['name'] ? 1 : b['name'] > a['name'] ? -1 : 0;
    // });
  }

  /**
   *
   * @param fn
   */
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  /**
   *
   * @param fn
   */
  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  /**
   *
   * @param value
   */
  writeValue(value: string) {
    this.value = value || '';
    this.phoneNumber = this.value;

    if (NgxPhoneNumberMatSearchComponent.startsWithPlus(this.value)) {
      this.findPrefix(this.value.split(PLUS)[1]);
      if (this.selectedCountry) {
        // this.updatePhoneInput(this.selectedCountry.countryCode);
        this.updatePhoneInput(this.selectedCountry.alpha2);
        this.selectedCountryChanged.emit(this.selectedCountry);
      }
    }

    if (this.defaultCountry) {
      this.updatePhoneInput(this.defaultCountry);
    }
  }

  // /**
  //  * Validation
  //  * @param c
  //  */
  // validate(c: FormControl): ValidationErrors | null {
  //   let value = c.value;
  //   // let selectedDialCode = this.getSelectedCountryDialCode();
  //   let validationError: ValidationErrors = {
  //     phoneEmptyError: {
  //       valid: false
  //     }
  //   };

  //   if (this.required && !value) {
  //     // if (value && selectedDialCode)
  //     //     value = value.replace(/\s/g, '').replace(selectedDialCode, '');

  //     // if (!value) return validationError;
  //     return validationError;
  //   }

  //   if (value) {
  //     // validating number using the google's lib phone
  //     try {
  //       let phoneNumber = parsePhoneNumberFromString(value);
  //       // @ts-ignore
  //       let isValidNumber = phoneNumber.isValid();
  //       return isValidNumber ? null : validationError;
  //     } catch (ex) {
  //       return validationError;
  //     }
  //   }
  //   return null;
  // }

  /**
   * Updates the value and trigger changes
   */
  private updateValue() {
    this.value = this.phoneNumber.replace(/ /g, '');
    // @ts-ignore
    this.onModelChange(this.value);
    // @ts-ignore
    this.onTouch();
  }

  /**
   * Updates the input
   * @param countryCode
   */
  private updatePhoneInput(countryCode: string) {
    this.showDropdown = false;
    countryCode = countryCode.toUpperCase();

    let newInputValue = this.phoneNumber;
    if(this.selectedCountry){
      newInputValue = NgxPhoneNumberMatSearchComponent.startsWithPlus(this.phoneNumber)
      ? `${this.phoneNumber
        .split(PLUS)[1]
        .substr(
          // @ts-ignore
          // this.selectedCountry.dialCode.length,
          this.selectedCountry.country_code.length,
          this.phoneNumber.length
        )}`
      : this.phoneNumber;
    }else{
      newInputValue = NgxPhoneNumberMatSearchComponent.startsWithPlus(this.phoneNumber)
      ? this.phoneNumber.replace('+','')
      : this.phoneNumber;
    }

    // @ts-ignore
    this.selectedCountry = this.countries.find(
      // (country: Country) => country.countryCode === countryCode
      (country: Country) => country.alpha2.toLowerCase() === countryCode.toLowerCase()
    );
    this.selectedCountryChanged.emit(this.selectedCountry);
    if (this.selectedCountry) {
      this.phoneNumber = `${PLUS}${
        // this.selectedCountry.dialCode
        this.selectedCountry.country_code
      } ${newInputValue.replace(/ /g, '')}`;
    } else {
      this.phoneNumber = `${newInputValue.replace(/ /g, '')}`;
    }
  }

  /**
   * Returns the selected country's dialcode
   */
  public getSelectedCountryDialCode(): string | null {
    // if (this.selectedCountry) { return PLUS + this.selectedCountry.dialCode; };
    if (this.selectedCountry) { return PLUS + this.selectedCountry.country_code; };
    return null;
  }

  searchCountries(event: Event){
    // this.countries = this.allCountries.filter((country) => { return country.name.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase()) })
    this.countries = this.allCountries.filter((country) => { return country.country_name.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase()) })
  }

  sendFocusEvent(focused: boolean){
    this.phoneFocused.emit(focused);
  }

}
