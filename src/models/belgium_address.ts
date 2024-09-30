import BaseAddress from '../base_address';

export default class BelgiumAddress extends BaseAddress {
  streetNumberAvenue: string;
  apartmentSuiteUnitBuilding?: string;
  city: string;
  postalCode: string;
  houseNumber?: string;
  mailboxNumber?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumberAvenue: string,
    city: string,
    postalCode: string,
    apartmentSuiteUnitBuilding?: string,
    houseNumber?: string,
    mailboxNumber?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumberAvenue = streetNumberAvenue;
    this.city = city;
    this.postalCode = postalCode;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
    this.houseNumber = houseNumber;
    this.mailboxNumber = mailboxNumber;
  }
}
