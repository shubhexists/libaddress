import BaseAddress from '../base_address';

export default class PolandAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  postalCode: string;
  city?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    postOfficeBoxAddressName: string,
    postalCode: string,
    city?: string,
    apartmentSuiteUnitBuilding?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.postOfficeBoxAddressName = postOfficeBoxAddressName;
    this.postalCode = postalCode;
    this.city = city;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
  }
}
