import BaseAddress from '../base_address';

export default class SpainAddress extends BaseAddress {
  address: string;
  city: string;
  province?: string;
  postalCode: string;
  nif?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    city: string,
    postalCode: string,
    province?: string,
    nif?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
    this.province = province;
    this.nif = nif;
  }
}
