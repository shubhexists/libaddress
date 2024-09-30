import { z } from 'zod';
import BaseAddress from '../base_address';
import { germanyAddressSchema } from '../validations/model_validations';

export default class GermanyAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  plz: string;
  townCity: string;

  constructor(data: z.infer<typeof germanyAddressSchema>) {
    const validated = germanyAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.postOfficeBoxAddressName = validated.postOfficeBoxAddressName;
    this.plz = validated.plz;
    this.townCity = validated.townCity;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
  }
}
