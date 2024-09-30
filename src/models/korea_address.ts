import BaseAddress from '../base_address';

export default class RepublicOfKoreaAddress extends BaseAddress {
  address: string;
  zipCode: string;
  city: string;
  province: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    zipCode: string,
    city: string,
    province: string,
    isDefault: boolean = false,
    extra?: string
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.zipCode = zipCode;
    this.city = city;
    this.province = province;
  }
}
