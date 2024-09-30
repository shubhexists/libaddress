import BaseAddress from '../base_address';

export default class TurkeyAddress extends BaseAddress {
  address: string;
  city: string;
  stateProvinceRegion?: string;
  area?: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    city: string,
    postalCode: string,
    stateProvinceRegion?: string,
    area?: string,
    isDefault: boolean = false,
    extra?: string
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
    this.stateProvinceRegion = stateProvinceRegion;
    this.area = area;
  }
}
