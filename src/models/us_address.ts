import { USStates } from '../enums';
import BaseAddress from '../base_address';
import { z } from 'zod';
import { unitedStatesAddressSchema } from '../validations/model_validations';

export default class UnitedStatesAddress extends BaseAddress {
  address: string;
  pincode: string;
  state: USStates;
  city: string;

  constructor(data: z.infer<typeof unitedStatesAddressSchema>) {
    const validated = unitedStatesAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.pincode = validated.pincode;
    this.state = validated.state;
    this.city = validated.city;
  }
}
