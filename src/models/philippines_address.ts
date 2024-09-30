import BaseAddress from '../base_address';

export default class PhilippinesAddress extends BaseAddress {
  postalCode: string;
  barangay: string;
  city: string;
  region: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    postalCode: string,
    barangay: string,
    city: string,
    region: string,
    isDefault: boolean = false,
    extra?: string
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.postalCode = postalCode;
    this.barangay = barangay;
    this.city = city;
    this.region = region;
  }
}
