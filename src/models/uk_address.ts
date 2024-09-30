import BaseAddress from '../base_address';

export default class UnitedKingdomAddress extends BaseAddress {
  address: string;
  townCity: string;
  county?: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    townCity: string,
    postalCode: string,
    county?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.townCity = townCity;
    this.postalCode = postalCode;
    this.county = county;
  }
}
