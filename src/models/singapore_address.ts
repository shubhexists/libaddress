import { z } from 'zod';
import BaseAddress from '../base_address';
import { singaporeAddressSchema } from '../validations/model_validations';

export default class SingaporeAddress extends BaseAddress {
  postalCode: string;
  streetAddressPOBoxCompanyName: string;
  apartmentSuiteUnitBuilding: string;

  constructor(data: z.infer<typeof singaporeAddressSchema>) {
    const validated = singaporeAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.postalCode = validated.postalCode;
    this.streetAddressPOBoxCompanyName = validated.streetAddressPOBoxCompanyName;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
  }
}
