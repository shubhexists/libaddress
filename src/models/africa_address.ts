import { z } from 'zod';
import BaseAddress from '../base_address';
import { southAfricaAddressSchema } from '../validations/model_validations';

export default class SouthAfricaAddress extends BaseAddress {
  streetNumber: string;
  city: string;
  area: string;
  stateProvinceRegion: string;
  postalCode: string;

  constructor(data: z.infer<typeof southAfricaAddressSchema>) {
    const validated = southAfricaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumber = validated.streetNumber;
    this.city = validated.city;
    this.area = validated.area;
    this.stateProvinceRegion = validated.stateProvinceRegion;
    this.postalCode = validated.postalCode;
  }
}
