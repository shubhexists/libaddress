import { JapanesePrefectures } from '../enums';
import BaseAddress from '../base_address';
import { z } from 'zod';
import { japanAddressSchema } from '../validations/model_validations';

export default class JapanAddress extends BaseAddress {
  prefecture: JapanesePrefectures;
  postalCode: string;
  cityWardTown: string;
  chromeBanchiGo?: string;
  buildingAptCompanyName?: string;
  unitRoomNo?: string;

  constructor(data: z.infer<typeof japanAddressSchema>) {
    const validated = japanAddressSchema.parse(data);
    super({
      fullName: validated.fullName,
      mobileNumber: validated.mobileNumber,
      isDefault: validated.isDefault,
      extra: validated.extra,
    });
    this.prefecture = validated.prefecture;
    this.postalCode = validated.postalCode;
    this.cityWardTown = validated.cityWardTown;
    this.chromeBanchiGo = validated.chromeBanchiGo;
    this.buildingAptCompanyName = validated.buildingAptCompanyName;
    this.unitRoomNo = validated.unitRoomNo;
  }
}
