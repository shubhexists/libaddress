import BaseAddress from '../base_address';

export default class FranceAddress extends BaseAddress {
  streetAddress: string;
  apartmentSuiteUnitBuilding?: string;
  pincode: string;
  city: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetAddress: string,
    pincode: string,
    city: string,
    apartmentSuiteUnitBuilding?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetAddress = streetAddress;
    this.pincode = pincode;
    this.city = city;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
  }
}
