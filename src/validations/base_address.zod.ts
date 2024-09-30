import { z } from 'zod';

const baseAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

export default baseAddressSchema;
