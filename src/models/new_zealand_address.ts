import { z } from 'zod';
import BaseAddress from '../base_address';
import { newZealandAddressSchema } from '../validations/model_validations';

export default class NewZealandAddress extends BaseAddress {
  streetNumber: string;
  postalCode: string;
  suburb: string;
  townCity: string;

  constructor(data: z.infer<typeof newZealandAddressSchema>) {
    const validated = newZealandAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumber = validated.streetNumber;
    this.postalCode = validated.postalCode;
    this.suburb = validated.suburb;
    this.townCity = validated.townCity;
  }
}
