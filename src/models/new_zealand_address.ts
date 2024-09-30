import BaseAddress from '../base_address';

export default class NewZealandAddress extends BaseAddress {
  streetNumber: string;
  postalCode: string;
  suburb: string;
  townCity: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumber: string,
    postalCode: string,
    suburb: string,
    townCity: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumber = streetNumber;
    this.postalCode = postalCode;
    this.suburb = suburb;
    this.townCity = townCity;
  }
}
