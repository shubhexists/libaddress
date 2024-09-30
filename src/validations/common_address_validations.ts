import { z } from 'zod';
import baseAddressSchema from './base_address.zod';

const commonAddressSchema = baseAddressSchema.extend({
  postOfficeBoxAddressName: z.string().min(1, 'Post Office Box Address Name is required'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  stateProvinceRegion: z.string().optional(),
  pincode: z.string().min(1, 'PinCode is required'),
});

export default commonAddressSchema;
