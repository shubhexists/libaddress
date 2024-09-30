import { z } from 'zod';

const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,}\)?[-.\s]?){1,}(\d{1,})$/;

const baseAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Mobile number is required').regex(phoneRegex, 'Invalid mobile number format'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

export default baseAddressSchema;
