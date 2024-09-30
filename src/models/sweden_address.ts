import BaseAddress from '../base_address';

export default class SwedenAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  city: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    postOfficeBoxAddressName: string,
    city: string,
    postalCode: string,
    apartmentSuiteUnitBuilding?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.postOfficeBoxAddressName = postOfficeBoxAddressName;
    this.city = city;
    this.postalCode = postalCode;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
  }
}
