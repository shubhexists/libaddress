import { z } from 'zod';
import BaseAddress from '../base_address';
import { koreaAddressSchema } from '../validations/model_validations';

export default class RepublicOfKoreaAddress extends BaseAddress {
  address: string;
  zipCode: string;
  city: string;
  province: string;

  constructor(data: z.infer<typeof koreaAddressSchema>) {
    const validated = koreaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.zipCode = validated.zipCode;
    this.city = validated.city;
    this.province = validated.province;
  }
}
