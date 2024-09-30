import { IrishCounties } from '../enums';
import BaseAddress from '../base_address';

export default class RepublicOfIrelandAddress extends BaseAddress {
  address: string;
  county?: IrishCounties;
  eircode: string;
  city: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    eircode: string,
    city: string,
    county?: IrishCounties,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault);
    this.address = address;
    this.eircode = eircode;
    this.city = city;
    this.county = county;
  }
}
