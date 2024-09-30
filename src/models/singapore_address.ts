import BaseAddress from '../base_address';

export default class SingaporeAddress extends BaseAddress {
  postalCode: string;
  streetAddressPOBoxCompanyName: string;
  apartmentSuiteUnitBuilding: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    postalCode: string,
    streetAddressPOBoxCompanyName: string,
    apartmentSuiteUnitBuilding: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.postalCode = postalCode;
    this.streetAddressPOBoxCompanyName = streetAddressPOBoxCompanyName;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
  }
}
