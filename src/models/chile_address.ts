import BaseAddress from '../base_address';

export default class ChileAddress extends BaseAddress {
  address: string;
  region: string;
  city: string;
  commune: string;
  pincode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    region: string,
    city: string,
    commune: string,
    pincode: string,
    isDefault: boolean = false,
    extra?: string
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.region = region;
    this.city = city;
    this.commune = commune;
    this.pincode = pincode;
  }
}
