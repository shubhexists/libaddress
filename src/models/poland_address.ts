import { z } from 'zod';
import BaseAddress from '../base_address';
import { polandAddressSchema } from '../validations/model_validations';

export default class PolandAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  postalCode: string;
  city?: string;

  constructor(data: z.infer<typeof polandAddressSchema>) {
    const validated = polandAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.postOfficeBoxAddressName = validated.postOfficeBoxAddressName;
    this.postalCode = validated.postalCode;
    this.city = validated.city;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
  }
}
