import { z } from 'zod';

export const DevoteeValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z.string().min(3).max(30),
  lastname: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  country: z.string().min(1).max(30),
  bio: z.string().max(1000),
});
