import { z } from 'zod';
import BaseAddress from '../base_address';
import { saudiArabiaAddressSchema } from '../validations/model_validations';

export default class SaudiArabiaAddress extends BaseAddress {
  streetNumber: string;
  buildingNameNo: string;
  city: string;
  area: string;
  province: string;
  nearestLandmark?: string;

  constructor(data: z.infer<typeof saudiArabiaAddressSchema>) {
    const validated = saudiArabiaAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.streetNumber = validated.streetNumber;
    this.buildingNameNo = validated.buildingNameNo;
    this.city = validated.city;
    this.area = validated.area;
    this.province = validated.province;
    this.nearestLandmark = validated.nearestLandmark;
  }
}
