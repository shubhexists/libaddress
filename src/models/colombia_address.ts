import { z } from 'zod';
import BaseAddress from '../base_address';
import { colombiaAddressSchema } from '../validations/model_validations';

export default class ColombiaAddress extends BaseAddress {
  streetNumberApartment: string;
  department: string;
  cityMunicipality: string;
  neighbourhood: string;
  postalCode: string;

  constructor(data: z.infer<typeof colombiaAddressSchema>) {
    const validated = colombiaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumberApartment = validated.streetNumberApartment;
    this.department = validated.department;
    this.cityMunicipality = validated.cityMunicipality;
    this.neighbourhood = validated.neighbourhood;
    this.postalCode = validated.postalCode;
  }
}
