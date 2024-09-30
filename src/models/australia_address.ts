import { z } from 'zod';
import BaseAddress from '../base_address';
import { australiaAddressSchema } from '../validations/model_validations';

export default class AustraliaAddress extends BaseAddress {
  streetAddressPOBoxCompanyName: string;
  apartmentSuiteUnitBuilding?: string;
  citySuburb: string;
  stateTerritory: string;
  postalCode: string;

  constructor(data: z.infer<typeof australiaAddressSchema>) {
    const validated = australiaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetAddressPOBoxCompanyName = validated.streetAddressPOBoxCompanyName;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
    this.citySuburb = validated.citySuburb;
    this.stateTerritory = validated.stateTerritory;
    this.postalCode = validated.postalCode;
  }
}
