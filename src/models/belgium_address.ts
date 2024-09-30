import { z } from 'zod';
import BaseAddress from '../base_address';
import { belgiumAddressSchema } from '../validations/model_validations';

export default class BelgiumAddress extends BaseAddress {
  streetNumberAvenue: string;
  apartmentSuiteUnitBuilding?: string;
  city: string;
  postalCode: string;
  houseNumber?: string;
  mailboxNumber?: string;

  constructor(data: z.infer<typeof belgiumAddressSchema>) {
    const validated = belgiumAddressSchema.parse(data);
    super({
        fullName: validated.fullName,
        mobileNumber: validated.mobileNumber,
        isDefault: validated.isDefault,
        extra: validated.extra,
      });
    this.streetNumberAvenue = validated.streetNumberAvenue;
    this.city = validated.city;
    this.postalCode = validated.postalCode;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
    this.houseNumber = validated.houseNumber;
    this.mailboxNumber = validated.mailboxNumber;
  }
}
