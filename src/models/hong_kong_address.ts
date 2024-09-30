import BaseAddress from '../base_address';

export default class HongKongAddress extends BaseAddress {
  flatNumberFloorNumberBuildingName: string;
  streetNumberStreetName: string;
  villageTownDistrict: string;
  city: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    flatNumberFloorNumberBuildingName: string,
    streetNumberStreetName: string,
    villageTownDistrict: string,
    city: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.flatNumberFloorNumberBuildingName = flatNumberFloorNumberBuildingName;
    this.streetNumberStreetName = streetNumberStreetName;
    this.villageTownDistrict = villageTownDistrict;
    this.city = city;
  }
}
