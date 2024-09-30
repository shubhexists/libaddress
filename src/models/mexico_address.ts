import BaseAddress from '../base_address';

export default class MexicoAddress extends BaseAddress {
  streetAddress: string;
  postalCode: string;
  stateProvinceRegion: string;
  city: string;
  colony: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetAddress: string,
    postalCode: string,
    stateProvinceRegion: string,
    city: string,
    colony: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.stateProvinceRegion = stateProvinceRegion;
    this.city = city;
    this.colony = colony;
  }
}
