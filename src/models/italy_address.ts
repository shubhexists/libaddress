import { z } from 'zod';
import BaseAddress from '../base_address';
import { italyAddressSchema } from '../validations/model_validations';

export default class ItalyAddress extends BaseAddress {
  streetAddress: string;
  staircaseFloorInteriorCompany?: string;
  pincode: string;
  city: string;
  province?: string;

  constructor(data: z.infer<typeof italyAddressSchema>) {
    const validated = italyAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetAddress = validated.streetAddress;
    this.pincode = validated.pincode;
    this.city = validated.city;
    this.staircaseFloorInteriorCompany = validated.staircaseFloorInteriorCompany;
    this.province = validated.province;
  }
}
