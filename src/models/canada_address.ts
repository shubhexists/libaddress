import { CanadianProvinces } from '../enums';
import BaseAddress from '../base_address';

export default class CanadaAddress extends BaseAddress {
  streetAddressPOBox: string;
  apartmentSuiteUnitBuilding?: string;
  provinceTerritory: CanadianProvinces;
  city: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetAddressPOBox: string,
    provinceTerritory: CanadianProvinces,
    city: string,
    postalCode: string,
    apartmentSuiteUnitBuilding?: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetAddressPOBox = streetAddressPOBox;
    this.provinceTerritory = provinceTerritory;
    this.city = city;
    this.postalCode = postalCode;
    this.apartmentSuiteUnitBuilding = apartmentSuiteUnitBuilding;
  }
}
