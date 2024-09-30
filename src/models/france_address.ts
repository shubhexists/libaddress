import { z } from 'zod';
import BaseAddress from '../base_address';
import { franceAddressSchema } from '../validations/model_validations';

export default class FranceAddress extends BaseAddress {
  streetAddress: string;
  apartmentSuiteUnitBuilding?: string;
  pincode: string;
  city: string;

  constructor(data: z.infer<typeof franceAddressSchema>) {
    const validated = franceAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetAddress = validated.streetAddress;
    this.pincode = validated.pincode;
    this.city = validated.city;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
  }
}
