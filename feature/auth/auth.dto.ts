import { z } from "zod";

export const RNBUser = z.object({
  uid: z.string(),
  displayName: z.optional(z.string()),
  email: z.optional(z.string()),
  photoURL: z.optional(z.string()),
});