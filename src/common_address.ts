import { z } from 'zod';
import BaseAddress from './base_address';
import { commonAddressSchema } from './validations';

export default class CommonAddress extends BaseAddress {
  postOfficeBoxAddressName: string;
  apartmentSuiteUnitBuilding?: string;
  city: string;
  stateProvinceRegion?: string;
  pincode: string;

  constructor(data: z.infer<typeof commonAddressSchema>) {
    super(data);
    const validated = commonAddressSchema.parse(data);
    this.postOfficeBoxAddressName = validated.postOfficeBoxAddressName;
    this.city = validated.city;
    this.pincode = validated.pincode;
    this.apartmentSuiteUnitBuilding = validated.apartmentSuiteUnitBuilding;
    this.stateProvinceRegion = validated.stateProvinceRegion;
  }
}
