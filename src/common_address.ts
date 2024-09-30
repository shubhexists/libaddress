import BaseAddress from './base_address';

export default class CommonAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  city: string;
  stateProvinceRegion?: string;
  pincode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    postOfficeBoxAddressName: string,
    city: string,
    pincode: string,
    apartmentSuiteUnitBuilding?: string,
    stateProvinceRegion?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.postOfficeBoxAddressName = postOfficeBoxAddressName;
    this.city = city;
    this.pincode = pincode;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
    this.stateProvinceRegion = stateProvinceRegion;
  }
}
