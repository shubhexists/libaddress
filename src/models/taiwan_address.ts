import { z } from 'zod';
import BaseAddress from '../base_address';
import { taiwanAddressSchema } from '../validations/model_validations';

export default class TaiwanAddress extends BaseAddress {
  address: string;
  pincode: string;
  district: string;
  city: string;

  constructor(data: z.infer<typeof taiwanAddressSchema>) {
    const validated = taiwanAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.pincode = validated.pincode;
    this.district = validated.district;
    this.city = validated.city;
  }
}
