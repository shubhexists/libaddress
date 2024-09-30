import BaseAddress from '../base_address';

export default class AustriaAddress extends BaseAddress {
  address: string;
  plz: string;
  townCity?: string;

  constructor(fullName: string, mobileNumber: string, address: string, plz: string, townCity?: string, isDefault: boolean = false, extra?: string) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.plz = plz;
    this.townCity = townCity;
  }
}
