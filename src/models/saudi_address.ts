import BaseAddress from '../base_address';

export default class SaudiArabiaAddress extends BaseAddress {
  streetNumber: string;
  buildingNameNo: string;
  city: string;
  area: string;
  province: string;
  nearestLandmark?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumber: string,
    buildingNameNo: string,
    city: string,
    area: string,
    province: string,
    nearestLandmark?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumber = streetNumber;
    this.buildingNameNo = buildingNameNo;
    this.city = city;
    this.area = area;
    this.province = province;
    this.nearestLandmark = nearestLandmark;
  }
}
