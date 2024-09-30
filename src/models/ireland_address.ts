import { IrishCounties } from '../enums';
import BaseAddress from '../base_address';
import { republicOfIrelandAddressSchema } from '../validations/model_validations';
import { z } from 'zod';

export default class RepublicOfIrelandAddress extends BaseAddress {
  address: string;
  county?: IrishCounties;
  eircode: string;
  city: string;

  constructor(data: z.infer<typeof republicOfIrelandAddressSchema>) {
    const validated = republicOfIrelandAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.address = validated.address;
    this.eircode = validated.eircode;
    this.city = validated.city;
    this.county = validated.county;
  }
}
