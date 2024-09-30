import { z } from 'zod';
import BaseAddress from '../base_address';
import { philippinesAddressSchema } from '../validations/model_validations';

export default class PhilippinesAddress extends BaseAddress {
  postalCode: string;
  barangay: string;
  city: string;
  region: string;

  constructor(data: z.infer<typeof philippinesAddressSchema>) {
    const validated = philippinesAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.postalCode = validated.postalCode;
    this.barangay = validated.barangay;
    this.city = validated.city;
    this.region = validated.region;
  }
}
