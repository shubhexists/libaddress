import BaseAddress from '../base_address';

export default class AustraliaAddress extends BaseAddress {
  streetAddressPOBoxCompanyName: string;
  apartmentSuiteUnitBuilding: string;
  citySuburb: string;
  stateTerritory: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetAddressPOBoxCompanyName: string,
    apartmentSuiteUnitBuilding: string,
    citySuburb: string,
    stateTerritory: string,
    postalCode: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetAddressPOBoxCompanyName = streetAddressPOBoxCompanyName;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
    this.citySuburb = citySuburb;
    this.stateTerritory = stateTerritory;
    this.postalCode = postalCode;
  }
}
