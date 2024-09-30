import { IndianStates } from '../enums';
import BaseAddress from '../base_address';

export default class IndiaAddress extends BaseAddress {
  pincode: string;
  flatHouseNoBuildingCompanyApartment: string;
  areaStreetSectorVillage: string;
  landmark?: string;
  townCity: string;
  state: IndianStates;

  constructor(
    fullName: string,
    mobileNumber: string,
    pincode: string,
    flatHouseNoBuildingCompanyApartment: string,
    areaStreetSectorVillage: string,
    townCity: string,
    state: IndianStates,
    landmark?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.pincode = pincode;
    this.flatHouseNoBuildingCompanyApartment = flatHouseNoBuildingCompanyApartment;
    this.areaStreetSectorVillage = areaStreetSectorVillage;
    this.townCity = townCity;
    this.state = state;
    this.landmark = landmark;
  }
}
