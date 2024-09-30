import { z } from 'zod';
import BaseAddress from '../base_address';
import { mexicoAddressSchema } from '../validations/model_validations';

export default class MexicoAddress extends BaseAddress {
  streetAddress: string;
  postalCode: string;
  stateProvinceRegion: string;
  city: string;
  colony: string;

  constructor(data: z.infer<typeof mexicoAddressSchema>) {
    const validated = mexicoAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetAddress = validated.streetAddress;
    this.postalCode = validated.postalCode;
    this.stateProvinceRegion = validated.stateProvinceRegion;
    this.city = validated.city;
    this.colony = validated.colony;
  }
}
