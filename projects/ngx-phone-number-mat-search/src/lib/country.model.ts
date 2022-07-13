// export interface Country {
//   name: string;
//   dialCode: string;
//   countryCode: string;
// }

export interface Country {
  alpha2: string;
  //alpha3: string;
  country_code: string;
  country_name: string;
  //mobile_begin_with: string[];
  phone_number_lengths: number[];
}