import BaseAddress from '../base_address';

export default class ItalyAddress extends BaseAddress {
  streetAddress: string;
  staircaseFloorInteriorCompany?: string;
  pincode: string;
  city: string;
  province?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetAddress: string,
    pincode: string,
    city: string,
    staircaseFloorInteriorCompany?: string,
    province?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetAddress = streetAddress;
    this.pincode = pincode;
    this.city = city;
    this.staircaseFloorInteriorCompany = staircaseFloorInteriorCompany;
    this.province = province;
  }
}
