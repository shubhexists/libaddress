import { USStates } from '../enums';
import BaseAddress from '../base_address';

export default class UnitedStatesAddress extends BaseAddress {
  address: string;
  pincode: string;
  state: USStates;
  city: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    address: string,
    pincode: string,
    state: USStates,
    city: string,
    isDefault: boolean = false,
    extra?: string
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.address = address;
    this.pincode = pincode;
    this.state = state;
    this.city = city;
  }
}
