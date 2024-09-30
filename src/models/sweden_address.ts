import { z } from 'zod';
import BaseAddress from '../base_address';
import { swedenAddressSchema } from '../validations/model_validations';

export default class SwedenAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  city: string;
  postalCode: string;

  constructor(data: z.infer<typeof swedenAddressSchema>) {
    const validated = swedenAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.postOfficeBoxAddressName = validated.postOfficeBoxAddressName;
    this.city = validated.city;
    this.postalCode = validated.postalCode;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
  }
}
