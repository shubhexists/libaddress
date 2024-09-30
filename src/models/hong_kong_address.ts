import { z } from 'zod';
import BaseAddress from '../base_address';
import { hongKongAddressSchema } from '../validations/model_validations';

export default class HongKongAddress extends BaseAddress {
  flatNumberFloorNumberBuildingName: string;
  streetNumberStreetName: string;
  villageTownDistrict: string;
  city: string;

  constructor(data: z.infer<typeof hongKongAddressSchema>) {
    const validated = hongKongAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.flatNumberFloorNumberBuildingName = validated.flatNumberFloorNumberBuildingName;
    this.streetNumberStreetName = validated.streetNumberStreetName;
    this.villageTownDistrict = validated.villageTownDistrict;
    this.city = validated.city;
  }
}
