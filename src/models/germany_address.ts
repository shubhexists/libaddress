import BaseAddress from '../base_address';

export default class GermanyAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  plz: string;
  townCity: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    postOfficeBoxAddressName: string,
    plz: string,
    townCity: string,
    apartmentSuiteUnitBuilding?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.postOfficeBoxAddressName = postOfficeBoxAddressName;
    this.plz = plz;
    this.townCity = townCity;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
  }
}
