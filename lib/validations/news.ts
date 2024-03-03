import { z } from 'zod';

export const NewsValidation = z.object({
  image: z.string().url(),
  title: z.string().min(3).max(100),
  author: z.string().min(3).max(30),
  text: z.string().min(30).max(5000),
});