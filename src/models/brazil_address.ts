import BaseAddress from '../base_address';

export default class BrazilAddress extends BaseAddress {
  streetNumber: string;
  houseNumber: string;
  apartmentSuiteUnitBuilding: string;
  area: string;
  city: string;
  state: string;
  pincode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumber: string,
    houseNumber: string,
    apartmentSuiteUnitBuilding: string,
    area: string,
    city: string,
    state: string,
    pincode: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumber = streetNumber;
    this.houseNumber = houseNumber;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
    this.area = area;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
  }
}
