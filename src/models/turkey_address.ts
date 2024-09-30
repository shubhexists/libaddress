import { z } from 'zod';
import BaseAddress from '../base_address';
import { turkeyAddressSchema } from '../validations/model_validations';

export default class TurkeyAddress extends BaseAddress {
  address: string;
  city: string;
  stateProvinceRegion?: string;
  area?: string;
  postalCode: string;

  constructor(data: z.infer<typeof turkeyAddressSchema>) {
    const validated = turkeyAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.city = validated.city;
    this.postalCode = validated.postalCode;
    this.stateProvinceRegion = validated.stateProvinceRegion;
    this.area = validated.area;
  }
}
