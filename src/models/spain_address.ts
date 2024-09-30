import { z } from 'zod';
import BaseAddress from '../base_address';
import { spainAddressSchema } from '../validations/model_validations';

export default class SpainAddress extends BaseAddress {
  address: string;
  city: string;
  province?: string;
  postalCode: string;
  nif?: string;

  constructor(data: z.infer<typeof spainAddressSchema>) {
    const validated = spainAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.city = validated.city;
    this.postalCode = validated.postalCode;
    this.province = validated.province;
    this.nif = validated.nif;
  }
}
