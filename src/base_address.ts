import { z } from 'zod';
import baseAddressSchema from './validations/base_address.zod';

export default abstract class BaseAddress {
  fullName: string;
  mobileNumber: string;
  isDefault: boolean;
  extra?: string;

  constructor(data: z.infer<typeof baseAddressSchema>) {
    const validated = baseAddressSchema.parse(data);
    this.fullName = validated.fullName;
    this.mobileNumber = validated.mobileNumber;
    this.isDefault = validated.isDefault;
    this.extra = validated.extra;
  }
}
