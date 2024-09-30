import { JapanesePrefectures } from '../enums';
import BaseAddress from '../base_address';

export default class JapanAddress extends BaseAddress {
  prefecture: JapanesePrefectures;
  postalCode: string;
  cityWardTown: string;
  chromeBanchiGo?: string;
  buildingAptCompanyName?: string;
  unitRoomNo?: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    prefecture: JapanesePrefectures,
    postalCode: string,
    cityWardTown: string,
    chromeBanchiGo?: string,
    buildingAptCompanyName?: string,
    unitRoomNo?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.prefecture = prefecture;
    this.postalCode = postalCode;
    this.cityWardTown = cityWardTown;
    this.chromeBanchiGo = chromeBanchiGo;
    this.buildingAptCompanyName = buildingAptCompanyName;
    this.unitRoomNo = unitRoomNo;
  }
}
