import { z } from 'zod';
import BaseAddress from '../base_address';
import { egyptAddressSchema } from '../validations/model_validations';

export default class EgyptAddress extends BaseAddress {
  streetNumber: string;
  buildingNameNo: string;
  cityArea: string;
  district: string;
  governorate: string;
  nearestLandmark?: string;

  constructor(data: z.infer<typeof egyptAddressSchema>) {
    const validated = egyptAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumber = validated.streetNumber;
    this.buildingNameNo = validated.buildingNameNo;
    this.cityArea = validated.cityArea;
    this.district = validated.district;
    this.governorate = validated.governorate;
    this.nearestLandmark = validated.nearestLandmark;
  }
}
