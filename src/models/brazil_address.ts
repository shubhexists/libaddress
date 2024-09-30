import { z } from 'zod';
import BaseAddress from '../base_address';
import { brazilAddressSchema } from '../validations/model_validations';

export default class BrazilAddress extends BaseAddress {
  streetNumber: string;
  houseNumber: string;
  apartmentSuiteUnitBuilding?: string;
  area: string;
  city: string;
  state: string;
  pincode: string;

  constructor(data: z.infer<typeof brazilAddressSchema>) {
    const validated = brazilAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumber = validated.streetNumber;
    this.houseNumber = validated.houseNumber;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
    this.area = validated.area;
    this.city = validated.city;
    this.state = validated.state;
    this.pincode = validated.pincode;
  }
}
