import BaseAddress from '../base_address';

export default class UnitedArabEmiratesAddress extends BaseAddress {
  streetNumber: string;
  buildingNameNo: string;
  city: string;
  areaDistrict: string;
  nearestLandmark?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumber: string,
    buildingNameNo: string,
    city: string,
    areaDistrict: string,
    nearestLandmark?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumber = streetNumber;
    this.buildingNameNo = buildingNameNo;
    this.city = city;
    this.areaDistrict = areaDistrict;
    this.nearestLandmark = nearestLandmark;
  }
}
