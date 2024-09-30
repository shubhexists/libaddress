import BaseAddress from '../base_address';

export default class TaiwanAddress extends BaseAddress {
  address: string;
  pincode: string;
  district: string;
  city: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    pincode: string,
    district: string,
    city: string,
    isDefault: boolean = false,
    extra?: string
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.pincode = pincode;
    this.district = district;
    this.city = city;
  }
}
