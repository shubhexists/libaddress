import { z } from 'zod';
import BaseAddress from '../base_address';
import { unitedKingdomAddressSchema } from '../validations/model_validations';

export default class UnitedKingdomAddress extends BaseAddress {
  address: string;
  townCity: string;
  county?: string;
  postalCode: string;

  constructor(data: z.infer<typeof unitedKingdomAddressSchema>) {
    const validated = unitedKingdomAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.townCity = validated.townCity;
    this.postalCode = validated.postalCode;
    this.county = validated.county;
  }
}
