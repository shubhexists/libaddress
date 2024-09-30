import { z } from 'zod';
import BaseAddress from '../base_address';
import { uaeAddressSchema } from '../validations/model_validations';

export default class UnitedArabEmiratesAddress extends BaseAddress {
  streetNumber: string;
  buildingNameNo: string;
  city: string;
  areaDistrict: string;
  nearestLandmark?: string;

  constructor(data: z.infer<typeof uaeAddressSchema>) {
    const validated = uaeAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumber = validated.streetNumber;
    this.buildingNameNo = validated.buildingNameNo;
    this.city = validated.city;
    this.areaDistrict = validated.areaDistrict;
    this.nearestLandmark = validated.nearestLandmark;
  }
}
