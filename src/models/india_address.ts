import { IndianStates } from '../enums';
import BaseAddress from '../base_address';
import { z } from 'zod';
import { indiaAddressSchema } from '../validations/model_validations';

export default class IndiaAddress extends BaseAddress {
  pincode: string;
  flatHouseNoBuildingCompanyApartment: string;
  areaStreetSectorVillage: string;
  landmark?: string;
  townCity: string;
  state: IndianStates;

  constructor(data: z.infer<typeof indiaAddressSchema>) {
    const validated = indiaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.pincode = validated.pincode;
    this.flatHouseNoBuildingCompanyApartment = validated.flatHouseNoBuildingCompanyApartment;
    this.areaStreetSectorVillage = validated.areaStreetSectorVillage;
    this.townCity = validated.townCity;
    this.state = validated.state;
    this.landmark = validated.landmark;
  }
}
