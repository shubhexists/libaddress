import { z } from 'zod';
import BaseAddress from '../base_address';
import { austriaAddressSchema } from '../validations/model_validations';

export default class AustriaAddress extends BaseAddress {
  address: string;
  plz: string;
  townCity?: string;

  constructor(data: z.infer<typeof austriaAddressSchema>) {
    const validated = austriaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.plz = validated.plz;
    this.townCity = validated.townCity;
  }
}
