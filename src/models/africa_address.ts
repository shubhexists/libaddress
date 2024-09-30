import BaseAddress from '../base_address';

export default class SouthAfricaAddress extends BaseAddress {
  streetNumber: string;
  city: string;
  area: string;
  stateProvinceRegion: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumber: string,
    city: string,
    area: string,
    stateProvinceRegion: string,
    postalCode: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumber = streetNumber;
    this.city = city;
    this.area = area;
    this.stateProvinceRegion = stateProvinceRegion;
    this.postalCode = postalCode;
  }
}
