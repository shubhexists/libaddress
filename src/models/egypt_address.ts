import BaseAddress from '../base_address';

export default class EgyptAddress extends BaseAddress {
  streetNumber: string;
  buildingNameNo: string;
  cityArea: string;
  district: string;
  governorate: string;
  nearestLandmark?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumber: string,
    buildingNameNo: string,
    cityArea: string,
    district: string,
    governorate: string,
    nearestLandmark?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumber = streetNumber;
    this.buildingNameNo = buildingNameNo;
    this.cityArea = cityArea;
    this.district = district;
    this.governorate = governorate;
    this.nearestLandmark = nearestLandmark;
  }
}
