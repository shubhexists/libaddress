import BaseAddress from '../base_address';

export default class ColombiaAddress extends BaseAddress {
  streetNumberApartment: string;
  department: string;
  cityMunicipality: string;
  neighbourhood: string;
  postalCode: string;

  constructor(
    fullName: string,
    mobileNumber: string,
    streetNumberApartment: string,
    department: string,
    cityMunicipality: string,
    neighbourhood: string,
    postalCode: string,
    extra?: string,
    isDefault: boolean = false
  ) {
    super(fullName, mobileNumber, isDefault, extra);
    this.streetNumberApartment = streetNumberApartment;
    this.department = department;
    this.cityMunicipality = cityMunicipality;
    this.neighbourhood = neighbourhood;
    this.postalCode = postalCode;
  }
}
