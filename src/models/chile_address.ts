import { z } from 'zod';
import BaseAddress from '../base_address';
import { chileAddressSchema } from '../validations/model_validations';

export default class ChileAddress extends BaseAddress {
  address: string;
  region: string;
  city: string;
  commune: string;
  pincode: string;

  constructor(data: z.infer<typeof chileAddressSchema>) {
    const validated = chileAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.region = validated.region;
    this.city = validated.city;
    this.commune = validated.commune;
    this.pincode = validated.pincode;
  }
}
