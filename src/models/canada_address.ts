import { CanadianProvinces } from '../enums';
import BaseAddress from '../base_address';
import { z } from 'zod';
import { canadaAddressSchema } from '../validations/model_validations';

export default class CanadaAddress extends BaseAddress {
  streetAddressPOBox: string;
  apartmentSuiteUnitBuilding?: string;
  provinceTerritory: CanadianProvinces;
  city: string;
  postalCode: string;

  constructor(data: z.infer<typeof canadaAddressSchema>) {
    const validated = canadaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetAddressPOBox = validated.streetAddressPOBox;
    this.provinceTerritory = validated.provinceTerritory;
    this.city = validated.city;
    this.postalCode = validated.postalCode;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
  }
}
